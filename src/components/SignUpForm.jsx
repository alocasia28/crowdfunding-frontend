import { useState } from "react";
import { useNavigate } from "react-router-dom";

import postUser from "../api/post-user";

import "./Form.css";

function SignUpForm() {
    const navigate = useNavigate();

    const [account, setAccount] = useState({
        email_address: "",
        username: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        emailError: "",
        usernameError: "",
        passwordError: "",
        generalError: "",
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setAccount((prevAccount) => ({
            ...prevAccount,
            [id]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [id + "Error"]: "",
            generalError: "",
        }));
    };

    const validateEmail = (email) => {
        // Regular expression for basic email validation
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let newErrors = {};
        if (!account.email_address) {
            newErrors.emailError = "Email is required.";
        } else if (!validateEmail(account.email_address)) {
            newErrors.emailError = "Please enter a valid email address.";
        }
        if (!account.username) {
            newErrors.usernameError = "Username is required.";
        }
        if (!account.password) {
            newErrors.passwordError = "Password is required.";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            postUser(
                account.username,
                account.password,
                account.email_address
            )
                .then((response) => {
                    navigate("/");
                })
                .catch((error) => { //Struggling to make this work when the user already exists. It's only giving me the general error. 
                    if (error.response && error.response.status === 400) {
                        setErrors({
                            ...newErrors,
                            generalError: "This user already exists.",
                        });
                    } else {
                        setErrors({
                            ...newErrors,
                            generalError: "An error occurred. Please try again.",
                        });
                    }
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
                {errors.emailError && (
                    <p className="error-message">{errors.emailError}</p>
                )}
            </div>
            <div className="form-fields">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Enter username"
                    onChange={handleChange}
                />
                {errors.usernameError && (
                    <p className="error-message">{errors.usernameError}</p>
                )}
            </div>
            <div className="form-fields">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
                {errors.passwordError && (
                    <p className="error-message">{errors.passwordError}</p>
                )}
            </div>
            {errors.generalError && (
                <p className="error-message">{errors.generalError}</p>
            )}
            <button type="submit" onClick={handleSubmit}>
                Create Account
            </button>
        </form>
    );
}

export default SignUpForm;
