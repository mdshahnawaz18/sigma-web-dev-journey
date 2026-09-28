import React from 'react'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';




const Manager = () => {

    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])
    const [showPassword, setshowPassword] = useState(false)


    const getPasswords = async () => {
        let a = await fetch("http://localhost:3000/")
        let passwords = await a.json()
        setpasswordArray(passwords)
    }


    useEffect(() => {
        getPasswords();
    }, [])


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    const copyText = (text) => {
        console.log(text)
        toast('Copied to clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
        navigator.clipboard.writeText(text)
    }


    const savePassword = async () => {
        console.log(form);
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
            await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: form.id }) })
            setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            // localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
            await fetch("http://localhost:3000/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, id: uuidv4() }) })
            console.log(...passwordArray, form);
            setForm({ site: "", username: "", password: "" })
            toast('Password saved!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        }
        else {
            toast('Error: Password not saved!')
        }
    }


    const editPassword = (id) => {
        setForm(passwordArray.filter(i => i.id === id)[0])
        setpasswordArray(passwordArray.filter((item) => item.id !== id))
    }


    const deletePassword = async (id) => {
        let c = confirm("Do You Want To really Delete This Password?")
        if (c) {
            setpasswordArray(passwordArray.filter((i) => i.id !== id))
            console.log(passwordArray.filter(i => i.id !== id))
            // localStorage.setItem("passwords", JSON.stringify(passwordArray.filter((i) => i.id !== id)))
            await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) })
            toast('Password deleted!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        }
    }


    const togglePassword = () => {
        setshowPassword(!showPassword)
    }



    return (
        <>
            <ToastContainer />

            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
            </div>

            <div className="md:myContainer min-h-[90vh] pb-14">
                <div className="passOP flex flex-col items-center p-3 justify-center">
                    <div className="mx-16 font-bold text-4xl">
                        <span className='text-green-500'>&lt;</span>
                        <span className=''>Pass</span>
                        <span className='text-green-500'>OP/&gt;</span>
                    </div>
                    <div className="text-xl">Your Own Password Manager</div>
                </div>

                <div className="allInputs&Save flex flex-col gap-7 py-2 px-6">
                    <input name='site' value={form.site} id='site' onChange={handleChange} className='w-full border border-green-500 rounded-full p-1 pl-4' placeholder='Enter Website URL' type="text" />
                    <div className="UserPassInputs flex flex-col md:flex-row gap-7">
                        <input name='username' value={form.username} id='username' onChange={handleChange} className='w-full border border-green-500 rounded-full p-1 pl-4' placeholder='Enter Username' type="text" />
                        <div className="w-full relative ">
                            <input name='password' value={form.password} id='password' onChange={handleChange} className='w-full border border-green-500 rounded-full p-1 pl-4' placeholder='Enter Password' type={showPassword ? "text" : "password"} />
                            <div onClick={togglePassword} className="absolute right-4 bottom-0.5 ">
                                <lord-icon
                                    src="https://cdn.lordicon.com/dicvhxpz.json"
                                    trigger="click"
                                    state={showPassword ? "hover-cross" : "hover"}
                                    className="cursor-pointer w-5 h-5"
                                >
                                </lord-icon>
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-center">
                        <button onClick={savePassword} className='cursor-pointer flex justify-center items-center bg-green-500 rounded-full w-fit py-2 px-8'>
                            <lord-icon
                                src="https://cdn.lordicon.com/vjgknpfx.json"
                                trigger="hover">
                            </lord-icon>
                            Save Password</button>
                    </div>
                </div>
                <div className="datas mx-4">
                    <h1 className='font-bold text-2xl'>Your Passwords</h1>
                    <div className="siteTable mt-2">
                        {passwordArray.length === 0 && <div>No Passwords To Show</div>}
                        {passwordArray.length !== 0 && <table className=' mx-auto w-full '>
                            <thead className='bg-green-800 h-10 text-white'>
                                <tr>
                                    <th>Site</th>
                                    <th>Username</th>
                                    <th>Password</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className=' bg-green-100'>
                                {passwordArray.map((item, index) => {
                                    return <tr key={index} className=' h-10'>
                                        <td className='h-10 border border-white '>
                                            <div className="flex gap-1 justify-center items-center">
                                                <div className="">{item.site}</div>
                                                <img onClick={() => { copyText(item.site) }
                                                } className='cursor-pointer w-5' src="/icons/copy.png" alt="" /></div>
                                        </td>
                                        <td className='h-10 border border-white '>
                                            <div className="flex gap-1 justify-center items-center">
                                                <div className="">{item.username}</div>
                                                <img onClick={() => { copyText(item.username) }
                                                } className='cursor-pointer w-5' src="/icons/copy.png" alt="" /></div>
                                        </td>
                                        <td className='h-10 border border-white '>
                                            <div className="flex gap-1 justify-center items-center">
                                                <div className="">{item.password}</div>
                                                <img onClick={() => { copyText(item.password) }
                                                } className='cursor-pointer w-5' src="/icons/copy.png" alt="" /></div>
                                        </td>
                                        <td className='h-10 border border-white '>
                                            <div className="flex gap-3 justify-center items-center">
                                                <img onClick={() => { editPassword(item.id) }} className='cursor-pointer w-5' src="/icons/edit.png" alt="" />
                                                <img onClick={() => { deletePassword(item.id) }} className='cursor-pointer w-5' src="/icons/bin.png" alt="" /></div>
                                        </td>
                                    </tr>

                                })}

                            </tbody>
                        </table>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Manager
