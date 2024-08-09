


export const fetchAllItems = async () => {
    try{
        const url = "https://api.escuelajs.co/api/v1/products";
        const response = await fetch(url);
        const items = await response.json();

        return items ? items : null;
    } catch (error) {
        return null;
    }
}