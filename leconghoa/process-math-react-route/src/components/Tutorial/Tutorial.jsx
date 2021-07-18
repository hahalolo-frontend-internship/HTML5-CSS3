import React from "react";
import radio_icon from "../../img/radio-icon.png";
import checkbox_icon from "../../img/checkbox-icon.png";
import next from "../../img/next-question-icon.png";
import back from "../../img/back-question-icon.png";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "../Button";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  root: {
    background: "#ffebc9",
  },
}));
function Tutorial(props) {
  const classes = useStyles();
  return (
    <>
      <Box
        padding="40px"
        border="1px solid #ff913c"
        borderRadius="8px"
        className={classes.root}
      >
        <Typography align="center" component="div">
          <Box fontWeight="fontWeightBold" fontSize={28} color="#ff913c">
            Hướng dẫn làm bài trắc nghiệm
          </Box>
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          borderBottom="1px solid #ff913c"
          pb={3.5}
          mt={3.5}
          mb={3.5}
        >
          <img src={radio_icon} alt="icon" />
          <Typography>
            <Box ml={2}>Chọn câu trả lời đúng</Box>
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          borderBottom="1px solid #ff913c"
          pb={3.5}
          mt={3.5}
          mb={3.5}
        >
          <img src={checkbox_icon} alt="icon" />
          <Typography>
            <Box ml={2}>
              Đánh dấu <b>"Xem lại"</b> nếu câu trả lời <b>chưa chắc chắn</b>
            </Box>
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          borderBottom="1px solid #ff913c"
          pb={3.5}
          mt={3.5}
          mb={3.5}
        >
          <img src={next} alt="icon" />
          <Typography>
            <Box ml={2}>
              Chuyển qua <b>câu kế tiếp</b>
            </Box>
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          borderBottom="1px solid #ff913c"
          pb={3.5}
          mt={3.5}
          mb={3.5}
        >
          <img src={back} alt="icon" />
          <Typography>
            <Box ml={2}>
              Quay lại <b>câu trước</b>
            </Box>
          </Typography>
        </Box>
        <Box>
          <Typography component="h5" variant="h5">
            <Box fontWeight="fontWeightBold" color="#ff913c">
              Lưu ý:
            </Box>
          </Typography>
          <Typography>
            Những câu <b>chưa chọn đáp án</b> sẽ được tính là
            <b> câu trả lời sai</b>
          </Typography>
          <Typography>
            Nếu bạn <b>thoát ra</b> trong lúc chưa hết thời gian làm bài thì kết
            quả <b>sẽ không được tính </b>
          </Typography>
        </Box>
      </Box>
      <Box width={330} margin={"auto"} mt={4}>
        <Button
          onClick={props.onClick}
          width={"100%"}
          background="#ffb83c"
          borderradius="8px"
        >
          Bắt đầu làm bài
        </Button>
      </Box>
    </>
  );
}

export default Tutorial;
