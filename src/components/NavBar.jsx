import { Link, Outlet } from "react-router-dom";
import {useAuth } from "../hooks/use-auth.js";
import LoginForm from "./LoginForm.jsx";
import "./NavBar.css";

function NavBar() {
    const {auth, setAuth} = useAuth();

    const handleLogout = () => {
        window.localStorage.removeItem("token", "username");
        setAuth({ token: null , username:null});
    };

    console.log(auth)

    return (
        <div>
            <nav>
                <div className="nav-logo"> {" "}
                    <img src="https://i.ibb.co/N7H38XP/SEEDFUNDING.png" alt="SEEDFUNDING logo" className="logo" />
                </div>
                <div className="nav-links">
                    <Link to="/" className="nav-button">Home</Link>
                    {/* <Link to="/projects" className="nav-button"> Projects</Link> */}
                    {auth.token ? (
                        <>
                        </>
                    ) : (
                        <Link to="/signup" className="nav-button">Sign Up</Link>
                    )}
                    {auth.token ? (
                        <><Link to="/create-project" className="nav-button" >Create a Project</Link>
                        </>
                    ) : (
                        <></>
                    )}
                    {auth.token ? (
                        <>
                            <Link to="/" className="nav-button" onClick={handleLogout}>
                                Log Out
                            </Link>
                        </>
                    ) : (
                        <Link to="/login" className="nav-button">Login</Link>
                    )}
                </div>
            </nav>
            <Outlet/>
            <footer>Alisha Sharaballi | She Codes 2024 </footer>
    </div>
    )
}
export default NavBar;
