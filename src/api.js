import axios from "axios";

const BASE_URL = "http://localhost/ent-react/server-wp/wp-json/wp/v2";
const [responseData,setResponseData]=setState('');

export const fetchPosts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/posts`);
        return response.data;
        setResponseData(response.data);
        
        console.log(responseData);
        
        
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
};

export const fetchPages = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/pages`);
        return response.data;
    } catch (error) {
        console.error("Error fetching pages:", error);
        return [];
    }
};
