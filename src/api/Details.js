// retreives all info from the api

const API = import.meta.env.VITE_API;

// all faculty details

export async function getFaculty() {
    try {
        const response = await fetch(
            API + "/faculty"
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
        const response = await fetch(API + "/faculty/" + id);
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
            API + "/department");
        const result = await response.json();
        return result;
    } catch (e) {
        console.error(e);
        return [];
    };
}

export async function getDepaertmentId(id)