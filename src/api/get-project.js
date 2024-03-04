async function getProject(projectId) {
    const url = `${import.meta.env.VITE_API_URL}/projects/${projectId}`;
    const response = await fetch(url, { method: "GET" });

    if (!response.ok) {
        if (response.status === 404) {
            throw new Error(`Oops, we couldn't find a project with id ${projectId}`);
        }

        const fallbackError = `Error fetching project with id ${projectId}`;

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });

        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }

    return await response.json();
}

export default getProject;
