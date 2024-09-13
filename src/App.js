
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { add5, decrement, increment } from './storeFolder/counterSlice'
import { store } from './storeFolder/store';
function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="App">
     <p>{count}</p>
     <button onClick={()=>dispatch(decrement())}>-</button>
     <button onClick={()=>dispatch(increment())}>+</button>
     <button onClick={()=>dispatch(add5(10))}>Add 10</button>
    </div>
  );
}

export default App;
