import React, { Component } from "react";
class Ref extends Component {
  onAddProduct = () => {
    console.log(this.refs.name.value);
    alert(this.refs.name.value);
  };
  render() {
    return (
      <div className="col-12 home-product-item-wrapper">
        <h3 className="text-center">
          <b>Ref</b>
        </h3>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title bg-danger py-3 text-center text-white text-uppercase">
              Add Product
            </h5>
            <div className="mb-3">
              <label className="form-label">
                <b>Name Product</b>
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                ref="name"
              />
              <button
                type="button"
                class="btn btn-danger form-control-lg mt-3 float-right"
                style={{ width: "200px" }}
                onClick={this.onAddProduct}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ref;
