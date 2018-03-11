import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = fish => {
    // 1. Take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // 2. Add New Fish to our fishes var with unique timestamp
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set new fishes object to state
    this.setState({
      fishes
      // could also be
      // fishes: fishes
      // we're using just 'fishes' because ES6 allows key/val
      // pairs that match to be just one thing.
    });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Daily" age={100} />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
