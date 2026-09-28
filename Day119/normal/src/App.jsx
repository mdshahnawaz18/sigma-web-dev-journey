import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    setError, 
    watch,
    formState: { errors , isSubmitting},
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve ,reject) =>{
      setTimeout(()=>{
        resolve()
      }, d*1000);
    })
  }
  

  const onSubmit = async (data) => {
    // await delay(2)
    let r = await fetch("http://localhost:3000/" , {method: "POST" , headers : {"Content-Type" : "application/json" , }, body : JSON.stringify(data)})

    let res = await r.text()
    console.log(data,res)
//     if(data.username === "Shahnawaz"){
// setError("myForm" , {message : "This Username Is Already Use"})
//     }

//     else if(data.username === "Virat"){
// setError("original" , {message : "Virat Kohli Name Is Reserve For Original Virat"})
//     }
  }

  return (
    <>
    {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='Username' {...register("username" , {required : {value : true , message: "This Field is Required"}, minLength : {value : 3 , message : "Minimum Length Is 3" }, maxLength : {value : 10 , message : "Maximum Length Is 10" }})} type="text" /> <br />
          {errors.username && <div className="">{errors.username.message}</div>} 
      
          <input placeholder='password' {...register("password" , {required : {value : true , message: "Password Field is Required"}, minLength : {value : 8 , message : "Minimum Length of Password Is 8" }, maxLength : {value : 16 , message : "Maximum Length of Password Is 16" }})} type="password" /> <br />
          {errors.password && <div className="">{errors.password.message}</div>}

          <input disabled = {isSubmitting} type="submit" value='Submit'/>
          {/* {errors.myForm && <div className="">{errors.myForm.message}</div>} 
          
          {errors.original && <div className="">{errors.original.message}</div>}  */}
        </form>
      </div>
    </>
  )
}

export default App
