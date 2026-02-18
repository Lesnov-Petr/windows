import { CredentialsType } from "../types/credentials";
import $api from "../http";

const apiAuth = {
  signUpQuery(user: CredentialsType) {
    return $api.post("/auth/signUp", user);
  },
  signInQuery(credentials: CredentialsType) {
    return $api.post("/auth/login", credentials);
  },
  logOutQuery() {
    return $api.post("/authUser/logout");
  },
  getCurrentUserQuery() {
    return $api.get("/authUser/current");
  },
};

export { apiAuth };
