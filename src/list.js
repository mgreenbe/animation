import React from "react";

const itemStyle = {
  margin: 4,
  height: 30,
  width: 200,
  padding: 10
};

class List extends React.Component {
  constructor(props) {
    super(props);
    const n = Array(props.items.length);
    this.elts = Array(n);
    this.boxes = Array(n);
    this.colors = Array(n);
  }
  componentDidMount() {
    this.boxes = this.elts.map(elt => elt.getBoundingClientRect());
  }
  componentDidUpdate(prevProps) {
    const { p } = this.props;
    const boxes = this.boxes;
    this.elts.forEach((elt, i) => {
      const delta = boxes[p[i]].top - boxes[i].top;
      requestAnimationFrame(() => {
        elt.style.transform = `translateY(${delta}px)`;
        elt.style.transition = "transform 0s";
        requestAnimationFrame(() => {
          elt.style.transform = "";
          elt.style.transition = "transform 0.5s";
        });
      });
    });
  }

  render() {
    const { p, items } = this.props;
    const colors = p.map(
      (_, i) => `rgba(${Math.floor(i * 120 / p.length + 135)}, 0, 0, 1)`
    );
    return (
      <div>
        {items.map((item, i) => {
          let style = Object.assign({}, itemStyle, {
            backgroundColor: colors[p[i]]
          });
          return (
            <div
              style={style}
              key={items[p[i]]}
              ref={elt => (this.elts[i] = elt)}
              data-key={item}
              onClick={() => console.log(p[i])}
            >
              {items[p[i]]}
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
