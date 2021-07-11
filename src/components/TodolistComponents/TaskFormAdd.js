import React, { Component } from "react";
class TaskFormAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false,
    };
  }
  onSetExit = () => {
    this.props.onReceiveExit();
  };
  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === "status") {
      value = target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value,
    });
  };
  onClear = () => {
    this.setState({
      name: "",
      status: false,
    });
    this.onSetExit();
  };
  onHandleSubmit = (event) => {
    event.preventDefault();
    this.props.onReceiveData(this.state);
  };
  componentWillMount() {
    var { taskEditing } = this.props;
    if (taskEditing) {
      this.setState({
        id: taskEditing.id,
        name: taskEditing.name,
        status: taskEditing.status,
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);

    if (nextProps && nextProps.taskEditing) {
      console.log(nextProps.taskEditing.id);
      this.setState({
        id: nextProps.taskEditing.id,
        name: nextProps.taskEditing.name,
        status: nextProps.taskEditing.status,
      });
    } else if (nextProps && nextProps.taskEditing === null) {
      console.log("edit => add");
      this.setState({
        id: "",
        name: "",
        status: false,
      });
    }
  }
  render() {
    var { id } = this.state;
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="card py-2 px-2">
          <div className="border bg-danger d-flex align-content-center align-items-center justify-content-between">
            <div className="py-2 fw-bold text-center ml-140 text-white">
              {id === "" ? "ADD JOB" : "UPDATE JOB"}
            </div>
            <div>
              <button
                type="button"
                class="btn btn-default"
                onClick={this.onSetExit}
              >
                <i class="fad fa-window-close me-2 text-white fs-20"></i>
              </button>
            </div>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onHandleSubmit}>
              <div className="form-group">
                <label>Name :</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="name"
                  value={this.state.name}
                  onChange={this.onHandleChange}
                />
              </div>
              <label>Status :</label>
              <select
                className="form-control form-control-lg"
                required="required"
                name="status"
                value={this.state.status}
                onChange={this.onHandleChange}
              >
                <option value={true}>Active</option>
                <option value={false}>Hide</option>
              </select>
              <br />
              <div className="text-center fw-bold">
                <button
                  type="submit"
                  className="btn btn-lg btn-danger badge-color"
                >
                  <b>
                    {/* <i class="far fa-user-plus"></i>{" "} */}
                    {id === "" ? "Add" : "Update"}
                  </b>
                </button>
                &nbsp;
                <button
                  type="button"
                  className="btn btn-lg btn-outline-danger badge-color "
                  onClick={this.onClear}
                >
                  <b>
                    <i class="fad fa-window-close"></i> Cancel
                  </b>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskFormAdd;
