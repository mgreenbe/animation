import React from "react";
import List from "./list.js";

const range = n => Array(n).fill().map((_, i) => i);

const randomInteger = n => Math.floor(n * Math.random());

const randomElement = arr => arr[randomInteger(arr.length)];

const perm = n => {
  return range(n).reduce((acc, x, i, arr) => {
    let remaining = arr.filter(x => !acc.includes(x));
    return acc.concat(randomElement(remaining));
  }, []);
};

//const inverse = p => {
//  return p.map((_, i) => p.find(j => p[j] === i));
//};

const items = ["Zero", "One", "Two", "Three", "Four", "Five"];

class Perm extends React.Component {
  constructor() {
    super();
    this.state = {
      items,
      p: range(items.length)
    };
  }

  render() {
    return (
      <div>
        <List p={this.state.p} items={this.state.items} />
        <button onClick={() => this.setState({ p: perm(this.state.p.length) })}>
          Shuffle
        </button>
      </div>
    );
  }
}

export default Perm;
