import { useEffect, useState } from "react";
import { getDepartments } from "../api/Details";
import DepartmentList from "./DepartmentList";

export default function DepartmentLibrary() {
    const [departments, setDepartments] = useState([]);
    const syncDepartments = async () => {
        const data = await getDepartments();
        setDepartments(data);
    };

    useEffect(() => {
        syncDepartments();
    }, []);

    return (
        <>
        <h1>Department Library</h1>
        <DepartmentList departments={departments} />
        {syncDepartments}
        </>
    );
}