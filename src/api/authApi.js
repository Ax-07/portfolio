const serverHost = 'http://localhost:8050';

export const login = async (form_data) => {
    try {
        const response = await fetch(`${serverHost}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include', // Obligatoire pour envoyer les cookies
            body: JSON.stringify(form_data),
        });
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Erreur lors de la connexion');
        }
    } catch (error) {
        throw new Error('Erreur lors de la connexion');
    }
}

export const logout = async () => {
    try {
        const response = await fetch(`${serverHost}/api/auth/logout`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Erreur lors de la déconnexion');
        }
    } catch (error) {
        throw new Error('Erreur lors de la déconnexion');
    }
}