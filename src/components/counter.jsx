import React, { Component } from "react";
//borramos state, y todo lo que tenga this.state
// handleIncrement(), tambien lo borramos
// en el boton INCREMENTAR, onClick, lo modificamos
// getBadgesClasses, cambiamos this.state.count X this.props.counter.count
// formatCount, lo mismo const { count } = this.state; X  const { count } = this.props.counter;
class Counter extends Component {
// AGREGAMOS OTRO HOOK
componentDidUpdate(prevProps, prevState){
  console.log('counter update');
  // console.log('prevProps', prevProps);
  // console.log('prevState', prevState);
  if (prevProps.counter.value !== this.props.counter.value){
    // ajax call y obtener nueva data del server
  }
}
componentWillUnmount(){
  console.log('counter unmounted');
}
    render() {
      console.log('counter rendered');

      return (
        <div>
           <span className={this.getBadgesClasses()}>{this.formatCount()}</span>
          <button
               onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
            >Incrementar
          </button>
          <button onClick={() => this.props.onDelete(this.props.counter.id) } 
          className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
      );
    }

    getBadgesClasses() {
      let classes = "badge m-2 badge-";
      classes += this.props.counter.value === 0 ? "warning" : "primary";
      return classes;
    }
    formatCount() {
      const { value } = this.props.counter;
      return value === 0 ? "Cero" : value;
    }
  }
  export default Counter;
