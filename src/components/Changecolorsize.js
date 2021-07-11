import React, { Component } from "react";
import ColorPickerSetting from "./ChangecolorsizecomComponents/ColorPickerSetting";
import ResetSetting from "./ChangecolorsizecomComponents/ResetSetting";
import ResultSetting from "./ChangecolorsizecomComponents/ResultSetting";
import SizeSetting from "./ChangecolorsizecomComponents/SizeSetting";
class ChangeColorSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      fontSize: 18,
    };
    this.onSetColor = this.onSetColor.bind(this);
  }
  onSetColor(params) {
    console.log(params);
    this.setState({
      color: params,
    });
  }
  onChangeSize = (value) => {
    if (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) {
      this.setState({
        fontSize: this.state.fontSize + value,
      });
    }
    console.log(value);
  };
  onResetDefault = (value) => {
    if (value === true) {
      this.setState({
        color: "red",
        fontSize: 18,
      });
    }
  };
  render() {
    return (
      <div className="col-12 home-product-item-wrapper">
        <h3 className="text-center"><b>Change Color && Size</b></h3>
        <div className="card">
          <div className="card-body">
            <div className="container mt-50">
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <ColorPickerSetting
                    color={this.state.color}
                    fontSize={this.state.fontSize}
                    onReceiveColor={this.onSetColor}
                  />
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <SizeSetting
                    fontSize={this.state.fontSize}
                    onReceiveOnchangeSize={this.onChangeSize}
                  />

                  <ResetSetting onSettingDefault={this.onResetDefault} />
                </div>

                <ResultSetting
                  color={this.state.color}
                  fontSize={this.state.fontSize}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangeColorSize;
