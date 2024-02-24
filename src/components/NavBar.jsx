import { Link, Outlet } from "react-router-dom";
import {useAuth } from "../hooks/use-auth.js";
import LoginForm from "./LoginForm.jsx";
import "./NavBar.css";

function NavBar() {
    const {auth, setAuth} = useAuth();

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setAuth({ token: null });
    };

    console.log(auth)

    return (
        <div>
            <ul>
                <nav>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>{auth.token ? (
                        <>
                            <span>Welcome User </span>
                            <br></br>
                            <Link to="/" onClick={handleLogout}>
                                Log Out
                            </Link>
                        </>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                    </li>
                    
                    
                    <li>{auth.token ? (
                        <>
                        </>
                    ) : (
                        <Link to="/signup">Create an Account</Link>
                    )}
                    </li>
                </nav>
                <Outlet/>
                {/* apparently this is where I can add a footer */}
            </ul>
        </div>
    )
}
export default NavBar;
