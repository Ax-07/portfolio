const serverHost = `${import.meta.env.VITE_REACT_APP_API_URL}`;

export const convertPicture = async (form_data) => {
    try {
        const response = await fetch(`${serverHost}/api/convert`, {
            method: 'POST',
            body: form_data,
        });
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Erreur lors de la conversion de l\'image');
        }
    } catch (error) {
        throw new Error('Erreur lors de la conversion de l\'image');
    }
};