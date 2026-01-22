// displays a list of faculty members from the database

import { Link } from "react-router";

export default function FacultyList({ faculty }) {
    return (
        <ul>
            {faculty.map((member) => (
                <FacultyListItem key={member.id} member={member} />
            ))}
        </ul>
    );
}

function FacultyListItem({ member }) {
    return (
        <li classname="faculty-list-item">
            {member.coverimage && (
                <img
                src={member.coverimage}
                alt={member.name}
                />
            )}
            <div classname="member-name">
                <h3>
                    <Link to={"/member/" + member.id}>{member.name}</Link>
                </h3>
            </div>
            </li>
    );
}