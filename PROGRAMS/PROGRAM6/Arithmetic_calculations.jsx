import React, { useState } from 'react'

function Arithmetic_calculations() {
  const[num1,setNum1]=useState("")
  const[num2,setNum2]=useState("")

  const a=Number(num1);
  const b=Number(num2);
  return (
    <div>
      <h1 style={({textDecorations:"underline"})}>Calculator</h1>
      <input type="number"
      placeholder='Enter the first number'
      onChange={(e)=>setNum1(e.target.value)} />

      <input type="number"
      placeholder='Enter the second number'
       onChange={(e)=>setNum2(e.target.value)} />
      <div style={{height:"200px",
        width:"300px",
        border:"3px solid",
        marginleft:"350px",
        marginTop:"20px",
        textAlign:"left"}}>
          <h1>Result</h1>
          <p><strong>Addition:</strong>{a+b}</p>
          <p><strong>Subtraction:</strong>{a-b}</p>
          <p><strong>Multiplication:</strong>{a*b}</p>
          <p><strong>Division:</strong>
          {b==0 ?"Cannot divided by zero":a/b}
          </p>
        </div>
    </div>
  )
}

export default Arithmetic_calculations
