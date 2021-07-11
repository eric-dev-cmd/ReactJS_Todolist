import React, { Component } from "react";
class ColorPickerSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["red", "green", "blue", "#ccc"],
    };
  }
  showColor(color) {
    console.log(color);
    console.log(this.props.color);
    console.log(this.props.fontSize);

    return {
      backgroundColor: color,
    };
  }
  setActiveColor(color) {
    this.props.onReceiveColor(color);
  }
  render() {
    let elements = this.state.colors.map((color, index) => {
      return (
        <span
          key={index}
          style={this.showColor(color)}
          className={this.props.color === color ? "active" : ""}
          onClick={() => this.setActiveColor(color)}
        ></span>
      );
    });
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Color Picker</h3>
        </div>
        <div className="panel-body mt-5">
          {elements}
          <hr />

          {/* <span class="badge bg-success badge-color me-2">Green</span>
          <span class="badge bg-primary badge-color me-2">Blue</span>
          <span class="badge bg-secondary badge-color me-2">Gray</span> */}
        </div>
      </div>
    );
  }
}

export default ColorPickerSetting;
