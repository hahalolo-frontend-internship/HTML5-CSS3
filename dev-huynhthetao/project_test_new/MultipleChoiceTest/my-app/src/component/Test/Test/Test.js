import React, { useState, useEffect } from 'react';
import './Test.css';
import axios from 'axios';
import Question from '../Question/Question';
import Clock from '../Clock/Clock';
import Container from '@material-ui/core/Container';


export default function Test() {
    const [data, setData] = useState([]);
    const [dataUser, setDataUser] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get('http://localhost:3000/questions');
            setData(result.data);
        }
        fetchData();

        setDataUser(localStorage.getItem('dataUser'))
    }, []);

    // pick 10 questions at random
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        function randomData() {
            if(data.length > 0) {
                if(questions.length >= 10) return;
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
        if(selectedRadio.length > 0) {
            const index = selectedRadio.findIndex(
                (item) => item.questionId === answer.questionId
            );
            if(index >= 0 ) {
                selectedRadio[index] = answer;
                setSelectedRadio([...selectedRadio])
            } else {
                setSelectedRadio([...selectedRadio, answer])
            }
        } 
        else {
            setSelectedRadio([...selectedRadio, answer])
        }
    }

    // handle time
    const [clock, setClock] = useState({});
    const getTimeDown = (data) => {
        // console.log(data);
        setClock(secondsToTime(data))
    }

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
    // const [timeTest, setTimeTest] = useState('');
    const arr = [];

    function handleSubmit() {
        setFlagSubmit(true);

        // get answer true
        selectedRadio.map(i => {
            if(i.result === 'true') {
                arr.push(i.result)
            }
            return '';
        })
        
        setResult(`${arr.length}/${questions.length}`)
        setPoint((arr.length / questions.length * 10).toFixed(2))
    }

    return (
        <div className="main__test">
        {
            dataUser ?
            <div className="session__form">

                <Clock getTimeDown={getTimeDown} clock={clock} onSubmit={handleSubmit} />

                <div className="main__left">
                    {
                        flagSubmit && 
                        <div className="session__result session__result--big">
                            <h2 className="card__title--top">Kết quả bạn đạt được</h2>
                            <div className="row__result">
                                <div className="col__result">
                                    <p>Số câu đúng</p>
                                    <span>{result}</span>
                                </div>
                                <div className="col__result">
                                    <p>Điểm số</p>
                                <span>{point}</span>
                                </div>
                                <div className="col__result">
                                    <p>Thời gian làm</p>
                                    <span>00:00</span>
                                </div>
                            </div>  
                            {
                                point < 5 ? 
                                <p className="card__notification">Bạn cần cố gắng thêm nữa!</p> 
                                : <p className="card__notification">Chúc mừng bạn hoàn thành tốt phần thi!</p> 
                            }  
                        </div>
                    }
                    <div className="session__question">
                        <h2 className="form__title">Bài kiểm tra trắc nghiệm Tiếng Anh</h2>
                        <Question 
                            questions={questions} 
                            onHandleChange={handleChange} 
                            onSubmit={handleSubmit}
                        />
                    </div>      
                </div>

                <div className="session__result session__result--top">
                    <h2 className="card__title--top">Top 10/273 lượt thi</h2>
                    <div className="session__top">
                        <div className="row__top">
                            <div className="row__col--1-2">Tên</div>
                            <div className="row__col--1-4 row__col--center">Điểm</div>
                            <div className="row__col--1-4 row__col--center">Thời gian</div>
                        </div>
                        <div className="row__top">
                            <div className="row__col--1-2">Nguyễn Văn A</div>
                            <div className="row__col--1-4 row__col--center">10</div>
                            <div className="row__col--1-4 row__col--center">9:07</div>
                        </div>
                        <div className="row__top">
                            <div className="row__col--1-2">Nguyễn Văn B</div>
                            <div className="row__col--1-4 row__col--center">10</div>
                            <div className="row__col--1-4 row__col--center">11:26</div>
                        </div>
                        <div className="row__top">
                            <div className="row__col--1-2">Nguyễn Văn C</div>
                            <div className="row__col--1-4 row__col--center">9</div>
                            <div className="row__col--1-4 row__col--center">11:03</div>
                        </div>
                    </div>    
                    <button className="button">Xem thêm</button>
                </div>  
            </div> 
            : <h3 className="session__title session__title--red">Bạn cần đăng nhập để làm bài test!</h3>
        }
        </div>
    );
}

// get time test




