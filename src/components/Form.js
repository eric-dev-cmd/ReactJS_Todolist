import React, { Component } from "react";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "Trung Vinh",
      txtPassword: "1",
      txtDes: "test",
      sltGender: 0,
      rdLang: "vi",
      chkStatus: true,
    };
  }
  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };
  onHandleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="col-12 home-product-item-wrapper">
        <h3 className="text-center">
          <b>Form</b>
        </h3>
        <div className="card">
          <form onSubmit={this.onHandleSubmit}>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="zunggzing"
                  name="txtUsername"
                  value={this.state.txtUsername}
                  onChange={this.onHandleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  name="txtPassword"
                  type="password"
                  value={this.state.txtPassword}
                  className="form-control form-control-lg"
                  onChange={this.onHandleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Comment</label>
                <div className="form-floating">
                  <textarea
                    value={this.state.txtDes}
                    className="form-control fs-14"
                    name="txtDes"
                    onChange={this.onHandleChange}
                    id="floatingTextarea2"
                    style={{ height: "100px" }}
                  ></textarea>
                  <label for="floatingTextarea2">Comments</label>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Gender</label>
                <select
                  className="form-select form-select-lg"
                  name="sltGender"
                  value={this.state.sltGender}
                  onChange={this.onHandleChange}
                >
                  <option value={0}>Female</option>
                  <option value={1}>Male</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Language</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="rdLang"
                    value="vi"
                    onChange={this.onHandleChange}
                    checked={this.state.rdLang === "vi"}
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Vietnemese
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="rdLang"
                    value="en"
                    onChange={this.onHandleChange}
                    id="flexRadioDefault2"
                    checked={this.state.rdLang === "en"}
                  />
                  <label className="form-check-label" for="flexRadioDefault2">
                    English
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Status</label>
                <br></br>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={true}
                    name="chkStatus"
                    onChange={this.onHandleChange}
                    checked={this.state.chkStatus}
                    id="inlineCheckbox1"
                  />
                  <label className="form-check-label" for="inlineCheckbox1">
                    Status
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="Submit"
                    className="btn btn-danger btn-lg me-2"
                    style={{ width: "100px" }}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg"
                    style={{ width: "100px" }}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
