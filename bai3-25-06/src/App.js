import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    setSum(parseFloat(number1) * parseFloat(number2));
  }, [number1, number2]);

  const handlerN1 = (e) => {
    setNumber1(e.target.value || 0);
  }

  const handlerN2 = (e) => {
    setNumber2(e.target.value || 0);
  }

  return (
    <div className="App">
      <span>Số thứ nhất</span>
      <input type='number' onChange={handlerN1} placeholder='Number 1'></input>
      <span>Số thứ hai</span>
      <input type='number' onChange={handlerN2} placeholder='Number 2'></input>
      <h2>Tích: {sum}</h2>
    </div>
  );
}

export default App;
