import React, { Component } from "react";
class TaskItem extends Component {
  onSetUpdateStatus = () => {
    var { task, onReceiveUpdateStatus } = this.props;
    onReceiveUpdateStatus(task.id);
  };
  onSetDelete = (event) => {
    var { task, onReceiveDelete } = this.props;
    onReceiveDelete(task.id);
  };
  onSetUpdate = () => {
    var { task, onReceiveUpdate } = this.props;
    onReceiveUpdate(task.id);
  };
  render() {
    var { task, index } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span
            className={task.status ? "badge bg-danger" : "badge bg-success"}
            onClick={this.onSetUpdateStatus}
          >
            {task.status ? "Active" : "Hide"}
          </span>
        </td>
        <td className="text-center">
          <a
            type="button"
            className="btn btn-lg btn-outline-danger"
            onClick={this.onSetUpdate}
          >
            <i className="far fa-user-edit me-2"></i>Update
          </a>
          &nbsp;
          <button
            type="button"
            className="btn btn-lg btn-danger"
            onClick={this.onSetDelete}
          >
            <i className="far fa-trash me-2"></i>Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
