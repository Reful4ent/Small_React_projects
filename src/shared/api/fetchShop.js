import axios from "axios";


export const fetchAllItems = async () => {
    try{
        const response = await axios.get("https://api.escuelajs.co/api/v1/products");
        const result = JSON.parse(response.request.response);
        return result ? result : null;
    } catch (error) {
        console.error(error)
        return null;
    }
    /*try{
        const url = "https://api.escuelajs.co/api/v1/products";
        const response = await fetch(url);
        const items = await response.json();

        return items ? items : null;
    } catch (error) {
        return null;
    }*/
}