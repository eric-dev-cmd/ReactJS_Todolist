import React, { Component } from "react";
class ResultSetting extends Component {
  setStyleResult() {
    return {
      color: this.props.color,
      boderColor: this.props.color,
      fontSize: this.props.fontSize,
    };
  }
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <p>
          Color : {this.props.color} - Fontsize : {this.props.fontSize}px
        </p>
        <div id="content" style={this.setStyleResult()}>
          Nội dung setting
        </div>
      </div>
    );
  }
}

export default ResultSetting;
