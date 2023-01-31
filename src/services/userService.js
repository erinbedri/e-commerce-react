import * as request from "./requester";

const baseUrl = "http://localhost:3030/users/me";

export const getUser = () => request.get(baseUrl);
