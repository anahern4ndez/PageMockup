
import React from "react";
import ReactDOM from "react-dom";
import Navbar from './components/navbar.jsx';
import Gallery from './components/gallery.jsx';

const App = () => {
  return (
    <div >
      <Navbar />
      <Gallery />
    </div>
  )
};


ReactDOM.render(<App />, document.querySelector("#root"));