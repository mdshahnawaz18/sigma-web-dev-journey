import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createLogger } from 'vite'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("harry")
  const [form, setForm] = useState({email: "", phone: ""})

  const handleClick = () => {
    alert("Hey I a handle Click")
  }

  const handleMouseOver = () => {
    alert("Hey I a mouse over")
    console.log("Mouse")
  }

  const handleChange = (e) => {
    // setName(e.target.value)
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form)
  }


  return (
    <>

      <div className="button">
        <button onClick={handleClick}>Click Me</button>
      </div>

      <div className="red" onClick={handleMouseOver}>I am a red div

      </div>

      {/* <input type="text" value={name} onChange={handleChange} /> */}


      <input type="text" name='email' value={form.email} onChange={handleChange} />  
      <input type="text" name='phone' value={form.phone} onChange={handleChange} />  
    </>
  )
}

export default App
