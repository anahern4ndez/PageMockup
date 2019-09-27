
import React from "react";
import ReactDOM from "react-dom";
import Navbar from './components/navbar.jsx';
import Gallery from './components/gallery.jsx';
import Bubble from './components/bubble.jsx';

const App = () => {
  const bodyStyle = {
    display:'flex',
    flexDirection: 'column',
  }
  return (
    <div grid-row="" grid-pad="2" grid-gutter="4" grid-responsive="">
      <Navbar />
      <Gallery />
    </div>
  )
};


ReactDOM.render(<App />, document.querySelector("#root"));