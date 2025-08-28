import React from 'react';
import "./BusinessLogin.css";
import GoogleIcon from "../../Assests/google-icon.svg";
import { useState } from 'react';

export function BusinessForms() {
    const [showLoginForm, setShowLoginForm] = useState(true);

    const toggleForm = () => {
        setShowLoginForm(!showLoginForm);
    };

    return (
        <div className="container mt-5 business-login" >
            {showLoginForm ? (
                <>
                    <div style={{ maxWidth: "400px" }} className='m-auto'>
                        <h2 className="text-center">Welcome Back</h2>
                        <p className="text-center" style={{ fontSize: "12px", color: "#484848" }}>
                            By continuing, you agree to Pulse 2x <a href='#' style={{ color: "#E61616" }}>Terms of Service</a> <br></br>
                            and acknowledge our <a href='#' style={{ color: "#E61616" }}>Privacy Policy</a>
                        </p>
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control rounded-0" id="email" placeholder="Email Address" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control rounded-0 py-0" id="password" placeholder="Password" />
                                <div className='w-100 text-end' style={{ marginTop: "-17px" }}>
                                    <a href="#" className="form-text text-end font-3" style={{ color: "#E61616" }}>Forgot password?</a>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-block w-100 text-white mt-4 rounded-0" style={{ backgroundColor: "#E61616" }}>Login</button>
                        </form>
                        <p className="text-center mt-2" style={{ fontSize: "13.5px" }}>Don’t have an account? <a href="#" style={{ color: "#E61616" }} onClick={toggleForm}>Claim your business on Pulse 2x.</a></p>
                    </div>
                </>
            ) : (
                <>
                    <div className='row'>
                        <div className='col-12 col-md-2 col-sm-2 col-lg-2 col-xl-2'></div>
                        <div className='col-12 col-md-8 col-sm-8 col-lg-8 col-xl-8 businessRegistration'>


                            <h4 className="w-100 text-center" style={{
                                fontSize: "20px",
                                color: "#484848"
                            }}>Create a free account to manage your Pulse page
                            </h4>
                            <form className=''>
                                <div className="d-flex gap-3">
                                    <input type="text" className="form-control rounded-0" id="name" placeholder="First Name" />
                                    <input type="text" className="form-control rounded-0" id="name" placeholder="Last Name" />
                                </div>
                                <div className="">
                                    <input type="text" className="form-control rounded-0" id="email" placeholder="Email Address" />
                                </div>
                                <div className="">
                                    <input type="text" className="form-control rounded-0" id="password" placeholder="Password" />
                                </div>
                                <p className="text-center" style={{ fontSize: "12px", color: "#484848" }}>
                                    By continuing, you agree to Pulse 2x <a href='#' style={{ color: "#E61616" }}>Terms of Service</a> and acknowledge our <a href='#' style={{ color: "#E61616" }}>Privacy Policy</a>. We may send you marketing emails about Pulse 2x products, services and local events. Unsubscribe at any time.

                                </p>
                                <div className='w-100 text-center'>
                                    <button type="submit" className="btn btn-block text-white mt-4 rounded-0" style={{ backgroundColor: "#E61616", width: "400px" }}>Sign Up</button>
                                </div>
                            </form>
                            <p className="text-center mt-2" style={{ fontSize: "13.5px" }}>Already have an account? <a href="#" style={{ color: "#E61616" }} onClick={toggleForm}>Login</a></p>
                        </div>
                        <div className='col-12 col-md-2 col-sm-2 col-lg-2 col-xl-2'></div>
                    </div>
                </>
            )}
            <div>
                <div className="d-flex align-items-center my-1 m-auto" style={{ maxWidth: "400px", color: "#7C7C7C", opacity: "0.75" }}>
                    <hr className="flex-grow-1" />
                    <span className="mx-2">or</span>
                    <hr className="flex-grow-1" />
                </div>
                <div className='d-flex p-2 px-2 m-auto' style={{ maxWidth: "400px", border: "1px solid #484848", borderRadius: "2px", opacity: " 0.7" }}>
                    <img
                        src={GoogleIcon}
                        className="card-img-top"
                        alt="Product Image"
                        style={{ objectFit: "cover", width: "20px", height: "20px" }}
                    />
                    <button className=" w-100 font-2 bg-transparent" style={{ opacity: "1", fontWeight: "600", color: "#484848" }}>
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function LoginForm() {
    return (
        <BusinessForms />
    );
};

