
import React from "react";
import ReactDOM from "react-dom";
import Navbar from './components/navbar.jsx';
import Gallery from './components/gallery.jsx';
import BottomBar from './components/bottomBar.jsx';
import css from './style/styles.css'

const App = () => {
  const bodyStyle = {
    display:'flex'
  }
  return (
    <div grid-row="" grid-pad="2" grid-gutter="4" grid-responsive="" >
      <Navbar />
      <Gallery />
      <BottomBar />
    </div>
  )
};


ReactDOM.render(<App />, document.querySelector("#root"));