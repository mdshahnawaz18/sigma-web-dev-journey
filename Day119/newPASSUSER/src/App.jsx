import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import './App.css'

function App() {
  const [passwordArray, setpasswordArray] = useState([])

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      id: null
    }
  })

  const getPasswords = async () => {
    let req = await fetch("http://localhost:3000/")
    let passwords = await req.json()
    setpasswordArray(passwords)
  }

  useEffect(() => {
    getPasswords()
  }, [])

  const copyText = (text) => {
    navigator.clipboard.writeText(text)
    toast('Copied To Clipboard')
  }

  const savePassword = async (data) => {
    if (data.username.length > 3 && data.password.length > 3) {

      if (data.id) {
        await fetch("http://localhost:3000/", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: data.id })
        })
      }

      const newPassword = { ...data, id: uuidv4() }

      setpasswordArray([...passwordArray, newPassword])

      await fetch("http://localhost:3000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPassword)
      })

      reset()
      toast('Password saved!')
    } else {
      toast('Error: Password not saved!')
    }
  }

  const deletePassword = async (id) => {
    if (confirm("Do You Really Want To Delete This Password?")) {
      setpasswordArray(passwordArray.filter(i => i.id !== id))
      await fetch("http://localhost:3000/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
      })
      toast('Password deleted!')
    }
  }

  const editPassword = (id) => {
    const item = passwordArray.find(i => i.id === id)
    setValue("username", item.username)
    setValue("password", item.password)
    setValue("id", item.id)

    setpasswordArray(passwordArray.filter(i => i.id !== id))
  }

  return (
    <>
      {isSubmitting && <div>Loading...</div>}

      <div className="container">
        <form onSubmit={handleSubmit(savePassword)}>

          <input
            placeholder='Username'
            {...register("username", {
              required: "This Field is Required",
              minLength: { value: 3, message: "Minimum Length Is 3" },
              maxLength: { value: 10, message: "Maximum Length Is 10" }
            })}
          />
          {errors.username && <div>{errors.username.message}</div>}

          <input
            placeholder='Password'
            type="password"
            {...register("password", {
              required: "Password Field is Required",
              minLength: { value: 8, message: "Minimum Length of Password Is 8" },
              maxLength: { value: 16, message: "Maximum Length of Password Is 16" }
            })}
          />
          {errors.password && <div>{errors.password.message}</div>}

          <input type="submit" disabled={isSubmitting} value="Submit" />
        </form>
      </div>

      <div className="passwords">
        <h2>Your Passwords</h2>

        {passwordArray.length === 0 && <div>No Passwords To Show</div>}

        {passwordArray.length !== 0 &&
          <table>
            <tbody>
              {passwordArray.map(item => (
                <tr key={item.id}>
                  <td>{item.username}</td>
                  <td>{item.password}</td>
                  <td>
                    <button onClick={() => editPassword(item.id)}>Edit</button>
                    <button onClick={() => deletePassword(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    </>
  )
}

export default App
































































// import { useState } from 'react'
// import { useEffect } from 'react'
// import { useForm } from 'react-hook-form'
// import './App.css'

// function App() {
//   const [showPassword, setshowPassword] = useState(false)
//   const [form, setForm] = useState({username: "", password: "" })
//   const [passwordArray, setpasswordArray] = useState([])


//   const getPasswords = async () => {
//     let req = await fetch("http://localhost:3000/")
//     let passwords = await req.json()
//     setpasswordArray(passwords)

//   }


//   useEffect(() => {
//     getPasswords()
//   }, [])


//   const copyText = (text) => {
//     toast('Copied To Clipboard', {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: false,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark"
//     });
//     navigator.clipboard.writeText(text)
//   }


//   const savePassword = async () => {
//     console.log(form);
//     if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {

//       await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: form.id }) })

//       setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])

//       await fetch("http://localhost:3000/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, id: uuidv4() }) })
//       // localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))

//       // console.log([...passwordArray, form])
//       setForm({username: "", password: "" })
//       toast('Password saved!', {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: false,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark"
//       });
//     }
//     else {
//       toast('Error: Password not saved!')
//     }
//   }

//   const deletePassword = async (id) => {
//     let c = confirm("Do You Really Want To Delete This Password?")
//     if (c) {
//       setpasswordArray(passwordArray.filter((i) => i.id !== id))

//       await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) })
//       // localStorage.setItem("passwords", JSON.stringify(passwordArray.filter((i) => i.id !== id)))

//       toast('Password deleted!', {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: false,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark"
//       });
//     }
//   }


//   const editPassword = (id) => {

//     setForm({ ...passwordArray.filter(i => i.id === id)[0], id: id })

//     setpasswordArray(passwordArray.filter(item => item.id !== id))

//   }



//   const togglePassword = () => {
//     setshowPassword(!showPassword)
//   }



//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }





//   const {
//     register,
//     handleSubmit,
//     setError,
//     watch,
//     formState: { errors, isSubmitting },
//   } = useForm();

//   const delay = (d) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve()
//       }, d * 1000);
//     })
//   }


//   const onSubmit = async (form) => {
//     // await delay(2)
//     let r = await fetch("http://localhost:3000/", { method: "POST", headers: { "Content-Type": "application/json", }, body: JSON.stringify(data) })

//     let res = await r.text()
//     console.log(form, res)
//     if (form.username === "Shahnawaz") {
//       setError("myForm", { message: "This Username Is Already Use" })
//     }

//     else if (form.username === "Virat") {
//       setError("original", { message: "Virat Kohli Name Is Reserve For Original Virat" })
//     }
//   }

//   return (
//     <>
//       {isSubmitting && <div>Loading...</div>}
//       <div className="container">
//         <form action="" onSubmit={handleSubmit(onSubmit)}>
//           <input placeholder='Username' {...register("username", { required: { value: true, message: "This Field is Required" }, minLength: { value: 3, message: "Minimum Length Is 3" }, maxLength: { value: 10, message: "Maximum Length Is 10" } })} type="text" /> <br />
//           {errors.username && <div className="">{errors.username.message}</div>}

//           <input placeholder='password' {...register("password", { required: { value: true, message: "Password Field is Required" }, minLength: { value: 8, message: "Minimum Length of Password Is 8" }, maxLength: { value: 16, message: "Maximum Length of Password Is 16" } })} type="password" /> <br />
//           {errors.password && <div className="">{errors.password.message}</div>}

//           <input disabled={isSubmitting} type="submit" value='Submit' />
//           {errors.myForm && <div className="">{errors.myForm.message}</div>}

//           {errors.original && <div className="">{errors.original.message}</div>}
//         </form>
//       </div>
//       <div className="passwords">
//         <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
//         {passwordArray.length === 0 && <div>No Passwords To Show</div>}
//         {passwordArray.length !== 0 && <table className='table-auto w-full rounded-md overflow-hidden mb-10'>
//           <thead className='bg-green-800 text-white'>
//             <tr>
//               <th className='py-2'>Site</th>
//               <th className='py-2'>Username</th>
//               <th className='py-2'>Password</th>
//               <th className='py-2'>Actions</th>
//             </tr>
//           </thead>
//           <tbody className='bg-green-100'>
//             {passwordArray.map((item, index) => {
//               return <tr key={index}>
              
//                 <td className='py-2 border border-white text-center '>
//                   <div className="flex items-center justify-center "><span>{item.username}</span>
//                     <div className="lordIconCopy cursor-pointer" onClick={() => { copyText(item.username) }}>
//                       <img className='w-[20px] h-[20px] pt-0.5 pl-0.5' src="icons/copy.png" alt="" />
//                     </div>
//                   </div>

//                 </td >

//                 <td className='py-2 border border-white text-center '>
//                   <div className="flex items-center justify-center ">
//                     <span>{item.password}</span>
//                     {/* <span>{"*".repeat(item.password.length)}</span> */}
//                     <div className="lordIconCopy cursor-pointer" onClick={() => { copyText(item.password) }}>
//                       <img className='w-[20px] h-[20px] pt-0.5 pl-0.5' src="icons/copy.png" alt="" />
//                     </div>
//                   </div>
//                 </td >
//                 <td className='flex justify-center py-2 border border-white text-center '>
//                   <span className='cursor-pointer mx-1'>
//                     <img className='w-[20px] h-[20px] pt-0.5 pl-0.5' src="icons/edit.png" alt="Edit" onClick={() => { editPassword(item.id) }} />
//                   </span>
//                   <span className='cursor-pointer mx-1'>
//                     <img className='w-[20px] h-[20px] pt-0.5 pl-0.5' src="icons/bin.png" alt="Delete" onClick={() => { deletePassword(item.id) }} />

//                   </span>
//                 </td >

//               </tr>
//             })}
//           </tbody>
//         </table>
//         }
//       </div>
//     </>
//   )
// }

// export default App
