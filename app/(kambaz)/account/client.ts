import axios from "axios";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const api = axios.create({ baseURL: `${HTTP_SERVER}/api/users`, withCredentials: true });
export const signin = async (credentials: { username: string; password: string }) => (await api.post("/signin", credentials)).data;
export const signup = async (user: object) => (await api.post("/signup", user)).data;
export const profile = async () => (await api.get("/profile")).data;
export const signout = async () => (await api.post("/signout")).data;
export const updateUser = async (user: { _id: string }) => (await api.put(`/${user._id}`, user)).data;
export const findAllUsers = async () => (await api.get("/")).data;
