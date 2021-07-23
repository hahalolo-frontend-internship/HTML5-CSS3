import React, { memo, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { updateListResult } from "../../redux/actions/result";
import { makeSelectListResult } from "../../redux/selectors/result";
import "./body-style.scss";
import BodyQuesiton from "./BodyQuestion/BodyQuestion";
import ChooseTopic from "./BodyQuestion/ChooseTopic/ChooseTopic";
import RatingsTable from "./RatingsTable/RatingsTable";
import PropTypes from "prop-types";
function Body({ triggerUpdateListResult, listResult }) {
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
};

const mapStateToProps = createStructuredSelector({
  listResult: makeSelectListResult(),
});

function mapDispatchToProps(dispatch) {
  return {
    triggerUpdateListResult: (id, infoAccount) =>
      dispatch(updateListResult(id, infoAccount)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Body);
