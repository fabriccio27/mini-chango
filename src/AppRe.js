import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/navbar';
import Counters from './components/counters';
import ChangoContext from "./context/chango-context";

function App(){
    console.log("usando App como funcional con hooks");
    const defState = [
        { id: 1, value: 4, description:"Tomates", price:120 },
        { id: 2, value: 0, description:"Galletitas", price:250 },
        { id: 3, value: 0, description:"Lata de atun", price:380 },
        { id: 4, value: 0, description:"Aquarius", price:170 },
    ];
    const [groceries, setGroceries] = useState(defState);

    const handleIncrement = (counter) => {
        const counters = [...groceries];
        const index = counters.indexOf(counter);
        counters[index]={...counter}; // clonamos el objeto recibido x parametro
        counters[index].value++;
        setGroceries(counters);
       // console.log(this.state.counters[index]);
    };
    const handleDelete = (counterId) => {
        const counters = groceries.filter((c) => c.id !== counterId); //devuelvo todos los que no tienen el id del que quiero borrar
       setGroceries(counters);
    };
    const handleReset = () => {
        const counters = groceries.map((c) => {
          c.value = 0;
          return c;
        });
        setGroceries(counters);
    };
    return (
        <ChangoContext.Provider value={{groceries, handleReset, handleIncrement, handleDelete}}>
            <NavBar />
            {/* <h1>Usando AppRefactorizada</h1> */}
            <main className="container">
              {/* Counters usa groceries ("counters" de antes) para mapear y generar multiples Counter, pero onReset, onIncrement etc, los pasa, eso lo voy a mejorar con useContext */}
              <Counters />
            </main>
        </ChangoContext.Provider>
    );
}
export default App;

/* class App extends Component {
    state = {
        counters: [
          { id: 1, value: 4, description:"Tomates", price:120 },
          { id: 2, value: 0, description:"Galletitas", price:250 },
          { id: 3, value: 0, description:"Lata de atun", price:380 },
          { id: 4, value: 0, description:"Aquarius", price:170 }
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
    }; */
    /* render(){
      console.log('app - rendered');
        return (
          <React.Fragment>
          
          <NavBar totalCounters={this.state.counters.filter(c=> c.value>0).length} />
          <main className="container">
            
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
} */
