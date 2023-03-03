import React, { useState } from 'react'
import './App.css';

const cal = ['/', '*', '+', '-', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function App() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState(0)

  const handleChangeValue = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className="App">
      <h1>Calculator App</h1>
      <input type="text" value={input} onChange={handleChangeValue} />
      <br />
      <button onClick={() => setResult(eval(input))}>Result</button>
      <h3>Result is {result}</h3>

      <div className='container'>
        <div className='calculatorBox'>
          <button  className='button clearBtn' onClick={() => {setInput('') 
        setResult(0)}} >Clear</button>
          {cal.map(c => {
            return <button className='button' onClick={() => setInput(input + c)}>{c}</button>
          })}
        </div>
      </div>
    </div>

  );
}

export default App;
