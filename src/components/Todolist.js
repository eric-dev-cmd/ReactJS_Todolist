import React, { Component } from "react";
import TaskFormAdd from "./TodolistComponents/TaskFormAdd";
import TaskFormSearchSort from "./TodolistComponents/TaskFormSearchSort";
import TaskList from "./TodolistComponents/TaskList";

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false,
      taskEditing: null,
      filter: {
        name: "",
        status: -1,
      },
      keywords: "",
      sortBy: "name",
      sortValue: 1,
    };
  }
  componentWillMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks,
      });
    }
  }
  onGenerateData = () => {
    var tasks = [
      {
        id: this.generateID(),
        name: "Ruby",
        status: true,
      },
      {
        id: this.generateID(),
        name: "Java",
        status: true,
      },
      {
        id: this.generateID(),
        name: "ReactJs",
        status: true,
      },
      {
        id: this.generateID(),
        name: "PHP",
        status: true,
      },
      {
        id: this.generateID(),
        name: "VueJs",
        status: false,
      },
      {
        id: this.generateID(),
        name: "AngularJs",
        status: false,
      },
    ];
    console.log(tasks);
    this.setState({
      tasks: tasks,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  s4() {
    var randomstring = require("randomstring");
    var x = randomstring.generate({
      charset: "alphanumeric",
      length: 50,
      readable: true,
      // capitalization: "lowercase",
    });
    return x;
  }
  generateID() {
    return this.s4();
  }
  isDisplayFormAdd = () => {
    var { isDisplayForm, taskEditing } = this.state;
    if (isDisplayForm && taskEditing !== null) {
      this.setState({
        isDisplayForm: true,
        taskEditing: null,
      });
    } else {
      this.setState({
        isDisplayForm: !isDisplayForm,
        taskEditing: null,
      });
    }
  };
  onShowForm = () => {
    this.setState({
      isDisplayForm: true,
    });
  };
  onSetExit = () => {
    this.setState({
      isDisplayForm: false,
    });
  };
  onSetData = (data) => {
    var { tasks } = this.state;
    if (data.id === "") {
      data.id = this.generateID();
      tasks.push(data);
    } else {
      var index = this.findIndex(data.id);
      tasks[index] = data;
    }

    this.setState({
      tasks: tasks,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks);
    this.onSetExit();
  };
  onSetUpdateStatus = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks,
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
      // console.log(tasks);
    }
  };
  onSetDelete = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    // console.log(index);
    if (index !== -1) {
      console.log(index);
      tasks.splice(index, 1);

      this.setState({
        tasks: tasks,
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
      // console.log(tasks);
    }
    this.onSetExit();
  };
  onSetUpdate = (id) => {
    var { tasks } = this.state;
    let index = this.findIndex(id);
    console.log(index + " _ " + id);
    let taskEditing = tasks[index];
    console.log(taskEditing);
    this.setState({
      taskEditing: taskEditing,
    });
    this.onShowForm();
  };
  findIndex = (id) => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        // console.log("ID so vs ban dau", id);
        // console.log(index);
        result = index;
        console.log(result);
        return result;
      }
    });
    return result;
  };
  onSetChangeFilterTable = (filterName, filterStatus) => {
    // console.log(filterName + " - " + filterStatus);
    filterStatus = parseInt(filterStatus, 10);
    // console.log(typeof filterName + " - " + typeof filterStatus);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus,
      },
    });
    // console.log(this.state);
  };
  onReceiveSearch = (keywords) => {
    console.log(keywords);
    this.setState({
      keywords: keywords.toLowerCase(),
    });
  };
  onReceiveSort = (sortBy, sortValue) => {
    // console.log(sortBy + " _ " + sortValue);
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue,
    });
    // console.log(this.state.sortBy);
    // console.log(this.state.sortValue);
  };
  render() {
    var {
      tasks,
      isDisplayForm,
      taskEditing,
      filter,
      keywords,
      sortBy,
      sortValue,
    } = this.state;
    // console.log(filter);
    if (filter) {
      if (filter.name) {
        tasks = tasks.filter((task, index) => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        });
      }
      tasks = tasks.filter((task) => {
        if (filter.status === -1) {
          return task;
        } else {
          return task.status === (filter.status === 1 ? true : false);
        }
      });
    }
    if (keywords) {
      tasks = tasks.filter((task, index) => {
        return task.name.toLowerCase().indexOf(keywords) !== -1;
      });
    }
    console.log(sortBy, sortValue);
    if (sortBy === "name") {
      tasks.sort((a, b) => {
        if (a.name > b.name) {
          return sortValue;
        } else if (a.name < b.name) {
          return -sortValue;
        } else return 0;
      });
    } else {
      tasks.sort((a, b) => {
        if (a.status > b.status) {
          return -sortValue;
        } else if (a.status < b.status) {
          return sortValue;
        } else return 0;
      });
    }
    var elementIsDisplayFormAdd = isDisplayForm ? (
      <TaskFormAdd
        onReceiveExit={this.onSetExit}
        onReceiveData={this.onSetData}
        taskEditing={taskEditing}
      />
    ) : (
      ""
    );

    // var tasks = this.state.tasks
    return (
      <div className="col-12 home-product-item-wrapper">
        <h3 className="text-center fw-bold">To do list</h3>
        <div className="card">
          <div className="card-body">
            <div className="container">
              <div className="text-center">
                <h1>Workflow Management</h1>
                <hr />
              </div>
              <div className="row">
                {/* Form add */}
                {elementIsDisplayFormAdd}
                <div
                  className={
                    isDisplayForm
                      ? "col-xs-8 col-sm-8 col-md-8 col-lg-8 card pt-2"
                      : "col-xs-12 col-sm-12 col-md-12 col-lg-12 card pt-2"
                  }
                >
                  <button
                    type="button"
                    className="btn btn-lg btn-danger"
                    style={{ width: "100px" }}
                    onClick={this.isDisplayFormAdd}
                  >
                    <i className="fas fa-user-plus me-2"></i>
                    <b>Add Job</b>
                  </button>
                  <button
                    type="button"
                    className="btn btn-lg btn-info mt-3"
                    style={{ width: "200px" }}
                    onClick={this.onGenerateData}
                  >
                    <i className="fas fa-user-plus me-2"></i>Generate Data
                  </button>
                  <TaskFormSearchSort
                    onReceiveSearch={this.onReceiveSearch}
                    onReceiveSort={this.onReceiveSort}
                    onReceiveSortBy={sortBy}
                    onReceiveSortValue={sortValue}
                  />
                  <div className="row mt-3">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <TaskList
                        tasks={tasks}
                        onReceiveUpdateStatus={this.onSetUpdateStatus}
                        onReceiveDelete={this.onSetDelete}
                        onReceiveUpdate={this.onSetUpdate}
                        onReceiveChangeFilterTable={this.onSetChangeFilterTable}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Todolist;
