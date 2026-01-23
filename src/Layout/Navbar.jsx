//contains the navbar with all links

import { NavLink } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";

export default function Navbar() {
    const { token, logout } = useAuth();
    return (
    <header>
        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/DepartmentLibrary">All Departments</NavLink>
            <NavLink to="/FacultyLibrary">All Faculty</NavLink>
            {token ? <button onClick={logout}>Log Out</button> : <NavLink to="/login">Log In</NavLink>}
        </nav>
    </header>
);

}