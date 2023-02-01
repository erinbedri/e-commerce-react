import * as request from "./requester";

const baseUrl = "http://localhost:3030/data/cars";

export const getAll = () => request.get(baseUrl);

export const getOne = (carId) => request.get(`${baseUrl}/${carId}`);

export const addCar = (carData) => request.post(baseUrl, carData);

export const deleteCar = (carId) => request.del(`${baseUrl}/${carId}`);
