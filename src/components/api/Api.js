import axios from "axios";

const BASE_URL = "http://104.131.65.61:8000/"

const $api = axios.create({
  baseURL: BASE_URL
})

export default $api