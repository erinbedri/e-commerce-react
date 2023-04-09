import * as request from "./requester";

const baseUrlCars = "http://localhost:3030/data/cars";
const baseUrlLikes = "http://localhost:3030/data/likes";

export const getAllLikes = (ownerId) => request.get(`${baseUrlLikes}?where=_ownerId%3D%22${ownerId}%22`);
export const getAllLikesByCarId = (carId) => request.get(`${baseUrlLikes}?where=likedCar%3D%22${carId}%22`);

export const addLike = (likeData) => request.post(`${baseUrlLikes}`, likeData);

export const deleteLike = (likeId) => request.del(`${baseUrlLikes}/${likeId}`);

export const getCollectionSize = () => request.get(`${baseUrlCars}/?count`);

export const getAll = (searchParam, sortBy, orderBy, offset, pageSize) =>
    request.get(
        `${baseUrlCars}` +
            `?where=` +
            `manufacturer%20like%20%22${searchParam}%22%20OR%20` +
            `model%20like%20%22${searchParam}%22%20OR%20` +
            `category%20like%20%22${searchParam}%22%20OR%20` +
            `location%20like%20%22${searchParam}%22` +
            `&sortBy=${sortBy}${orderBy}` +
            `&offset=${offset}` +
            `&pageSize=${pageSize}`
    );

export const getAllMyCars = () => request.get(`${baseUrlCars}`);

export const getOne = (carId) => request.get(`${baseUrlCars}/${carId}`);

export const addCar = (carData) => request.post(baseUrlCars, carData);

export const editCar = (carId, carData) => request.put(`${baseUrlCars}/${carId}`, carData);

export const deleteCar = (carId) => request.del(`${baseUrlCars}/${carId}`);
