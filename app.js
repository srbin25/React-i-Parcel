import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Futer from "./components/futer";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/style.css';

const App = () => (
  <div>
    <Header />
  
    <section className="section container content">
      <h1>Primer sajta</h1>
      <p>Primer uradjne upotrebom reacta, Bootstrapa, Blume i parcela</p>
    </section>   
    <Futer/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
