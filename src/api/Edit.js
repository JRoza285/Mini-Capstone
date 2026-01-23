const API = import.meta.env.VITE_API;

// post request to update faculty details

export async function updateFacultyDetails(
    token,
    id,
    { name, email, bio, department, coverImage }
) {
    if (!token) {
        throw new Error("you must be signed in to update faculty details");
    }

    const response = await fetch(API + "/faculty/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
            name,
            email,
            bio,
            department,
            coverImage,
        }),
    });

    if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message);
    }

    return await response.json();
}


// create request to create a faculty member 

export async function createFacultyMember(
    token,
    { name, email, bio, department, coverImage }
) {
    if (!token) {
        throw new Error("you must be signed in to create a faculty member");
    }

    const response = await fetch(API + "/faculty", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
            name,
            email,
            bio,
            department,
            coverImage,
        }),
    });

    if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message);
    }

    return await response.json();
}

//delete request to remove a faculty member

export async function removeFacultyMember(token, id) {
    if (!token || token === "undefined") {
        throw new Error("You must be signed in to remove a faculty member");
    }

    const response = await fetch(API + "/faculty/" + id, {
        method: "DELETE",
        headers: {
            Authorization: "Bearer " + token,
        },
    });

    if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.message || "Error removing faculty member");
    }

    return true;
}


// post request to update department details

export async function updateDepartmentDetails(token, id, {
    name,
    description,
    phone,
}) {
    if (!token) {
        throw new Error("you must be signed in to update department details");
    }

    const response = await fetch(API + "/department/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
            name,
            description,
            phone,
        }),
    });

    if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.message || "Error updating department");
    }

    return await response.json();
}
    
// create request to create a department

export async function createDepartment(token, { name, description, phone }) {
    if (!token) {
        throw new Error("you must be signed in to create a department");
    }

    const response = await fetch(API + "/department", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
            name,
            description,
            phone,
        }),
    });

    if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.message || "Error creating department");
    }

    return await response.json();
}

//delete request to remove a department

export async function removeDepartment(token, id) {
    if (!token || token === "undefined") {
        throw new Error("You must be signed in to remove a department");
    }

    const response = await fetch(API + "/department/" + id, {
        method: "DELETE",
        headers: {
            Authorization: "Bearer " + token,
        },
    });

    if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.message || "Error removing department");
    }

    return true;
}