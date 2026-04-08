import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const registerUser = async (formData) => {
    return await axios.post(`${BASE_URL}/register`, formData);
};

export const verifyOtp = async (formData) => {
    return await axios.post(`${BASE_URL}/verify_otp`, formData);
};

export const loginUser = async (formData) => {
    return await axios.post(`${BASE_URL}/login`, formData);
};
