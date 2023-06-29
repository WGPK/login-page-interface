import React from "react";
import "./loginform.css"
import logo from "./Image/logo.png"
import text from "./Image/FME.png"

const Loginform =() => {
    return(
        <div className="split-screen">
            <div class="left">
                <img src={text} alt="FME"/>
            </div>
            <div class="right">
                
                <form class="form">
                    <div class="logo">
                        <img src={logo} alt="logo"/>
                    </div>

                    <h3>Login</h3>

                    <input type="email" name="email" class="box" placeholder="E mail"/><br></br>
                    <input type="password" name="password" class="box" placeholder="Password"/>

                    <div className="login-btn">
                        <button>LOGIN</button>
                    </div>
                    
                    <p class="link">
                        <a href="#">Forget Password</a> | <a href="#">Create an account</a>
                    </p>
                    
                </form>
            </div>
            
        </div>
    )
}

export default Loginform