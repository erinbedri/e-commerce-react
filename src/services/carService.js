import * as request from "./requester";

const baseUrl = "http://localhost:3030/data/cars";

export const getCollectionSize = () => request.get(`${baseUrl}/?count`);

export const getAll = (searchParam, sortBy, orderBy, offset, pageSize) =>
    request.get(
        `${baseUrl}` +
            `?where=` +
            `manufacturer%20like%20%22${searchParam}%22%20OR%20` +
            `model%20like%20%22${searchParam}%22%20OR%20` +
            `category%20like%20%22${searchParam}%22%20OR%20` +
            `location%20like%20%22${searchParam}%22` +
            `&sortBy=${sortBy}${orderBy}` +
            `&offset=${offset}` +
            `&pageSize=${pageSize}`
    );

export const getAllMyCars = () => request.get(`${baseUrl}`);

export const getOne = (carId) => request.get(`${baseUrl}/${carId}`);

export const addCar = (carData) => request.post(baseUrl, carData);

export const editCar = (carId, carData) => request.put(`${baseUrl}/${carId}`, carData);

export const deleteCar = (carId) => request.del(`${baseUrl}/${carId}`);
