import axios from "axios";
import {token} from "./token.js";
import {route} from "./route.js";


export const fetchAllItems = async () => {
    try{
        const response = await axios.get(
            route +
            `/api` +
            `/products?populate=*`,
        {
            headers: {
                'Authorization': `Bearer ` + token,
            }
        });
        const result = JSON.parse(response.request.response);
        return result ? result : null;
    } catch (error) {
        console.error(error)
        return null;
    }
}

export const fetchCategories = async () => {
    try{
        const response = await axios.get(
            route +
            '/api' +
            `/categories`,
            {
                headers: {
                    'Authorization': `Bearer ` + token,
                }
            }
        )
        const result = JSON.parse(response.request.response);
        return result ? result : null;
    }  catch(error) {
        console.error(error)
        return null;
    }
}