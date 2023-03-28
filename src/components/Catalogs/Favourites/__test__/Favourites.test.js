import React, { useState } from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import Favourites from "../Favourites";
import { AuthContext } from "../../../../contexts/AuthContext";
import useLoading from "../../../../hooks/useLoading";
import { BrowserRouter } from "react-router-dom";

const user = {
    email: "test@abv.bg",
    fname: "John",
    lname: "Doe",
    telNumber: "00359123654",
    _id: "847ec027-f659-4086-8032-5173e2f9c93a",
    accessToken: "ddaf078663189015eeb9e301f8274a9761583e549b2ddb5609b35d959dbc7183",
};

const userLogin = jest.fn();
const userLogout = jest.fn();

jest.mock("../../../../hooks/useLoading", () => {
    return jest.fn(() => {
        return {
            isLoading: false,
            loading: jest.fn(),
        };
    });
});

describe("Favourites", () => {
    it("should render correct message when no cars are present in favourites", () => {
        render(
            <BrowserRouter>
                <AuthContext.Provider value={{ user: user, userLogin, userLogout }}>
                    <Favourites />
                </AuthContext.Provider>
            </BrowserRouter>
        );

        const headingElement = screen.getByRole("heading", { name: "You have no cars in your favourites list!" });
        expect(headingElement).toBeInTheDocument();
    });
});
