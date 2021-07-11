import React, { Component } from "react";
class Product extends Component {
  // var product = {
  //   id: 1,
  //   name: "1. Điện thoại iPhone 12 Pro Max 128GB",
  //   price_new: 2000000,
  //   price_old: 1890000,
  //   sold: 2938,
  //   discount: 10,
  //   status: true ? "Active" : "Pending",
  // };

  // var products = {
  //   id: 1,
  //   name: "1. Điện thoại iPhone 12 Pro Max 128GB",
  //   price_new: 2000000,
  //   price_old: 1890000,
  //   sold: 2938,
  //   discount: 10,
  //   status: true ? "Active" : "Pending",
  // };
  // constructor(props) {
  //   super(props);
  //   this.addToCart1 = this.addToCart1.bind(this);
  // }
  // addToCart1() {
  //   alert(
  //     this.props.name +
  //       " - " +
  //       this.props.price_new +
  //       " - " +
  //       this.props.sold +
  //       " - " +
  //       this.props.discount
  //   );

  addToCart2 = () => {
    alert(
      this.props.name +
        " - " +
        this.props.price_new +
        " - " +
        this.props.sold +
        " - " +
        this.props.discount
    );
  };
  render() {
    return (
      <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 home-product-item-wrapper">
        <a className="home-product-item text-decoration-none">
          <div
            className="home-product-item-img"
            style={{ backgroundImage: "url(./image/iphone-12.jpg)" }}
          ></div>
          <h4 className="home-product-item__name">{this.props.name}</h4>
          <div className="home-product-item__price justify-cont">
            <span className="home-product-item__price-old fs-14">
              {this.props.price_old}
            </span>
            <span
              className="home-product-item__price-current text-dark fs-16 float-end fw-bold"
              style={{ paddingRight: "1rem" }}
            >
              {this.props.price_new}
            </span>
          </div>
          <div className="home-product-item__action">
            <span className="home-product-item__like home-product-item__liked">
              <i className="home-product-item__like-icon-empty far fa-heart" />
              <i className="home-product-item__like-icon-full fas fa-heart" />
            </span>
            <div className="home-product-item__rating">
              <i className="home-product-item-star-gold fas fa-star" />
              <i className="home-product-item-star-gold fas fa-star" />
              <i className="home-product-item-star-gold fas fa-star" />
              <i className="home-product-item-star-gold fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <span className="home-product-item-sold">
              {this.props.sold} đã bán
            </span>
            <br />
            <p className="home-product-item-sold">
              Status <b>{this.props.status ? "Active" : "Pending"}</b>
            </p>
          </div>
          <div className="home-product-item__favorite">
            <i className="fas fa-check" />
            <span>Yêu thích</span>
          </div>
          <div className="home-product-item__sale-off">
            <span className="home-product-item__percent">
              -{this.props.discount}%
            </span>
            {/* <span className="home-product-item__label">GIẢM</span> */}
          </div>
          <div>
            <button
              type="button"
              class="btn btn-danger form-control bg-danger btn-lg"
              // onClick={this.addToCart1}
              onClick={this.addToCart2}
            >
              Buy now
            </button>
          </div>
        </a>
      </div>
    );
  }
}

export default Product;
