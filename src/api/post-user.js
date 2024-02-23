async function postUser(username, password, email_address) {
    const url =`${import.meta.env.VITE_API_URL}/users/`;
    const response =await fetch(url, {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            "email_address": email_address,
            "username": username,
            "password": password,
        }),
    });

    if (!response.ok) {
        const fallbackError = `This user exists`;

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });

        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }

    return await response.json();
}

export default postUser;