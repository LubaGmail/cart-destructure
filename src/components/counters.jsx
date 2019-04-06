import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  
  render() {
    // Object destructuring
    const {counters, onIncrement, onDelete} = this.props;

    return (
      <div>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }

}

export default Counters;
