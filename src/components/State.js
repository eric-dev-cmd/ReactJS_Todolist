import React, { Component } from "react";
class State extends Component {
  onSetState = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "1. Điện thoại iPhone 12 Pro Max 128GB",
          price_new: 2000000,
          price_old: 1890000,
          sold: 2938,
          discount: 10,
          status: true,
        },
        {
          id: 2,
          name: "2. Điện thoại iPhone 12 Pro Max 128GB",
          price_new: 3000000,
          price_old: 2890000,
          sold: 1138,
          discount: 50,
          status: true,
        },
        {
          id: 3,
          name: "3. Điện thoại iPhone 12 Pro Max 128GB",
          price_new: 4000000,
          price_old: 5890000,
          sold: 7738,
          discount: 20,
          status: true,
        },
        {
          id: 4,
          name: "1. Điện thoại iPhone 12 Pro Max 128GB",
          price_new: 2000000,
          price_old: 1890000,
          sold: 2938,
          discount: 10,
          status: true,
        },
        {
          id: 5,
          name: "2. Điện thoại iPhone 12 Pro Max 128GB",
          price_new: 3000000,
          price_old: 2890000,
          sold: 1138,
          discount: 50,
          status: false,
        },
        {
          id: 6,
          name: "3. Điện thoại iPhone 12 Pro Max 128GB",
          price_new: 4000000,
          price_old: 5890000,
          sold: 7738,
          discount: 20,
          status: false,
        },
      ],
      isActive: true,
    };
  }

  render() {
    let elements = this.state.products.map((product, index) => {
      let result = null;

      if (product.status && this.state.isActive) {
        return (result = (
          <tr key="index">
            <th scope="row">{index}</th>
            <td>{product.name}</td>
            <td className="text-center fs-16">
              <button type="button" class="btn btn-danger">
                {product.price_new}
              </button>
            </td>
            <td className="text-center">
              <button type="button" class="btn btn-primary">
                {product.status ? "Active" : "Pending"}
              </button>
            </td>
          </tr>
        ));
      }

      return result;
    });
    return (
      <div className="col-12 home-product-item-wrapper">
        <h3 className="text-center">
          <b>State</b>
        </h3>
        <div className="card">
          <div className="card-body">
            <table class="table table-bordered table-hover">
              <thead>
                <tr className="bg-danger text-center text-white">
                  <th scope="col">STT</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>{elements}</tbody>
              <button
                type="button"
                className="btn btn-danger my-2"
                style={{ width: "100px", fontSize: "14px" }}
                onClick={this.onSetState}
              >
                <b>Active</b> : {this.state.isActive ? "True" : "False"}
              </button>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default State;
