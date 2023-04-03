import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { AuthContext } from "../../../../contexts/AuthContext";
import * as authService from "../../../../services/authService";
import Register from "../Register";

describe("Register", () => {
    beforeEach(() => {
        const auth = {};
        const userLogin = jest.fn();
        const userLogout = jest.fn();

        render(
            <MemoryRouter>
                <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
                    <Register />
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

    it("should render first name input element", async () => {
        expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    });

    it("should render first name input with correct user input", async () => {
        fireEvent.change(screen.getByLabelText(/first name/i), {
            target: { value: "Ivan" },
        });

        await waitFor(() => {
            expect(screen.getByLabelText(/first name/i)).toHaveValue("Ivan");
        });
    });

    it("should render last name input element", async () => {
        expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    });

    it("should render last name input with correct user input", async () => {
        fireEvent.change(screen.getByLabelText(/last name/i), {
            target: { value: "Ivanov" },
        });

        await waitFor(() => {
            expect(screen.getByLabelText(/last name/i)).toHaveValue("Ivanov");
        });
    });

    it("should render telephone number input element", async () => {
        expect(screen.getByLabelText(/telephone number/i)).toBeInTheDocument();
    });

    it("should render telephone number input with correct user input", async () => {
        fireEvent.change(screen.getByLabelText(/telephone number/i), {
            target: { value: "0049123456" },
        });

        await waitFor(() => {
            expect(screen.getByLabelText(/telephone number/i)).toHaveValue("0049123456");
        });
    });

    it("should render password input element", async () => {
        expect(screen.getByLabelText("Password")).toBeInTheDocument();
    });

    it("should render password input with correct user input", async () => {
        fireEvent.change(screen.getByLabelText("Password"), {
            target: { value: "123456" },
        });

        await waitFor(() => {
            expect(screen.getByLabelText("Password")).toHaveValue("123456");
        });
    });

    it("should render confirm password input element", async () => {
        expect(screen.getByLabelText("Confirm Password")).toBeInTheDocument();
    });

    it("should render confirm password input with correct user input", async () => {
        fireEvent.change(screen.getByLabelText("Confirm Password"), {
            target: { value: "123456" },
        });

        await waitFor(() => {
            expect(screen.getByLabelText("Confirm Password")).toHaveValue("123456");
        });
    });

    it("should render register button", async () => {
        expect(screen.getByRole("button", { name: "Register" })).toBeInTheDocument();
    });

    it("should render link to sign up page", async () => {
        expect(screen.getByRole("link").textContent).toEqual("Sign in");
        expect(screen.getByRole("link").href).toContain("/login");
    });

    it("should display error message on failed register when password is less than 6 characters", async () => {
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "test@test.com" } });
        fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: "Ivan" } });
        fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: "Ivanov" } });
        fireEvent.change(screen.getByLabelText(/telephone number/i), { target: { value: "0049123456" } });

        fireEvent.change(screen.getByLabelText("Password"), { target: { value: "123" } });
        fireEvent.change(screen.getByLabelText("Confirm Password"), { target: { value: "123" } });
        fireEvent.click(screen.getByRole("button", { name: "Register" }));

        await waitFor(() => {
            expect(screen.getByText(/password must be at least 6 characters!/i)).toBeInTheDocument();
        });
    });

    it("should display error message on failed register when passwords do not match", async () => {
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "test@test.com" } });
        fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: "Ivan" } });
        fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: "Ivanov" } });
        fireEvent.change(screen.getByLabelText(/telephone number/i), { target: { value: "0049123456" } });

        fireEvent.change(screen.getByLabelText("Password"), { target: { value: "123456" } });
        fireEvent.change(screen.getByLabelText("Confirm Password"), { target: { value: "123" } });
        fireEvent.click(screen.getByRole("button", { name: "Register" }));

        await waitFor(() => {
            expect(screen.getByText(/Passwords do not match!/i)).toBeInTheDocument();
        });
    });

    it("should disable register button when email input is missing", async () => {
        fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: "Ivan" } });
        fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: "Ivanov" } });
        fireEvent.change(screen.getByLabelText(/telephone number/i), { target: { value: "0049123456" } });

        fireEvent.change(screen.getByLabelText("Password"), { target: { value: "123456" } });
        fireEvent.change(screen.getByLabelText("Confirm Password"), { target: { value: "123456" } });

        await waitFor(() => {
            expect(screen.getByLabelText(/email/i).value).toBe("");
            expect(screen.getByRole("button", { name: "Register" })).toHaveAttribute("disabled");
        });
    });

    it("should disable register button when first name input is missing", async () => {
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "test@test.com" } });
        fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: "Ivanov" } });
        fireEvent.change(screen.getByLabelText(/telephone number/i), { target: { value: "0049123456" } });

        fireEvent.change(screen.getByLabelText("Password"), { target: { value: "123456" } });
        fireEvent.change(screen.getByLabelText("Confirm Password"), { target: { value: "123456" } });

        await waitFor(() => {
            expect(screen.getByLabelText(/first name/i).value).toBe("");
            expect(screen.getByRole("button", { name: "Register" })).toHaveAttribute("disabled");
        });
    });

    it("should disable register button when last name input is missing", async () => {
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "test@test.com" } });
        fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: "Ivan" } });
        fireEvent.change(screen.getByLabelText(/telephone number/i), { target: { value: "0049123456" } });

        fireEvent.change(screen.getByLabelText("Password"), { target: { value: "123456" } });
        fireEvent.change(screen.getByLabelText("Confirm Password"), { target: { value: "123456" } });

        await waitFor(() => {
            expect(screen.getByLabelText(/last name/i).value).toBe("");
            expect(screen.getByRole("button", { name: "Register" })).toHaveAttribute("disabled");
        });
    });

    it("should disable register button when telephone number input is missing", async () => {
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "test@test.com" } });
        fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: "Ivan" } });
        fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: "Ivanov" } });

        fireEvent.change(screen.getByLabelText("Password"), { target: { value: "123456" } });
        fireEvent.change(screen.getByLabelText("Confirm Password"), { target: { value: "123456" } });

        await waitFor(() => {
            expect(screen.getByLabelText(/telephone number/i).value).toBe("");
            expect(screen.getByRole("button", { name: "Register" })).toHaveAttribute("disabled");
        });
    });

    it("should disable register button when password input is missing", async () => {
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "test@test.com" } });
        fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: "Ivan" } });
        fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: "Ivanov" } });
        fireEvent.change(screen.getByLabelText(/telephone number/i), { target: { value: "0049123456" } });

        fireEvent.change(screen.getByLabelText("Confirm Password"), { target: { value: "123456" } });

        await waitFor(() => {
            expect(screen.getByLabelText("Password").value).toBe("");
            expect(screen.getByRole("button", { name: "Register" })).toHaveAttribute("disabled");
        });
    });

    it("should disable register button when confirm password input is missing", async () => {
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "test@test.com" } });
        fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: "Ivan" } });
        fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: "Ivanov" } });
        fireEvent.change(screen.getByLabelText(/telephone number/i), { target: { value: "0049123456" } });

        fireEvent.change(screen.getByLabelText("Password"), { target: { value: "123456" } });

        await waitFor(() => {
            expect(screen.getByLabelText("Confirm Password").value).toBe("");
            expect(screen.getByRole("button", { name: "Register" })).toHaveAttribute("disabled");
        });
    });

    it("should call register with authentication object on successful registration", async () => {
        const authData = {
            email: "ivan@abv.bg",
            password: "123456",
            fName: "Ivan",
            lName: "Ivanov",
            telNumber: "0049123456",
        };

        const registerMock = jest.spyOn(authService, "register");
        registerMock.mockResolvedValueOnce(authData);

        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "ivan@abv.bg" } });
        fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: "Ivan" } });
        fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: "Ivanov" } });
        fireEvent.change(screen.getByLabelText(/telephone number/i), {
            target: { value: "0049123456" },
        });
        fireEvent.change(screen.getByLabelText("Password"), { target: { value: "123456" } });
        fireEvent.change(screen.getByLabelText("Confirm Password"), { target: { value: "123456" } });
        fireEvent.click(screen.getByRole("button", { name: "Register" }));

        await waitFor(() =>
            expect(registerMock).toHaveBeenCalledWith("ivan@abv.bg", "123456", "Ivan", "Ivanov", "0049123456")
        );
    });
});
