import React, { useContext } from "react";
import ChangoContext from "../context/chango-context";
import Counter from "./counter";
// trabaja SIN ESTADO LOCAL en Counter
function Counters(){
  console.log("usando Counters como functional");
  const {groceries, handleReset} = useContext(ChangoContext);
  return(
    <div>
        <button
          onClick={handleReset}
          className="brn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {groceries.map((item) => (
          <Counter
            key={item.id}
            item={item}
          />
        ))}
    </div>
  );
};
/* class Counters extends Component {
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
} */
export default Counters;
