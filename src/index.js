
import React from "react";
import ReactDOM from "react-dom";
import Navbar from './components/navbar';
import Image from './components/images';

const App = () => {
  return (
    <div>
      <Navbar />
      <Image />
    </div>
  )
};


ReactDOM.render(<App />, document.querySelector("#root"));