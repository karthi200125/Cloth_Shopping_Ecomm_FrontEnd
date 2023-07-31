import axios from "axios";

const BASE_URL = "https://mern-ecom-api-y5yo.onrender.com/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzM2M2YyMzRmZmZiNzNiMjI1NTI5YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MDYwMDc4MiwiZXhwIjoxNjkwODU5OTgyfQ.OUZyvlTymndNTW-1zpMfOWF_-AhijPNQXFaqPDOMSlQ"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
