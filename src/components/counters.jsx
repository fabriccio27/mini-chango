import React, { Component } from "react";
import Counter from "./counter";
// trabaja SIN ESTADO LOCAL en Counter
class Counters extends Component {
   render() {
    console.log('counterss rendered');
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="brn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}
export default Counters;
