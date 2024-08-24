import React, { useState } from 'react'
import logo from './imgs/comp-img/logo.svg';
import { RxEyeClosed } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { SecurityCheckMark } from './circles/SecurityCheckMark';
import SecurityIcon from "./imgs/comp-img/security.svg";


export function Security() {
    //state to toggle password   
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    //state variable to collect user input
    const [formData, setFormData] = useState({
        username: " ",
        password: " ",
        confirmPassword: " "
    })

    //state for  error object
    const [errors, setErrors] = useState({})

    function handleChange(e) {
        const { name, value } = e.target;
        //updates the data for both username and password
        setFormData({ ...formData, [name]: value })
    }

    //Validation and validation error messages
    function handleSubmit(e) {
        e.preventDefault();
        //validate the input field
        const validationError = {}
        //username
        if (!formData.username.trim()) {
            validationError.username = "username required"
        }
        //password
        if (!formData.password.trim()) {
            validationError.password = "password is required"
        } else if (formData.password.length < 6) {
            validationError.password = "password should be at least 6 characters"
        }
        //confirm password
        if (!formData.confirmPassword.trim()) {
            validationError.confirmPassword = " "
        } else if (formData.confirmPassword !== formData.password) {
            validationError.confirmPassword = "password not matched"
        } else if (formData.confirmPassword === formData.password) {
            validationError.confirmPassword = " "
        }
        setErrors(validationError);
    }

    let isValid = formData.username !== " " && formData.password.length >= 6 && formData.confirmPassword === formData.password;

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    }

    return <>
        <body className='signUpBody'>
            <section className="signUpSection section">
                <main className='signUpMain'>
                    <img src={logo} alt="syncU logo" />
                    <div>
                        <SecurityCheckMark />
                        <form action="" className='form gap-[13px]' onSubmit={handleSubmit}>
                            <div className='flex flex-col gap-[10px] items-center divhr'>
                                <img src={SecurityIcon} alt="security  Icon" className='imgIcon' />
                                <h2 className='welcome'>Account Security</h2>
                                <p className='text-h4 font-medium text-base '>
                                    Add a username and password to secure your account.
                                </p>
                            </div>
                            <div className='divhr'>
                                <div className='flex flex-col items-start gap-[10px]'>
                                    <label htmlFor="email" className=" text-label font-medium text-base">Username</label>       <input type="text" placeholder='@username' className='btn allInput' name="username" onChange={handleChange} onKeyDown={handleEnter} />
                                    {errors.username && <span className='text-red'>{errors.username}</span>}
                                </div>
                                <div className='flex flex-col items-start gap-[10px]'>
                                    <label htmlFor="password" className=" text-label font-medium text-base">Password</label>
                                    <div className='flex items-center w-full'>
                                        <input type={show ? "text" : "password"} name="password" id="password" className='btn allInput w-full' placeholder='********' onChange={handleChange} onKeyDown={handleEnter} />
                                        <span className={`text-[20px] ml-[-9vh] cursor-pointer ${show ? "rotate-180" : ""} `} onClick={() => setShow(!show)} ><RxEyeClosed />
                                        </ span>
                                    </div>
                                    {errors.password && <span className='text-red'>{errors.password}</span>}
                                </div>
                                <div className='flex flex-col items-start gap-[10px]'>
                                    <label htmlFor="password" className=" text-label font-medium text-base">Confirm password</label>
                                    <div className='flex items-center w-full'>
                                        <input type={show1 ? "text" : "password"} name="confirmPassword" id="confirmPassword" className='btn allInput w-full' placeholder='********' onChange={handleChange} onKeyDown={handleEnter} />
                                        <span className={`text-[20px] ml-[-9vh] cursor-pointer ${show1 ? "rotate-180" : ""} `} onClick={() => setShow1(!show1)}><RxEyeClosed />
                                        </ span>
                                    </div>
                                    {errors.confirmPassword && <span className='text-red'>{errors.confirmPassword}</span>}
                                </div>
                            </div>
                            <div className='px-[48px] w-full flex items-center justify-between'>
                                <Link to="/work">
                                    <button className='btn button w-[125px] bg-fbg text-h4' onKeyDown={handleEnter} >
                                        Back
                                    </button>
                                </Link>
                                <Link to='/loader'>
                                    <button type="submit" className={`btn button w-[125px] ${isValid ? "active-button" : " "}`} onKeyDown={handleEnter} disabled={!isValid}>Done</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </main>
            </section >
        </body >
    </>
}
