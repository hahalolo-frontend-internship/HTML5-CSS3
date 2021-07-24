import React, { memo, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { addResult, updateListResult } from "../../redux/actions/result";
import {
  getListQuestion,
  addSelectQuestion,
  reSetSelectQuestion,
} from "../../redux/actions/question";
import {
  makeSelectListQuestion,
  makeSelectStatusFlags,
  makeSelectQuestion,
} from "../../redux/selectors/question";
import { makeSelectListResult } from "../../redux/selectors/result";
import "./body-style.scss";
import BodyQuesiton from "./BodyQuestion/BodyQuestion";
import ChooseTopic from "./BodyQuestion/ChooseTopic/ChooseTopic";
import RatingsTable from "./RatingsTable/RatingsTable";
import PropTypes from "prop-types";
function Body({
  triggerUpdateListResult,
  listResult,
  triggerAddResult,
  triggerGetListQuestion,
  listQuestion,
  StatusFlags,
  selectQuestion,
  addSelectQuestion,
  reSetSelectQuestion,
}) {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user-info"));
  const [start, setStart] = useState(true);
  const handleStartClick = () => {
    if (user) {
      setStart(false);
    } else {
      history.push("/login");
    }
  };

  const handleEndClick = (data) => {
    setStart(data);
  };

  return (
    <main className="body">
      <div className="container">
        <div className="body-container">
          {start ? (
            <ChooseTopic handleStartClick={handleStartClick} />
          ) : (
            <BodyQuesiton
              triggerUpdateListResult={triggerUpdateListResult}
              listResult={listResult}
              handleEndClick={handleEndClick}
              triggerAddResult={triggerAddResult}
              triggerGetListQuestion={triggerGetListQuestion}
              listQuestion={listQuestion}
              StatusFlags={StatusFlags}
              selectQuestion={selectQuestion}
              addSelectQuestion={addSelectQuestion}
              reSetSelectQuestion={reSetSelectQuestion}
            />
          )}

          <RatingsTable />
        </div>
      </div>
    </main>
  );
}

Body.propTypes = {
  triggerUpdateListResult: PropTypes.func,
  listResult: PropTypes.array,
  triggerAddResult: PropTypes.func,
  triggerGetListQuestion: PropTypes.func,
  listQuestion: PropTypes.array,
  StatusFlags: PropTypes.object,
  selectQuestion: PropTypes.array,
  addSelectQuestion: PropTypes.func,
  reSetSelectQuestion: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  listResult: makeSelectListResult(),
  listQuestion: makeSelectListQuestion(),
  StatusFlags: makeSelectStatusFlags(),
  selectQuestion: makeSelectQuestion(),
});

function mapDispatchToProps(dispatch) {
  return {
    triggerUpdateListResult: (id, infoAccount) =>
      dispatch(updateListResult(id, infoAccount)),
    triggerAddResult: (infoAccount) => dispatch(addResult(infoAccount)),
    triggerGetListQuestion: () => dispatch(getListQuestion()),
    addSelectQuestion: (question) => dispatch(addSelectQuestion(question)),
    reSetSelectQuestion: (question) => dispatch(reSetSelectQuestion(question)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Body);
