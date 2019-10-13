import React, { Component } from "react";
import { link } from "fs";
import { tsConstructorType } from "@babel/types";

class Counter extends Component {
  //   state = {
  //     count: this.props.counter.value, //every react component has a property called props which is a plain JS object includes all the attributes  that we set in Counters component.
  //     //Notice that  "key" is not part of props

  //     // imageUrl: "https://picsum.photos/300",
  //     // tags: ["tag1", "tag2", "tag3"]
  //     tags: []
  //   };
  //   styles = {
  //     fontSize: 50,
  //     fontWeight: "bold"
  //   };

  //   constructor() {
  //     super(); //due to this is a child class of Counter, we have to use super() to get access to all things first
  //     this.handleIncrement = this.handleIncrement.bind(this); // here you bind this for handleIncreamnet
  //   }
  //   handleIncrement() {
  //     //   you don't have access to object(this)
  //     // but you can have access in a tsConstructor, so we bind this for handleIncrement in constructor
  //     console.log("sdfasdf", this);
  //   }

  //there is another way solve bind eventhandler problem, by using arrow function
  //   arrow function don't remaind that this keyword
  //   handleIncrement = () => {
  //     //catch the passed object;
  //     // this.state.count++; // doesn't work in this way of react, the value actually increases but react just isn't aware of that. we need override the property explicity
  //     // a method from super class Component called this.setState();
  //     this.setState({ count: this.state.count + 1 });
  //   };

  //   renderTag() {
  //     if (this.state.tags.length === 0)
  //       return <p>There is no items in the list!</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  render() {
    // let classes = "badge mr-2 badge-";
    // classes += this.state.count === 0? "warning": "primary";
    // this is dynamically rendering

    // you can refactor above to a method: shortcut: ctrl+shift+r  then you can call the method directly in html
    // let classes = this.getBadgeClasses();

    // conditional rendering two method: due to there is no if statement in jsx, then below
    //1. use a function in this case is renderTag()
    //2. use javascript mechanism ex: true&&'string'&&1 return 1
    // reason is javacript can && with non-boolean value, non-empty string and non-zero number will be consider as true, then it will return the last condition.

    return (
      <div>
        {/* <img src={this.state.imageUrl}/> */}
        {/* two way to add style  */}
        {/* <span style={this.styles} className="badge badge-primary mr-2">{this.formatCounter()}</span> */}
        {/* <span style={{fontSize:100}} className="badge badge-primary mr-2">{this.formatCounter()}</span> */}
        {/* {this.props.children}  */}

        <div className="rwo">
          <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
          <button
            // here is why is handleIncrement not handleIncrement(),
            // you pass the reference not the method
            //   onClick is eventHandler
            //   onClick={this.handleIncrement} //sometimes you need to pass sth. to handler, then do below
            onClick={() => this.props.onIncrement(this.props.counter)} // do a function inside {}, pass the object to handler
            className="btn btn-secondary btn-sm mr-2 mb-2"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm mr-2 mb-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            className="btn btn-danger btn-sm mb-2"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </button>
        </div>
        {/* rendering a list */}
        {/* <ul>
          {this.state.tags.map(tag => {
            return <li key={tag}>{tag}</li>;
          })}
        </ul>
        {this.renderTag()}
        {this.state.tags.length === 0 &&
          "this is the second method that using conditional rednering"} */}
      </div>
    );
  }
  formatCounter = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value; //this is a destructuring
  };

  getBadgeClasses() {
    let classes = "badge mr-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
