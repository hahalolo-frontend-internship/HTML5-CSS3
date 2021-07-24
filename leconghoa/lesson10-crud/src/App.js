import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions/index";
import "./App.css";
import TaskControl from "./components/TaskControl";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      filterName: "",
      filterStatus: "-1",
      itemEditing: null,
      sortBy: "name",
      sortValue: 1,
    };
  }

  onToggleForm = () => {
    let { itemEditing } = this.props;
    if (itemEditing && itemEditing.id !== "") {
      this.props.onOpenForm();
    } else {
      this.props.onToogleForm();
    }
    this.props.onClearTask({
      id: "",
      name: "",
      status: false,
    });
  };

  onSearch = (keyword) => {
    this.setState({
      keyword: keyword,
    });
  };

  onFilter = (filterName, filterStatus) => {
    this.setState({
      filterName: filterName,
      filterStatus: filterStatus,
    });
  };

  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue,
    });
  };

  render() {
    var {
      // keyword,
      filterName,
      filterStatus,
      sortBy,
      sortValue,
    } = this.state;
    var { isDisplayForm } = this.props;
    // tasks = tasks.filter((task) => {
    //     return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    // });

    // if(filterName){
    //     tasks = tasks.filter((task) => {
    //         return task.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    //     });
    // }
    // if(filterStatus){
    //     tasks = tasks.filter((task) => {
    //         if(filterStatus === '-1' || filterStatus === -1){
    //             return task;
    //         }else{
    //             return task.status === (parseInt(filterStatus, 10) === 1 ? true : false);
    //         }
    //     });
    // }
    // if(sortBy === 'name'){
    //     tasks.sort((a, b) => {
    //         if(a.name > b.name) return sortValue;
    //         else if(a.name < b.name) return -sortValue;
    //         else return 0;
    //     });
    // }else{
    //     tasks.sort((a, b) => {
    //         if(a.status > b.status) return -sortValue;
    //         else if(a.status < b.status) return sortValue;
    //         else return 0;
    //     });
    // }

    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div
            className={
              isDisplayForm === true
                ? "col-xs-4 col-sm-4 col-md-4 col-lg-4"
                : ""
            }
          >
            {isDisplayForm === true && <TaskForm />}
          </div>
          <div
            className={
              isDisplayForm === true
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggleForm}
            >
              <span className="fa fa-plus mr-5"></span>Thêm Công Việc
            </button>
            <TaskControl
              onSearch={this.onSearch}
              onSort={this.onSort}
              sortBy={sortBy}
              sortValue={sortValue}
            />
            <TaskList
              filterName={filterName}
              filterStatus={filterStatus}
              onFilter={this.onFilter}
             
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.toogleForm,
    itemEditing: state.itemEditing,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onToogleForm: () => {
      dispatch(actions.toogleForm());
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
    onClearTask: (task) => {
      dispatch(actions.editTask(task));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
