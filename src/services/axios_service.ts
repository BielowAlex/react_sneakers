import axios from "axios";
import {baseURL} from "../constants";

// const baseURL = 'https://bielowalex.github.io/portfolio'

const axiosService = axios.create({baseURL});

export {
    axiosService
}