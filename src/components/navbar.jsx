/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import ChangoContext from "../context/chango-context";
import cart from '../images/cart.png';
import { currencyArgentina } from "../locales/arg";

// stateless functional component
//MEJORAS: agregar monto total en base a state. Usar useContext para tener acceso aca o nuevo componente de monto total si lo hago
const NavBar = () => {
  console.log("usando NavBar actualizado usando contexto");
  const {groceries} = useContext(ChangoContext);

  const getSubtotal=()=>{
    
    const total = groceries.reduce((total,item)=>{
      return total + item.price * item.value;
    },0);

    return total===0 ? "Estoy vacío :( " : total.toLocaleString("es-ar", currencyArgentina);
  };

  const totalCounters = groceries.filter(c=> c.value>0).length;

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={cart} width="50" height="50" alt="Chango"></img>
        Shopping
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
        <span>    {getSubtotal()}</span>
      </a>
    </nav>
  );
};

// class NavBar extends Component {

//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//           <a className="navbar-brand" href="#">
//             Navbar <span className="badge badge-pill badge-secondary">
//               {this.props.totalCounters}
//               </span>
//           </a>
//       </nav>
//     );
//   }
// }

export default NavBar;
