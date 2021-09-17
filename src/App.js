import './App.css';
import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { decrementNumber, incrementNumber } from './actions';

function App() {
  const myState =  useSelector((state) => state.changeNumber)
  const dispatch = useDispatch()
  return (  
    <div className="App">
        <h1>Increment/Decrement using Redux</h1>

        <button onClick={()=>dispatch(decrementNumber(5))}>Decrement</button>
        <h4>{myState}</h4>
        <button onClick={()=>dispatch(incrementNumber(10))}>Increment</button>
    </div>
  );
}

export default App;
