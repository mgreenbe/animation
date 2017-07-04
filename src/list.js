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
    this.itemRefs = Array(props.items.length);
  }
  componentWillReceiveProps(newProps) {
    //    console.log(this.itemRefs.map(x => x.getBoundingClientRect()));
  }
  render() {
    const { items, colors } = this.props;
    return (
      <div>
        {items.map((item, i) => {
          let style = Object.assign({}, itemStyle, {
            backgroundColor: colors[i]
          });
          return (
            <div style={style} key={item} ref={elt => (this.itemRefs[i] = elt)}>
              {item}
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
