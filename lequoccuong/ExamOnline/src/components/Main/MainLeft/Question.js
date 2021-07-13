import { useContext } from "react";
import { examContainerContext } from "./Exam";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Box } from "@material-ui/core";
export default function Question({ dataItem }) {
  // get context
  const contextExam = useContext(examContainerContext);

  // Hàm trả về id những câu đã được chọn
  const activeAnswer = contextExam.selectedRadio.map((i) => i.answer_id);
  return (
    <div>
      <ul className="exam">
        <h4>{dataItem.name}:</h4>
        <p>{dataItem.content}</p>
        {dataItem.answers.map((i) => (
          <Box
            border="1px solid #eee"
            padding="10px 20px"
            margin="10px 0"
            borderRadius="5px"
            key={`result${i.answer_id}`}
          >
            <FormControl key={`result${i.answer_id}`} fullWidth>
              <RadioGroup
                aria-label={dataItem.content}
                onChange={() => contextExam.handleChangeResult(i)}
                name={dataItem.id}
              >
                <FormControlLabel
                  checked={activeAnswer.includes(i.answer_id)}
                  value={i.content_answer}
                  control={<Radio color="primary" />}
                  label={i.content_answer}
                />
              </RadioGroup>
            </FormControl>
          </Box>
        ))}
      </ul>
    </div>
  );
}
