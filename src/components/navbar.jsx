/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import cart from '../images/cart.png';

// stateless functional component
// snippet sfc
const NavBar = (props) => {
  console.log("navBar render");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={cart} width="50" height="50" alt="Chango"></img>
        Shopping
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
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
