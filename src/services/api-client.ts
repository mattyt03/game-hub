import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e47129ac7ea34c0fafd8e5557edcde01',
    }
});