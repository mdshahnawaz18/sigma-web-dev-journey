import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(true)
  const [todos, setTodos] = useState([

    {
      title: "Yoga",
      desc: "I do yoga At 9 AM"
    },
    {
      title: "Exercise",
      desc: "I do exercise At 6 PM"
    },
    {
      title: "Lunch",
      desc: "I Take Lunch At 2 PM"
    },
    {
      title: "Dinner",
      desc: "I Take Lunch At 10 PM"
    },
  ])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* {showbtn ? <button>I am true</button>:<button>I am false</button>} */}
      {showbtn && <button>I am true</button>}

      {todos.map((todo) => {     //List Rendering
        return (<>
          <div key={todo.title}>
            <ul>
              <li>{todo.title}</li>
              <li>{todo.desc}</li>
            </ul>
          </div>
        </>)
      })}

      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
