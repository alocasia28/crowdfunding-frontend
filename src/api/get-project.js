async function getProject(projectId) {
    const url =`${import.meta.env.VITE_API_URL}/projects/${projectId}`;
    const response =await fetch(url,{method:"GET"});

    if (!response.ok) {
        const fallbackError =`Error fetching project with id ${projectId}`;

        const data =awaitresponse.json().catch(() =>{
            throw new Error(fallbackError);
        });

        const errorMessage = data?.detail?? fallbackError;
        throw new Error(errorMessage);
    }

    return await response.json();
}

export default getProject;