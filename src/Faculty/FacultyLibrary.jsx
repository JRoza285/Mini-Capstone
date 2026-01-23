import { useEffect, useState } from "react";
import { getFaculty } from "../api/Details";
import FacultyList from "./FacultyList";

export default function FacultyLibrary() {
    const [faculty, setFaculty] = useState([]);
    const syncFaculty = async () => {
        const data = await getFaculty();
        setFaculty(data);
    };

    useEffect(() => {
        syncFaculty();
    }, []);

    return (
        <>
        <h1>Faculty Library</h1>
        <FacultyList faculty={faculty} />
        {syncFaculty}
        </>
    );
}