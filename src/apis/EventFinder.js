import axios from "axios";
// Set up data fetching API
export default axios.create({
    baseURL: "http://localhost:3006/api/v1/events"
});
