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

const items = ["Zero", "One", "Two", "Three", "Four", "Five"];

const colors = [
  "#0000FF",
  "#0033FF",
  "#0066FF",
  "#0099FF",
  "#00CCFF",
  "#00FFFF"
];

class Perm extends React.Component {
  constructor() {
    super();
    this.state = {
      items,
      p: range(items.length)
    };
  }

  permute() {
    this.setState({ p: perm(items.length) });
  }

  render() {
    const permutedItems = this.state.items.map(
      (_, i, items) => items[this.state.p[i]]
    );
    const permutedColors = this.state.items.map(
      (_, i) => colors[this.state.p[i]]
    );
    return (
      <div>
        <List items={permutedItems} colors={permutedColors} />
        <button
          onClick={() => this.setState({ p: perm(permutedItems.length) })}
        >
          Shuffle
        </button>
      </div>
    );
  }
}

export default Perm;
