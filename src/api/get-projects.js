async function getProjects() {
    const url =`${import.meta.env.VITE_API_URL}/projects`;

    const response =await fetch (url,{method:"GET"});

    if (!response.ok) {
        const fallbackError ="Error fetching projects";

        // const data = await response.json().catch(() => {
        // // If the response is not JSON then we will throw a generic error.`catch` will trigger if we try to turn `response` into JSON and fail
        // throw new Error(fallbackError);
        // });

    // If the error response *is* JSON, then we will include the info from
    //that JSON in the error we throw.
    // Usually, the server will send the error message in the `detail`property.
    // You may have not configured the back end to use the `detail` property.
    // If that is the case then you can change the code below to use a differentproperty, e.g.: `message`

        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
}

//...on the other hand, if the request was succesfful, then we will return the data from the response. 
//Turning the response to JSON takes time so we need to use the await keyword again. 
    return await response.json();
}

export default getProjects;
