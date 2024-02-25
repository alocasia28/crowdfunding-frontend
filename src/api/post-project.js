async function postProject(title, description, goal, image, is_open, date_created) {
    const url =`${import.meta.env.VITE_API_URL}/projects/`;
    const token =window.localStorage.getItem("token")
    const response = await fetch (url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            'Authorization': `Token ${token}`
    },
    body:JSON.stringify({
        "title": title,
        "description": description,
        "goal": goal,
        "image": image,
        "is_open": is_open,
        "date_created": new Date().toISOString()

    }),
});

if (!response.ok) {
    const fallbackError =`Could not create project`;
    const data = await response.json().catch(() => {
        throw new Error(fallbackError);
    });

    const errorMessage = data?.detail?? fallbackError;
    throw new Error(errorMessage);
}

return await response.json();
};
export default postProject;


