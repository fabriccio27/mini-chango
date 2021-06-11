import React, { useContext } from "react";
import ChangoContext from "../context/chango-context";
import {currencyArgentina} from "../locales/arg";
//MEJORAS: pasar a componente funcional, y Counter incorpora producto?
function Counter({item}) {
  console.log("usando Counter refactorizado");
  const {handleIncrement, handleDelete} = useContext(ChangoContext);

  const getBadgesClasses=()=> {
      let classes = "badge m-2 badge-";
      classes += item.value === 0 ? "warning" : "primary";
      return classes;
  };
  const formatCount=()=> {
      const { value } = item;
      return value === 0 ? "Cero" : value;
  };

  return(
    <div>
        <span>{item.description}</span>
        <span>{item.price.toLocaleString("es-ar", currencyArgentina)}</span>
        <span>{(item.price * item.value).toLocaleString("es-ar", currencyArgentina)}</span>
        <span className={getBadgesClasses()}>{formatCount()}</span>
        <button
             onClick={() => handleIncrement(item)}
          className="btn btn-secondary btn-sm"
          >Incrementar
        </button>
        <button onClick={() => handleDelete(item.id) } 
        className="btn btn-danger btn-sm m-2">Delete</button>
    </div>
  )
}

/* class Counter extends Component {
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
          <span>{this.props.counter.description}</span>
          <span>{this.props.counter.price.toLocaleString("es-ar", currencyArgentina)}</span>
          <span>{(this.props.counter.price*this.props.counter.value).toLocaleString("es-ar", currencyArgentina)}</span>
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
  } */
export default Counter;
//borramos state, y todo lo que tenga this.state
// handleIncrement(), tambien lo borramos
// en el boton INCREMENTAR, onClick, lo modificamos
// getBadgesClasses, cambiamos this.state.count X this.props.counter.count
// formatCount, lo mismo const { count } = this.state; X  const { count } = this.props.counter;