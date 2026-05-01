// import { useState, useEffect } from 'react'
// import Navbar from './components/Navbar';
// import { v4 as uuidv4 } from 'uuid';
// import { FaEdit } from "react-icons/fa";
// import { AiFillDelete } from "react-icons/ai";
// import './App.css'

// function App() {
//     const [todo, setTodo] = useState("")
//     const [todos, setTodos] = useState([])
//     const [showFinished, setshowFinished] = useState(true)

//   useEffect(()=>{
//     let todoString = localStorage.getItem("todos")
//     if(todoString){
//       let todos = JSON.parse(localStorage.getItem("todos"))
//       setTodos(todos)
//     }
//   },[])

//   const saveToLS = (params) => {
//     localStorage.setItem("todos", JSON.stringify(todos))
//   }

//   const handleChange = (e) =>{
//     setTodo(e.target.value)
//   }

//   const handleAdd = () =>{
//     setTodos([...todos, {id: uuidv4() , todo , isCompleted : false}])
//     setTodo("")
//     saveToLS()
//   }

//   const toggleFinished = (e) => {
//     setshowFinished(!showFinished)
//   }


//   const handleCheckbox = (e) => {
//     let id = e.target.name
//     let index = todos.findIndex(item=>{
//       return item.id === id;
//     })
//     let newTodos = [...todos];
//     newTodos[index].isCompleted = !newTodos[index].isCompleted;
//     setTodos(newTodos) 
//     saveToLS()
//   }
  
  
//   const handleEdit = (e, id) => {
//     let t = todos.filter(i=>i.id===id)
//     setTodo(t[0].todo)
//     let newTodos = todos.filter(item=>{
//       return item.id !== id
//     });
//     setTodos(newTodos)
//     saveToLS()
//   }

//   const handleDelete = (e, id) => {
//     let newTodos = todos.filter(item=>{
//       return item.id !== id
//     })
//     setTodos(newTodos)
//     saveToLS()
//   }
  


//   return (
//     <>
//       <Navbar />
//       <div className="container justify-center bg-violet-200 h-[80vh]">
//         <div className="text-2xl font-bold">iTask - Manage your todos at one place</div>
//         <div className="add">
//           <div className="font-bold">Add a Todo</div>
//           <div className="flex">
//             <input onChange={handleChange} type="text" value={todo}/>
//             <button onClick={handleAdd} disabled={todo.length<=3} className='bg-blue-600 hover:bg-violet-950 rounded-full px-4 p-1 disabled:bg-violet-500'>Save</button>
//           </div>
//         </div>
//         <input onChange={toggleFinished} className='my-4' type="checkbox" id="show" checked={showFinished} />
//         <label className='mx-2' htmlFor="show">Show Finished</label>
//         <div className="bg-black h-0.5 w-[80vh]"></div>
//         <div className=" text-2xl font-bold">Your Todos</div>
//         <div className="todos">
//           {todos.length === 0 && <div className="m-5">No Todos To Display</div>}

//           {todos.map(item => {

//             return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex p-3 justify-between w-[50vw]">
//             <div className="flex gap-1">
//               <input onChange={handleCheckbox} type="checkbox" name={item.id} checked={item.isCompleted} id=''/>
//               <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
//             </div>
//             <div className="btn flex gap-2">
//               <button onClick={(e)=>{handleEdit(e, item.id)}} className='bg-blue-600 rounded-full px-4 p-1'><FaEdit /></button>
//               <button onClick={(e)=>{handleDelete(e, item.id)}} className='bg-blue-600 rounded-full px-4 p-1'><AiFillDelete /></button>
//             </div>
//           </div>
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;










import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import './App.css'

function App() {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    const [showFinished, setshowFinished] = useState(true)

    useEffect(() => {
        let todoString = localStorage.getItem("todos")
        if (todoString) {
            let todos = JSON.parse(todoString)
            setTodos(todos)
        }
    }, [])

    const saveToLS = () => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleAdd = () => {
        setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
        setTodo("")
        saveToLS()
    }

    const toggleFinished = () => {
        setshowFinished(!showFinished)
    }

    const handleCheckbox = (e) => {
        let id = e.target.name
        let index = todos.findIndex(item => item.id === id)
        let newTodos = [...todos]
        newTodos[index].isCompleted = !newTodos[index].isCompleted
        setTodos(newTodos)
        saveToLS()
    }

    const handleEdit = (e, id) => {
        let t = todos.filter(i => i.id === id)
        setTodo(t[0].todo)
        let newTodos = todos.filter(item => item.id !== id)
        setTodos(newTodos)
        saveToLS()
    }

    const handleDelete = (e, id) => {
        let newTodos = todos.filter(item => item.id !== id)
        setTodos(newTodos)
        saveToLS()
    }

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-blue-300 from-indigo-100 to-purple-200 flex justify-center items-start py-10">
                <div className="bg-white shadow-xl rounded-2xl w-full max-w-3xl p-8">

                    <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
                        iTask - Manage Your Todos
                    </h1>

                    {/* Add Todo */}
                    <div className="mb-6">
                        <label className="block font-semibold mb-2">Add a Todo</label>
                        <div className="flex gap-3">
                            <input
                                onChange={handleChange}
                                type="text"
                                value={todo}
                                placeholder="Write your task..."
                                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                            <button
                                onClick={handleAdd}
                                disabled={todo.length <= 3}
                                className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300 transition"
                            >
                                Save
                            </button>
                        </div>
                    </div>

                    {/* Show Finished */}
                    <div className="flex items-center gap-2 mb-4">
                        <input
                            onChange={toggleFinished}
                            type="checkbox"
                            checked={showFinished}
                            className="accent-indigo-600 w-4 h-4"
                        />
                        <span className="text-sm text-gray-700">Show Finished Todos</span>
                    </div>

                    <hr className="mb-4" />

                    <h2 className="text-xl font-semibold mb-4">Your Todos</h2>

                    {/* Todos */}
                    {todos.length === 0 && (
                        <div className="text-gray-500 text-center py-6">
                            No todos to display ✨
                        </div>
                    )}

                    <div className="space-y-3">
                        {todos.map(item => (
                            (showFinished || !item.isCompleted) && <div key={item.id} className="flex justify-between items-center bg-gray-50 border rounded-lg px-4 py-3 hover:shadow-sm transition">
                  <div className="flex items-center gap-3">
                    <input
                      onChange={handleCheckbox}
                      type="checkbox"
                      name={item.id}
                      checked={item.isCompleted}
                      className="accent-indigo-600 w-4 h-4"
                    />
                    <span className={item.isCompleted ? "line-through text-gray-400" : "text-gray-800"}>
                      {item.todo}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={(e) => handleEdit(e, item.id)}
                      className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-md"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={(e) => handleDelete(e, item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md"
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                </div>
              
            ))}
                </div>

            </div>
        </div >
    </>




  )
}

export default App