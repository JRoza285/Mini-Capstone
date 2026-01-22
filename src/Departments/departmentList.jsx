// retreives a list of departments

import { Link } from "react-router";

export default function DepartmentList({ department }) {
    return (
        <ul>
            {department.map((department) => (
                <DepartmentListItem key={department.id} department={department} />
            ))}
        </ul>
    );
}

function BookListItem({ department }) {