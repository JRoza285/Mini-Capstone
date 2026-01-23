//contains the navbar with all links

import { NavLink } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";

export default function Navbar() {
    const { token, logout } = useAuth();
    return (
    <header>
        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/DepartmentLibrary">Departments</NavLink>
            <NavLink to="/FacultyLibrary">Faculty</NavLink>
            {token ? <button onClick={logout}>Log Out</button> : <NavLink to="/login">Log In</NavLink>}
        </nav>
    </header>
);

}