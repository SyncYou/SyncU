import React, { useState } from 'react'
import logo from './imgs/comp-img/logo.svg';
import { Link } from 'react-router-dom';
import { SecurityCheckMark } from './circles/SecurityCheckMark';
import SecurityIcon from "./imgs/comp-img/security.svg";
import { Input } from './Input';


export function Security() {

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
            validationError.confirmPassword = "not "
        } else if (!formData.confirmPassword !== formData.password) {
            validationError.confirmPassword = "password not matched"

        } else if (formData.confirmPassword === formData.password) {
            validationError.confirmPassword = "password  matched"

        }

        setErrors(validationError);

    }

    const isValid = formData.username !== " " && formData.password !== " " && formData.confirmPassword !== " "

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
                                    <label htmlFor="email" className=" text-label font-medium text-base">Username</label>

                                    {/* <Input placeHolder={"@username"} /> */}
                                    <input type="text" placeholder='@username' className='btn allInput' name="username" onChange={handleChange} />
                                    {errors.username && <span className='text-red'>{errors.username}</span>}
                                </div>

                                <div className='flex flex-col items-start gap-[10px]'>
                                    <label htmlFor="password" className=" text-label font-medium text-base">Password</label>
                                    <input type="password" name="password" id="password" className='btn allInput' placeholder='********' onChange={handleChange} />
                                    {errors.password && <span className='text-red'>{errors.password}</span>}


                                </div>
                                <div className='flex flex-col items-start gap-[10px]'>
                                    <label htmlFor="password" className=" text-label font-medium text-base">Confirm password</label>
                                    <input type="password" name="confirmPassword" id="confirmPassword" className='btn allInput' placeholder='********' onChange={handleChange} />
                                    {errors.confirmPassword && <span className='text-red'>{errors.confirmPassword}</span>}


                                </div>

                            </div>


                            <div className='px-[48px] w-full flex items-center justify-between'>

                                <Link to="/work">
                                    <button className='btn button w-[125px] bg-fbg text-h4'>
                                        Back
                                    </button>
                                </Link>

                                <Link to='/loader'>

                                    <button type="submit" className={`btn button w-[125px] ${isValid ? "active-button" : " "}`} disabled={!isValid}>

                                        Done

                                    </button>
                                </Link>

                            </div>




                        </form>


                    </div>

                </main>

            </section>
        </body>


    </>
}
