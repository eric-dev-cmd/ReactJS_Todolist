import React, { Component } from "react";
import TaskItem from "./TaskItem";
class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1,
      // -1: all, 1: active, 0: hide
    };
  }
  onChangeFilterTable = (event) => {
    var { onReceiveChangeFilterTable } = this.props;
    var { filterName, filterStatus } = this.state;
    var target = event.target;
    var name = target.name;
    var value = target.value;
    onReceiveChangeFilterTable(
      name === "filterName" ? value : filterName,
      name === "filterStatus" ? value : filterStatus
    );
    this.setState({
      [name]: value,
    });
  };
  render() {
    var { tasks, onReceiveUpdateStatus, onReceiveDelete, onReceiveUpdate } =
      this.props;
    var { filterName, filterStatus } = this.state;
    //var tasks = this.props.tasks

    var elementTask = tasks.map((task, index) => {
      return (
        <TaskItem
          task={task}
          key={task.id}
          index={index}
          onReceiveUpdateStatus={onReceiveUpdateStatus}
          onReceiveDelete={onReceiveDelete}
          onReceiveUpdate={onReceiveUpdate}
        />
      );
    });
    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Name</th>
            <th className="text-center">Status</th>
            <th className="text-center">Controls</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                className="form-control form-control-lg"
                name="filterName"
                value={filterName}
                onChange={this.onChangeFilterTable}
              />
            </td>
            <td>
              <select
                className="form-control form-control-lg"
                name="filterStatus"
                value={filterStatus}
                onChange={this.onChangeFilterTable}
              >
                <option value="-1">All</option>
                <option value="0">Hide</option>
                <option value="1">Active</option>
              </select>
            </td>
            <td></td>
          </tr>
          {elementTask}
        </tbody>
      </table>
    );
  }
}

export default TaskList;
