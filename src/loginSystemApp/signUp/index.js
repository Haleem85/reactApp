import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from "../userSlice";
import { emailInputIcon, passwordInputIcon, userInputIcon } from './icons';
// import R$
import "./signup.css";

var image = require("./login-rounded-right.png");

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const nameChange = (e) => {
        return setName(e.target.value);
    };
    const emailChange = (e) => {
        return setEmail(e.target.value);
    };
    const passwordChange = (e) => {
        return setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({
            name: name,
            email: email,
            password: password,
            loggedIn: true
        }));
    };
    return (
        <div className="login_container">
            <h1 id="heading1"> SignUp Here </h1>
            <img className="img"
                src={ image } />
            <form className="myForm" onSubmit={ handleSubmit } >
                <div className="input-container">
                    <i className={ userInputIcon }> </i>
                    <input className="input-field"
                        type="name"
                        placeholder="Name"
                        value={ name }
                        onChange={ nameChange } />
                </div>
                <div className="input-container">
                    <i className={ emailInputIcon }> </i>
                    <input className="input-field"
                        type="email"
                        placeholder="Email"
                        value={ email }
                        onChange={ emailChange } />
                </div>
                <div className="input-container">
                    <i className={ passwordInputIcon }> </i>
                    <input className="input-field"
                        type="password"
                        placeholder="Password"
                        value={ password }
                        onChange={ passwordChange } />
                </div>
                <div><input type="submit" class="btn" /></div>
            </form>

        </div>

    );
};

export default SignUp;