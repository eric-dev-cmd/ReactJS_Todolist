import React, { Component } from "react";
class ResetSetting extends Component {
  onResetDefault = () => {
    this.props.onSettingDefault(true);
  };
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary fs-14 fw-bold mt-2"
          onClick={this.onResetDefault}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default ResetSetting;
