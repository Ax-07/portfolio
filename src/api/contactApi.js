const serverHost = `${import.meta.env.VITE_REACT_APP_API_URL}`;

export const sendContact = async (form_data) => {
    console.log(form_data);
    try {
        const response = await fetch(`${serverHost}/api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form_data),
        });
        if (response.ok) {
            console.log(response);
            return response.json();
        } else {
            console.log(response);
            throw new Error('Erreur lors de l\'envoi du message');
        }
    } catch (error) {
        console.log(error);
        throw new Error('Erreur lors de l\'envoi du message');
    }
};