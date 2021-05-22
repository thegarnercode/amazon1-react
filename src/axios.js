import axios from "axios";

const instance = axios.create({
    baseURL: 'https://localhost:5001/react-8b3d3/us-central1/api' // the API (cloud function) url
});

export default instance;