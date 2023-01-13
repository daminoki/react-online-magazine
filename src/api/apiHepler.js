import axios from "axios";

export const apiHelper = async (method, url, body) => {
    const baseUrl = 'https://63a57933318b23efa794782b.mockapi.io';

    try {
        const data = await axios[method](`${baseUrl}/${url}`, body);
        return data;
    } catch (err) {
        alert(err);
        return null;
    }
};