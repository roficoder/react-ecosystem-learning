import axios from "axios"


// REQUEST METHODS
export const getRequest = async (url: string, params = {}) => {
    try {
        const response = await axios.get(url, { params });
        return response;
    } catch (error) {
        // return errorHandler(error);
    }
};