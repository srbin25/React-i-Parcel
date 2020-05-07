import React from "react";
import Jumbo from"./jumbotron";
import Meni from"./navig";
const Header = () => (
  <div className="container-fluid">
    <nav className="navbar is-primary">
    <div className="container has-text-centered">
      <div className="navbar-brand">
        <p className="is-size-3">
      <Meni/>
        </p>
      </div>
    </div>
  </nav>
 <Jumbo/>
  </div>
  
);

export default Header;
