import React from 'react';

import './LoginSignUp.css';
import MyBackgroundImage from './cdmBack.png'; // Tama dahil magkatabi lang sila
import Cdm from './cdmm.png';


// 🚨 REMOVED: Walang imports para sa mga image files

// (backgroundImage, logoImage, googleIcon ay inalis)



const LoginSignUp = () => {

    const handleLogin = (e) => {

        e.preventDefault(); // Pinipigilan ang default form submission (page refresh)

        console.log('Login form submitted!');

        // Dito mo ilalagay ang logic para i-verify ang user credentials

    };



    return (

       <div className="login-wrapper"
        style={{
            // Lahat ng CSS properties ay nasa LOOB ng style={{...}}
            backgroundImage: `url(${MyBackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            padding: '2rem',
        }}
    >
            <div

                className="background-container"

                // Inalis ang backgroundImage: url(${backgroundImage})

                // Pwedeng maglagay ng default background color dito

                // style={{ backgroundColor: '#e0e0e0' }} // Halimbawa lang

            ></div>



            {/* Main Content */}

            <div className="container">

               {/* 👈 DITO NAKALAGAY ANG LOGO */}
            <div className="logo-area">
                <img 
                    src={Cdm} 
                    alt="Colegio de Montalban Logo" 
                    className="logo-image" 
                />
            </div>

             



                {/* Login Form Card */}

                <div className="login-card">

                    <h2>Please login!</h2>

                    <p>Access your student progress dashboard</p>



                    <form onSubmit={handleLogin}>

                        {/* Email Field */}

                        <div className="form-group">

                            <label htmlFor="email">Email Address</label>

                            <input

                                type="email"

                                id="email"

                                name="email"

                                placeholder="Enter your email"

                                required

                            />

                        </div>



                        {/* Password Field */}

                        <div className="form-group">

                            <label htmlFor="password">Password</label>

                            <input

                                type="password"

                                id="password"

                                name="password"

                                placeholder="Enter your password"

                                required

                            />

                        </div>



                        {/* Options Row */}

                        <div className="options-row">

                            <div className="remember-me">

                                <input type="checkbox" id="remember" name="remember" />

                                <label htmlFor="remember">Remember me</label>

                            </div>

                            <div className="forgot-password">

                                <a href="/forgot-password">Forgot password?</a>

                            </div>

                        </div>



                        {/* Login Button */}

                        <button type="submit" className="login-btn">

                            Login

                        </button>

                    </form>



                    {/* Separator */}

                    <div className="separator">Or continue with</div>



                    {/* Google Sign-in Button */}

                    <button className="google-btn">

                        {/* 🚨 REMOVED: Inalis ang <img> tag para sa Google icon */}

                        Sign in with Google

                    </button>



                    {/* Sign-up Area */}

                    <div className="signup-area">

                        <p>Don't have an account?</p>

                        <a href="/signup">Sign up</a>

                    </div>

                </div>

            </div>

        </div>

    );

};



export default LoginSignUp;