import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1"
const params = {
    key: 'AIzaSyA1i-Gz2ms5rEQaI5gWOakxp7XWXGpKQXw',
    cx: 'b4b508c4ab99149f8'
}
export const fetchDataFromApi = async (payload) => {
        const {data} = await axios.get(BASE_URL, {
                params: {...params, ...payload}
        });
        return data;
};
