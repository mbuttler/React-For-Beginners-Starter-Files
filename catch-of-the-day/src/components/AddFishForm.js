import React from "react";
import { formatPrice } from "../helpers";
class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();
  createFish = event => {
    // 1. Stop form from submitting
    event.preventDefault();
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value
    };
    // all of which is gets passed to
    // addfish which is passed down from app.js

    this.props.addFish(fish);
    // 2. Refresh Le Form
    event.currentTarget.reset();
  };
  render() {
    return (
      <div className="AddFishForm">
        <form className="fish-edit" onSubmit={this.createFish}>
          <input
            name="name"
            ref={this.nameRef}
            type="text"
            placeholder="Name"
          />
          <input
            name="price"
            ref={this.priceRef}
            type="text"
            placeholder="Price"
          />
          <select name="status" ref={this.statusRef}>
            <option value="avaliable">Fresh</option>
            <option value="unavailable">Sold Out</option>
          </select>
          <textarea name="desc" ref={this.descRef} placeholder="Desc" />
          <input
            name="image"
            ref={this.imageRef}
            type="text"
            placeholder="Image"
          />
          <button type="submit">Add Fish</button>
        </form>
      </div>
    );
  }
}

export default AddFishForm;
