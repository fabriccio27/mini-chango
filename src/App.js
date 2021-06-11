import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/navbar';
import Counters from './components/counters';




/* MEJORAS: 
1. pasar a componente funcional y pasar estado con hooks
2. usar useContext
3. agregar productos con precios
*/

/* como armo nuevo state? */
class App extends Component {
    state = {
        counters: [
          { id: 1, value: 4, description:"Tomates", price:120 },
          { id: 2, value: 0, description:"Galletitas", price:250 },
          { id: 3, value: 0, description:"Lata de atun", price:380 },
          { id: 4, value: 0, description:"Aquarius", price:170 },
        ],
      };
      constructor(){
        super();
        console.log('app - constructor');
      }
      componentDidMount(){
        // ajax call
        //this.setState({ movies });
        console.log('app - mounted');
      }
      // ejemplo que devuelve un array vacio de props al browser
      // constructor (props){
      //   super(props);
      //   console.log('app - constructor', this.props);
      //   this.state=this.props.something;
      //   // no podemos usar setState dentro del constructor
      //  // this.setState();
      // }
      handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index]={...counter}; // clonamos el objeto recibido x parametro
        counters[index].value++;
        this.setState({counters});
       // console.log(this.state.counters[index]);
      };
      handleDelete = (counterId) => {
        const counters = this.state.counters.filter((c) => c.id !== counterId);
        this.setState({ counters: counters });
      };
      handleReset = () => {
        const counters = this.state.counters.map((c) => {
          c.value = 0;
          return c;
        });
        this.setState({ counters });
      };
  render(){
    console.log('app - rendered');
  return (
    <React.Fragment>
    {/* counters no va a existir mas, asi que esto va a cambiar */}
    <NavBar totalCounters={this.state.counters.filter(c=> c.value>0).length} />
    <main className="container">
      {/* Counters usa counters para mapear y generar multiples Counter, pero onReset, onIncrement etc, los pasa, eso lo voy a mejorar con useContext */}
      <Counters 
      counters={this.state.counters}
      onReset={this.handleReset}
      onIncrement={this.handleIncrement}
      onDelete={this.handleDelete}
      />
    </main>
    </React.Fragment>
  );
}
}
export default App;