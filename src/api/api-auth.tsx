import axios from "axios";
import { CredentialsType } from "../types/credentials";
axios.defaults.baseURL = `https://api.оконный-континент.рф`;

const apiAuth = {
  signUpQuery(user: CredentialsType) {
    return axios.post("/auth/signUp", user);
  },
  signInQuery(credentials: CredentialsType) {
    return axios.post("/auth/login", credentials);
  },
  logOutQuery() {
    return axios.post("/authUser/logout");
  },
  getCurrentUserQuery() {
    return axios.get("/authUser/current");
  },
};

export { apiAuth };
