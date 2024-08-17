import React from 'react'
import logo from './imgs/comp-img/logo.svg';
import { Link } from 'react-router-dom';
import { SecurityCheckMark } from './circles/SecurityCheckMark';
import SecurityIcon from "./imgs/comp-img/security.svg";
import { Input } from './Input';


export function Security() {

    return <>
        <body className='signUpBody'>

            <section className="signUpSection ">


                <main className='signUpMain'>
                    <img src={logo} alt="syncU logo" />

                    <div>

                        <SecurityCheckMark />

                        <form action="" className='form gap-[13px]'>
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

                                    <Input placeHolder={"@username"} />

                                </div>

                                <div className='flex flex-col items-start gap-[10px]'>
                                    <label htmlFor="email" className=" text-label font-medium text-base">Password</label>
                                    <input type="password" name="" id="" className='btn text-left  px-[12px] pr-[5em] text-email bg-input' placeholder='********' required />


                                </div>
                                <div className='flex flex-col items-start gap-[10px]'>
                                    <label htmlFor="email" className=" text-label font-medium text-base">Confirm password</label>
                                    <input type="password" name="" id="" className='btn text-left  px-[12px] pr-[5em] text-email bg-input' placeholder='********' required />


                                </div>

                            </div>


                            <div className='px-[48px] w-full flex items-center justify-between'>

                                <Link to="/work">
                                    <button className='btn button w-[125px] bg-fbg text-h4'>
                                        Back
                                    </button>
                                </Link>

                                <Link to='/loader'>
                                    <button className='btn button w-[125px]' >
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
