import React, { useState, useEffect } from "react";
import "./Test.css";
import axios from "axios";
import Question from "./Question";
import Clock from "./Clock";
import Rank from "./Rank";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  main__test: {
    minHeight: '600px',
  },
  card__title: {
    background: '#3a4bcd',
    color: '#fff',
    fontSize: '20px',
    padding: '15px',
    textAlign: 'center',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px'
  },
  row__result: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '45px'
  },
  col__result: {
    width: '150px',
    height: '150px',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    background: '#3a4bcd',
    borderRadius: '8px',
    color: '#fff'
  },
  result: {
    fontSize: '40px'
  },
  card__notification: {
    textAlign: 'center',
    fontSize: '25px',
    fontWeight: 'bold',
    margin: '35px'
}
})

export default function Test() {
  const classes = useStyles();
  const [data, setData] = useState('');
  const [dataUsers, setDataUsers] = useState('');
  const [userLogin, setUserLogin] = useState('');

  useEffect(() => {
    async function fetchDataQuestions() {
      const result = await axios.get("http://localhost:3000/questions");
      setData(result.data);
    }
    fetchDataQuestions();

    async function fetchDataUsers() {
      const result = await axios.get("http://localhost:3000/users");
      setDataUsers(result.data);
    }
    fetchDataUsers();

    setUserLogin(JSON.parse(localStorage.getItem("dataUser")));
  }, []);

  // pick 10 questions at random
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    function randomData() {
      if (data.length > 0) {
        if (questions.length >= 10) return;
        const key = Math.floor(Math.random() * data.length);
        const question = data[key];
        data.splice(key, 1);
        setQuestions([...questions, question]);
      }
    }
    randomData();
  });

  // choose the last changed answer
  const [selectedRadio, setSelectedRadio] = useState([]);
  function handleChange(answer) {
    if (selectedRadio.length > 0) {
      const index = selectedRadio.findIndex(
        (item) => item.questionId === answer.questionId
      );
      if (index >= 0) {
        selectedRadio[index] = answer;
        setSelectedRadio([...selectedRadio]);
      } else {
        setSelectedRadio([...selectedRadio, answer]);
      }
    } else {
      setSelectedRadio([...selectedRadio, answer]);
    }
  }

  // get time down
  const [clock, setClock] = useState({});
  const getTimeDown = (data) => {
    setClock(data);
  };

  // format time
  function secondsToTime(secs) {
    let hours = Math.floor(secs / 3600);

    let divisor_for_minutes = secs % 3600;
    let minutes = Math.floor(divisor_for_minutes / 60);

    let seconds = divisor_for_minutes % 60;
    let obj = {
      h: `0${hours}`.slice(-2),
      m: `0${minutes}`.slice(-2),
      s: `0${seconds}`.slice(-2),
    };
    return obj;
  }

  //get result
  const [result, setResult] = useState('');
  const [point, setPoint] = useState('');
  const [flagSubmit, setFlagSubmit] = useState(false);
  const [getTimeTest, setGetTimeTest] = useState('');
  const [time, setTime] = useState('');
  const arr = [];

  function handleSubmit() {
    setFlagSubmit(true);

    // get answer true
    selectedRadio.map((i) => {
      if (i.result === "true") {
        arr.push(i.result);
      }
      return "";
    });

    setResult(arr.length);
    setPoint(((arr.length / questions.length) * 10).toFixed(2));
    setGetTimeTest(secondsToTime(600 - clock));
    setTime(600-clock);

    // check condition update user
    const findUser = dataUsers.find(user => user.email === userLogin.email); 
    const newUser = ({
      ...userLogin,
      result: arr.length,
      time: 600 - clock,
    });

    if(arr.length > userLogin.result || arr.length === findUser.result && (600-clock) < findUser.time) {
      axios.patch(`http://localhost:3000/users/${findUser.id}`, newUser)
    } 

    alert("Nộp bài thành công!");
  }

  return (
    <Container maxWidth="md" className={classes.main__test}>
      {userLogin ? (
        <Box display="flex" justifyContent="space-between" my={5}>
          <Clock getTimeDown={getTimeDown} clock={secondsToTime(clock)} />
          <Box fixed>
            {flagSubmit && (
              <Box border={1} borderColor="#d9d9d9" borderRadius={8} mb={1.5}>
                <Typography className={classes.card__title}>Kết quả bạn đạt được</Typography>
                <Box className={classes.row__result}>
                  <Box className={classes.col__result}>
                    <Typography component="p">Số câu đúng</Typography>
                    <Typography component="span" className={classes.result}>{`${result}/${questions.length}`}</Typography>
                  </Box>
                  <Box className={classes.col__result}>
                    <Typography component="p">Điểm số</Typography>
                    <Typography component="span" className={classes.result}>{point}</Typography>
                  </Box>
                  <Box className={classes.col__result}>
                    <Typography component="p">Thời gian làm</Typography>
                    <Typography component="span" className={classes.result}>{`${getTimeTest.m}:${getTimeTest.s}`}</Typography>
                  </Box>
                </Box>
                {point < 5 ? (
                  <Typography className={classes.card__notification}>
                    Bạn cần cố gắng thêm nữa!
                  </Typography>
                ) : (
                  <Typography className={classes.card__notification}>
                    Chúc mừng bạn hoàn thành tốt phần thi!
                  </Typography>
                )}
              </Box>
            )}
            <Box p={3} border={1} borderColor="#d9d9d9" borderRadius={8}>
              <Typography variant="h4" color="textPrimary">Bài kiểm tra trắc nghiệm Tiếng Anh</Typography>
              <Question
                questions={questions}
                onHandleChange={handleChange}
                onSubmit={handleSubmit}
              />
            </Box>
          </Box>
          <Rank dataUsers={dataUsers} />
        </Box>
      ) : (
        <Box m={2} textAlign="center">
          <Typography variant="h4" color="secondary">Bạn cần đăng nhập để làm bài test!</Typography>
        </Box>
      )}
    </Container>
  );
}