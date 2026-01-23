// retreives all info from the api

const API = import.meta.env.VITE_API;

// all faculty details

export async function getFaculty() {
    try {
        const response = await fetch(
            API + "/professors"
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return [];
    }

    }


export async function getFacultyId(id) {
    try {
        const response = await fetch(API + "/professors/" + id);
        const result = await response.json();
        return result;
    } catch (e) {
        console.error(e);
        return null;
    }
}

//all department info

export async function getDepartments() {
    try {
        const response = await fetch(
            API + "/departments");
        const result = await response.json();
        return result;
    } catch (e) {
        console.error(e);
        return [];
    };
}

export async function getDepaertmentId(id) {
    try {
        const response = await fetch(API + "/departments/" + id);
        const result = await response.json();
        return result;
    } catch (e) {
        console.error(e);
        return null;
    }
}

//returns account details to be rendered in a logged in account

export async function accountDetails(token) {
    if (!token) {
        throw Error("you must be signed in to view details of your account");
    }
    const response = await fetch(API + "/users/me", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    });
    if (!response.ok) {
        const result = await response.json();
        throw Error(result.message);
    }
    return await response.json();
}
