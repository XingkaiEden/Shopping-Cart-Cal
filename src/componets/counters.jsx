import React, { Component } from "react";
import Counter from "./counter";

// class Counters extends Component {

//   render() {

//     return (
//       <div className="container-fluid">
//         <button className="btn btn-primary mb-2" onClick={this.props.onReset}>
//           Reset
//         </button>

//         {this.props.counters.map(counter => (
//           //in order to make value to work, you have to pass it to Counter, this is a .props

//           <Counter
//             key={counter.id}
//             onDelete={this.props.onDelete}
//             onIncrement={this.props.onIncrement}
//             // value={counter.value}
//             // id={counter.id} // we can just pass the object make code look clean and better
//             counter={counter}
//           />
//         ))}
//       </div>
//     );
//   }
// }

// export default Counters;

class Counters extends Component {
  //using  Destructuring Arguments to simplify code with eliminating "this.props"

  render() {
    const {
      onReset,
      onIncrement,
      onDelete,
      counters,
      onDecrement
    } = this.props;
    return (
      <div className="container-fluid">
        <button className="btn btn-primary mb-2" onClick={onReset}>
          Reset
        </button>

        {counters.map(counter => (
          //in order to make value to work, you have to pass it to Counter, this is a .props

          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            // value={counter.value}
            // id={counter.id} // we can just pass the object make code look clean and better
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
