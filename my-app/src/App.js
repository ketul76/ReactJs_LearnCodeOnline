import React from "react"
import "./style.css";
import Btn from './Btn';

const App = () => {
  return(
    <div>
      <h1 style={{textAlign:"center"}}>Hello World</h1> 
      <Btn title="Play Store" />
      <Btn title="App Store" />
    </div>
  )
}

export default App;