import axios from "axios";

export default axios.create({
  baseURL: "http://20.66.98.17:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});