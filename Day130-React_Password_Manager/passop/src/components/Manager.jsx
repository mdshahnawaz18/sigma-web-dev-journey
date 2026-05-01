import React, { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
    const [showPassword, setshowPassword] = useState(false)
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])


    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])


    const copyText = (text) => {
        toast('Copied To Clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });
        navigator.clipboard.writeText(text)
    }


    const savePassword = () => {
        console.log(form);
        setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
        console.log([...passwordArray, form])
        setForm({site:"",username:"",password:""})
         toast('Password saved!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });
    }

    const deletePassword = (id) => {
        console.log("Deleting Password with Id ", id)
        let c = confirm("Do You Really Want To Delete This Password?")
        if(c){
        setpasswordArray(passwordArray.filter((i) =>i.id !== id))
        localStorage.setItem("passwords" ,JSON.stringify(passwordArray.filter((i) =>i.id !== id)))
         toast('Password deleted!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });
    }
    }


    const editPassword = (id) => {
        console.log("Editing Password with Id ", id)

        setForm(passwordArray.filter(i =>i.id === id)[0])

        setpasswordArray(passwordArray.filter(item=>item.id !== id))

    }



    const togglePassword = () => {
        setshowPassword(!showPassword)
    }



    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    

    return (
        <>
            <ToastContainer/>

            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
            </div>

            <div className="p-3 md:mycontainer min-h-[88.2vh]">
                <h1 className='font-bold text-4xl text-center'>
                    <span className='text-green-500'>&lt;</span>
                    <span>Pass</span>
                    <span className='text-green-500'>OP/&gt;</span>
                </h1>

                <p className='text-gray-900 text-lg text-center'>
                    Your Own Password Manager
                </p>

                <div className="text-black flex flex-col p-4 gap-8 items-center">
                    <input value={form.site} name='site' onChange={handleChange}
                        placeholder='Enter Website URL'
                        className='rounded-full border border-green-500 w-full p-4 py-1'
                        type="text" id='site'
                    />

                    <div className="flex flex-col md:flex-row w-full justify-between gap-8">
                        <input value={form.username} name='username' onChange={handleChange}
                            placeholder='Enter Username'
                            className='rounded-full border border-green-500 w-full p-4 py-1'
                            type="text" id='username'
                        />

                        <div className="relative w-full">
                            <input value={form.password} name='password' onChange={handleChange}
                                placeholder='Enter Password'
                                className='rounded-full border border-green-500 w-full p-4 py-1'
                                type={showPassword ? "text" : "password"} id='password' />

                            <span
                                className='absolute right-[14px] top-[6px] cursor-pointer'
                                onClick={togglePassword}
                            >
                                <lord-icon
                                    src="https://cdn.lordicon.com/dicvhxpz.json"
                                    trigger="click"
                                    state={showPassword ? "hover-cross" : "hover"}
                                    className="w-5 h-5"
                                >
                                </lord-icon>
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword} className='flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900'>
                        <lord-icon
                            src="https://cdn.lordicon.com/vjgknpfx.json"
                            trigger="hover">
                        </lord-icon>
                        Save Password
                    </button>
                </div>

                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No Passwords To Show</div>}
                    {passwordArray.length !== 0 && <table className='table-auto w-full rounded-md overflow-hidden mb-10'>
                        <thead className='bg-green-800 text-white'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                                <th className='py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>
                                    <td className='py-2 border border-white text-center'>
                                        <div className="flex items-center justify-center ">
                                            <a href={item.site} target='_blank'>{item.site}</a>
                                            <div className="lordIconCopy cursor-pointer" onClick={() => { copyText(item.site) }}>
                                                <img className='w-[20px] h-[20px] pt-0.5 pl-0.5' src="icons/copy.png" alt="" />
                                            </div>
                                        </div>
                                    </td >
                                    <td className='py-2 border border-white text-center '>
                                        <div className="flex items-center justify-center "><span>{item.username}</span>
                                            <div className="lordIconCopy cursor-pointer" onClick={() => { copyText(item.username) }}>
                                                <img className='w-[20px] h-[20px] pt-0.5 pl-0.5' src="icons/copy.png" alt="" />
                                            </div>
                                        </div>

                                    </td >

                                    <td className='py-2 border border-white text-center '>
                                        <div className="flex items-center justify-center ">
                                            <span>{item.password}</span>
                                            {/* <span>{"*".repeat(item.password.length)}</span> */}
                                            <div className="lordIconCopy cursor-pointer" onClick={() => { copyText(item.password) }}>
                                                <img className='w-[20px] h-[20px] pt-0.5 pl-0.5' src="icons/copy.png" alt="" />
                                            </div>
                                        </div>
                                    </td >
                                    <td className='flex justify-center py-2 border border-white text-center '>
                                        <span className='cursor-pointer mx-1'>
                                            <img className='w-[20px] h-[20px] pt-0.5 pl-0.5' src="icons/edit.png" alt="Edit" onClick={() => { editPassword(item.id) }} />
                                        </span>
                                        <span className='cursor-pointer mx-1'>
                                            <img className='w-[20px] h-[20px] pt-0.5 pl-0.5' src="icons/bin.png" alt="Delete" onClick={() => { deletePassword(item.id) }} />

                                        </span>
                                    </td >

                                </tr>
                            })}
                        </tbody>
                    </table>
                    }
                </div>
            </div>
        </>
    )






















    
    
    
    
    
    // return (
    //     <>
    //         <ToastContainer
    //             position="top-right"
    //             autoClose={5000}
    //             hideProgressBar={false}
    //             newestOnTop={false}
    //             closeOnClick={false}
    //             rtl={false}
    //             pauseOnFocusLoss
    //             draggable
    //             pauseOnHover
    //             theme="light"
    //         />

    //         <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
    //             <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
    //         </div>

    //         <div className="mycontainer">
    //             <h1 className='font-bold text-4xl text-center'>
    //                 <span className='text-green-500'>&lt;</span>
    //                 Pass
    //                 <span className='text-green-500'>OP/&gt;</span>
    //             </h1>

    //             <p className='text-gray-900 text-lg text-center'>
    //                 Your Own Password Manager
    //             </p>

    //             <div className="text-black flex flex-col p-4 gap-8 items-center">
    //                 <input value={form.site} name='site' onChange={handleChange}
    //                     placeholder='Enter Website URL'
    //                     className='rounded-full border border-green-500 w-full p-4 py-1'
    //                     type="text" id='site'
    //                 />

    //                 <div className="flex flex-col md:flex-row w-full justify-between gap-8">
    //                     <input value={form.username} name='username' onChange={handleChange}
    //                         placeholder='Enter Username'
    //                         className='rounded-full border border-green-500 w-full p-4 py-1'
    //                         type="text" id='username'
    //                     />

    //                     <div className="relative w-full">
    //                         <input value={form.password} name='password' onChange={handleChange}
    //                             placeholder='Enter Password'
    //                             className='rounded-full border border-green-500 w-full p-4 py-1'
    //                             type={showPassword ? "text" : "password"} id='password'/>

    //                         <span
    //                             className='absolute right-[14px] top-[6px] cursor-pointer'
    //                             onClick={togglePassword}
    //                         >
    //                             <lord-icon
    //                                 src="https://cdn.lordicon.com/dicvhxpz.json"
    //                                 trigger="click"
    //                                 state={showPassword ? "hover-cross" : "hover"}
    //                                 className="w-5 h-5"
    //                             >
    //                             </lord-icon>
    //                         </span>
    //                     </div>
    //                 </div>

    //                 <button onClick={savePassword} className='flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900'>
    //                     <lord-icon
    //                         src="https://cdn.lordicon.com/vjgknpfx.json"
    //                         trigger="hover">
    //                     </lord-icon>
    //                     Save Password
    //                 </button>
    //             </div>

    //             <div className="passwords">
    //                 <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
    //                 {passwordArray.length === 0 && <div>No Passwords To Show</div>}
    //                 {passwordArray.length !== 0 && <table className='table-auto w-full rounded-md overflow-hidden'>
    //                     <thead className='bg-green-800 text-white'>
    //                         <tr>
    //                             <th className='py-2'>Website Name</th>
    //                             <th className='py-2'>Username</th>
    //                             <th className='py-2'>Password</th>
    //                             <th className='py-2'>Actions</th>
    //                         </tr>
    //                     </thead>
    //                     <tbody className='bg-green-100'>
    //                         {passwordArray.map((item, index) => {
    //                             return <tr key={index}>
    //                                 <td className='py-2 border border-white text-center'>
    //                                     <div className="flex items-center justify-center ">
    //                                         <a href={item.site} target='_blank'>{item.site}</a>
    //                                         <div className="lordIconCopy cursor-pointer" onClick={() => { copyText(item.site) }}>
    //                                             <img className='w-[20px] h-[20px] pt-0.5 pl-0.5' src="icons/copy.png" alt="" />
    //                                         </div>
    //                                     </div>
    //                                 </td >
    //                                 <td className='py-2 border border-white text-center '>
    //                                     <div className="flex items-center justify-center "><span>{item.username}</span>
    //                                         <div className="lordIconCopy cursor-pointer" onClick={() => { copyText(item.username) }}>
    //                                             <img className='w-[20px] h-[20px] pt-0.5 pl-0.5' src="icons/copy.png" alt="" />
    //                                         </div>
    //                                     </div>

    //                                 </td >

    //                                 <td className='py-2 border border-white text-center '>
    //                                     <div className="flex items-center justify-center ">
    //                                         <span>{item.password}</span>
    //                                         <div className="lordIconCopy cursor-pointer" onClick={() => { copyText(item.password) }}>
    //                                             <img className='w-[20px] h-[20px] pt-0.5 pl-0.5' src="icons/copy.png" alt="" />
    //                                         </div>
    //                                     </div>
    //                                 </td >
    //                                 <td className='flex justify-center py-2 border border-white text-center '>
    //                                     <span className='cursor-pointer mx-1'>
    //                                         <img className='w-[20px] h-[20px] pt-0.5 pl-0.5' src="icons/edit.png" alt="Edit" onClick={() => { editPassword(item.id) }} />
    //                                     </span>
    //                                     <span className='cursor-pointer mx-1'>
    //                                         <img className='w-[20px] h-[20px] pt-0.5 pl-0.5' src="icons/bin.png" alt="Delete" onClick={() => { deletePassword(item.id) }} />

    //                                     </span>
    //                                 </td >

    //                             </tr>
    //                         })}
    //                     </tbody>
    //                 </table>
    //                 }
    //             </div>
    //         </div>
    //     </>
    // ) 
}

export default Manager