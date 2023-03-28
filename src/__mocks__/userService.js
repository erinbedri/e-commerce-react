const mockResponse = {
    email: "test@abv.bg",
    fname: "John",
    lname: "Doe",
    telNumber: "00359123654",
};

export default {
    getUser: jest.fn().mockResolvedValue(mockResponse),
};
