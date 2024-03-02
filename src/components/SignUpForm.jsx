import { useState } from "react";
import { useNavigate } from "react-router-dom";

import postUser from "../api/post-user";

import "./Form.css";

// import useauth maybe?
function SignUpForm() {
    const navigate = useNavigate();

    const [account, setAccount] = useState({
        email_address:"",
        username:"",
        password:"",

    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setAccount((prevAccount) => ({
            ...prevAccount,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (account.email_address && account.username && account.password) {
            postUser(
                account.username, 
                account.password,
                account.email_address
            ).then((response) => {
                navigate("/");
            });
        }
    };

    return (
        <form>
            <div className="form-fields">
                <label htmlFor="email_address">Email:</label>
                <input 
                    type="text"
                    id="email_address" 
                    placeholder="Enter email"
                    onChange={handleChange}
                />      
            </div>
            <div className="form-fields">
                <label htmlFor="username">Username:</label>
                <input 
                    type="text"
                    id="username" 
                    placeholder="Enter username"
                    onChange={handleChange}
                />      
            </div>
            <div className="form-fields">
                <label htmlFor="password">Password:</label>
                <input 
                    type="password"
                    id="password" 
                    placeholder="Password"
                    onChange={handleChange} 
                    />
            </div>
            <button type="submit" onClick={handleSubmit}>
                Create Account
            </button>  
        </form>  
    );

};

export default SignUpForm;