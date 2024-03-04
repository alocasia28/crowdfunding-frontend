import { useState } from "react";
import { useNavigate } from "react-router-dom";

import postLogin from "../api/post-login";
import { useAuth } from "../hooks/use-auth.js";

import "./Form.css";

function LoginForm() {
    const navigate = useNavigate();
    const { auth, setAuth } = useAuth();

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
            postLogin(credentials.username, credentials.password)
                .then((response) => {
                    window.localStorage.setItem("token", response.token);
                    window.localStorage.setItem("username", response.username);
                    setAuth({
                        token: response.token,
                        username: response.username
                    });
                    navigate("/");
                })
                .catch((error) => {
                    setError("Invalid credentials. Please try again.");
                });
        }
    };

    return (
        <form>
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
            {error && <p className="error-message">{error}</p>}
            <button type="submit" onClick={handleSubmit}>
                Login
            </button>
        </form>
    );
}

export default LoginForm;
