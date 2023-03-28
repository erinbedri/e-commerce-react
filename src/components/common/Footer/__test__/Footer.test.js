import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import Footer from "../Footer";

describe("Footer", () => {
    it("should render right text", async () => {
        render(<Footer />);

        const footerElement = screen.getByRole("contentinfo");

        expect(footerElement).toHaveTextContent("© 2023 Cars");
    });

    it("should have right className prop", async () => {
        render(<Footer />);

        const footerElement = screen.getByRole("contentinfo");

        expect(footerElement.className).toBe("container");
    });

    it("should have div as child", async () => {
        render(<Footer />);

        const footerElement = screen.getByRole("contentinfo");

        expect(footerElement.firstChild).toContainHTML("div");
    });

    it("should have div as child with right className", async () => {
        render(<Footer />);

        const footerElement = screen.getByRole("contentinfo");
        const childElement = footerElement.querySelector("div");

        expect(childElement.className).toBe("footer-wrapper");
    });
});
