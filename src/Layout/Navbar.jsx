//contains the navbar with all links

import { NavLink } from "react-router";
import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
const {token, logout} = useAuth();
retun (
    <header>
        <p>Departments</p>
        <nav>
            <NavLink to="/DepartmentLibrary">All Departments</NavLink>
        </nav>
        <p>Faculty</p>
        <nav>
            <NavLink to="/FacultyLibrary">All Faculty</NavLink>
        </nav>

    </header>
);

}