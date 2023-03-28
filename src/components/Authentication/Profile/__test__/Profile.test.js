import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import Profile from "../Profile";

describe("Profile", () => {
    it("should render component", async () => {
        render(<Profile />);
        const profileElement = await screen.findByTestId("profile-div");
        expect(profileElement).toBeInTheDocument();
    });

    it("should have children count of 5", async () => {
        render(<Profile />);
        const profileElement = await screen.findByTestId("profile-div");
        expect(profileElement.childElementCount).toBe(5);
    });

    it("should have first child of icon", async () => {
        render(<Profile />);
        const profileElement = await screen.findByTestId("profile-div");
        expect(profileElement.firstChild).toContainHTML("i");
    });

    it("should render correct first name", async () => {
        render(<Profile />);
        const profileElement = await screen.findByTestId("profile-div");
        expect(profileElement.children.item(1).textContent).toBe("First Name: John");
    });

    it("should render correct last name", async () => {
        render(<Profile />);
        const profileElement = await screen.findByTestId("profile-div");
        expect(profileElement.children.item(2).textContent).toBe("Last Name: Doe");
    });

    it("should render correct email", async () => {
        render(<Profile />);
        const profileElement = await screen.findByTestId("profile-div");
        expect(profileElement.children.item(3).textContent).toBe("Email: test@abv.bg");
    });

    it("should render correct telephone number", async () => {
        render(<Profile />);
        const profileElement = await screen.findByTestId("profile-div");
        expect(profileElement.children.item(4).textContent).toBe("Telephone Number: 00359123654");
    });
});
