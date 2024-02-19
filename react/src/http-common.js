import axios from "axios";

export default axios.create({
  baseURL: "http://20.66.98.62:8000/",
  headers: {
    "Content-type": "application/json"
  }
});