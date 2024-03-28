const baseUrl = 'http://localhost:8050';
const path = '/api/todo';
const url = `${baseUrl}${path}`;

export const getAllData = async () => {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(res.statusText);
        return await res.json();
    } catch (error) {
        console.error(`Erreur lors de la récupération des données : ${error}`);
    }
}

export const getDataById = async (id) => {
    try {
        const res = await fetch(`${url}/${id}`);
        if (!res.ok) throw new Error(res.statusText);
        return await res.json();
    } catch (error) {
        console.error(`Erreur lors de la récupération des données par ID : ${error}`);
    }
}

export const createData = async (data) => {
    try {
        const res = await fetch(url, 
            {
                method: 'POST',
                body: data
            });
        if (!res.ok) throw new Error(res.statusText);
        return await res.json();
    } catch (error) {
        console.error(`Erreur lors de la création des données : ${error}`);
    }
}

export const updateData = async (id, data) => {
    try {
        const res = await fetch(`${url}/${id}`, 
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error(res.statusText);
        return await res.json();
    } catch (error) {
        console.error(`Erreur lors de la mise à jour des données : ${error}`);
    }
}

export const deleteData = async (id) => {
    try {
        const res = await fetch(`${url}/${id}`, { method: 'DELETE' });
        if (!res.ok) throw new Error(res.statusText);
        return await res.json();
    } catch (error) {
        console.error(`Erreur lors de la suppression des données : ${error}`);
    }
}