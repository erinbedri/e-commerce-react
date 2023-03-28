const mockResponseEmpty = {};
const mockResponseData = {
    "2d9a9e4e-848d-4fc7-89dc-1c6b8a43a085": {
        _ownerId: "847ec027-f659-4086-8032-5173e2f9c93a",
        likedCar: "1d9a9e4e-848d-4fc7-89dc-1c6b8a43a085",
        _createdOn: 1617194128618,
    },
    "4d9a9e4e-848d-4fc7-89dc-1c6b8a43a083": {
        _ownerId: "847ec027-f659-4086-8032-5173e2f9c93a",
        likedCar: "7f1e8g4d-2d6g-5bc8-b9f9-6g7d8e3fdf1f",
        _createdOn: 1617194128618,
    },
};

export default {
    getAllLikes: jest.fn().mockResolvedValueOnce(mockResponseEmpty),
};
