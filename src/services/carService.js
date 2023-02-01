import * as request from "./requester";

const baseUrl = "http://localhost:3030/data/cars";

export const getAll = () => request.get(`${baseUrl}?sortBy=_createdOn%20desc}`);

export const getAllMyCars = (ownerId) =>
    request.get(`${baseUrl}?sortBy=_createdOn%20desc?distinct=${ownerId}`);

export const getOne = (carId) => request.get(`${baseUrl}/${carId}`);

export const addCar = (carData) => request.post(baseUrl, carData);

export const deleteCar = (carId) => request.del(`${baseUrl}/${carId}`);
