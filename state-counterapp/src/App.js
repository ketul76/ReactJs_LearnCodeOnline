import React,{useState} from "react";
import "./App.css";

function App(){
  const [count,setCount] = useState(0);
  return(
    <div className="App">
      <header>
        <h1>Counter App Using State</h1>
      </header>
      <h2>Current VAlue OF IS {count}</h2>
      <button onClick={() => setCount(0)}>Reset Counter</button>
      <button onClick={() => (count > 10 ? "" :setCount(count + 1))}>
      Increase Counter</button>
      <button onClick={() => (count < 1 ? "" : setCount(count - 1))}>Descrease Counter</button>
    </div>
  )
}
export default App;