//Create a function that can be imported for CRUD Operations

// javascript can set default values for paremeters.
const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
    try {
        const response = await fetch(url, optionsObj); // The optionsObj determines if the request is create, update, or destroy.
        if (!response.ok) throw Error("Invalid. Reload App");
    } catch (error) {
        errMsg = error.message;
    } finally {
        return errMsg; // Return error, regardless if null.
    }
}

// need to export, like with components
export default apiRequest;