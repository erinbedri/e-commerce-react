import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import * as authService from "../../../../services/authService";
import { AuthContext } from "../../../../contexts/AuthContext";
import Login from "../Login";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUsedNavigate,
}));

describe("Login", () => {
    beforeEach(() => {
        const auth = {};
        const userLogin = jest.fn();
        const userLogout = jest.fn();

        render(
            <MemoryRouter>
                <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
                    <Login />
                </AuthContext.Provider>
            </MemoryRouter>
        );
    });

    it("should render email input element", async () => {
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    });

    it("should render email input with correct user input", async () => {
        fireEvent.change(screen.getByLabelText(/email/i), {
            target: { value: "test@test.com" },
        });

        await waitFor(() => {
            expect(screen.getByLabelText(/email/i)).toHaveValue("test@test.com");
        });
    });

    it("should render password input element", async () => {
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    });

    it("should render password input with correct user input", async () => {
        fireEvent.change(screen.getByLabelText(/password/i), {
            target: { value: "123456test" },
        });

        await waitFor(() => {
            expect(screen.getByLabelText(/password/i)).toHaveValue("123456test");
        });
    });

    it("should render login button", async () => {
        expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
    });

    it("should render link to sign up page", async () => {
        expect(screen.getByRole("link").textContent).toEqual("Sign up");
        expect(screen.getByRole("link").href).toContain("/register");
    });

    it("should display error message on failed login", async () => {
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "test@test.com" } });
        fireEvent.change(screen.getByLabelText(/password/i), { target: { value: "password" } });
        fireEvent.click(screen.getByRole("button", { name: "Login" }));

        await waitFor(() => {
            expect(screen.getByText(/login or password don't match/i)).toBeInTheDocument();
        });
    });

    it("should call userLogin with authentication object on successful login", async () => {
        const authData = {
            email: "peter@abv.bg",
            password: "123456",
        };

        const loginMock = jest.spyOn(authService, "login");
        loginMock.mockResolvedValueOnce(authData);

        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "peter@abv.bg" } });
        fireEvent.change(screen.getByLabelText(/password/i), { target: { value: "123456" } });
        fireEvent.click(screen.getByRole("button", { name: "Login" }));

        await waitFor(() => expect(loginMock).toHaveBeenCalledWith("peter@abv.bg", "123456"));
    });
});
