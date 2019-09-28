
import React from "react";
import ReactDOM from "react-dom";
import Navbar from './components/navbar.jsx';
import Gallery from './components/gallery.jsx';
import BottomBar from './components/bottomBar.jsx';
import Text from './components/text.jsx';
import css from './style/styles.css'

const App = () => {
  const bodyStyle = {
    display:'flex'
  }
  return (
    <div>
      <Navbar />
      <Gallery number="1"/>
      <BottomBar />
      <Text />
      <Gallery number="2"/>
    </div>
  )
};


ReactDOM.render(<App />, document.querySelector("#root"));