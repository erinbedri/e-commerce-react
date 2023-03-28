import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import SectionTitle from "../SectionTitle";

describe("SectionTitle", () => {
    it("should render same text passed into title prop", async () => {
        // 1) Render a component we want to test
        render(<SectionTitle title={"My Title"} />);

        // 2) Find the element we want to interact with
        const titleElement = screen.getByRole("heading", { name: "My Title" });

        // 3) Interact with those elements

        // 4) Assert that the results are as expected
        expect(titleElement).toBeInTheDocument();
    });

    it("should contain an h2 HTML element", async () => {
        render(<SectionTitle title={"My Title"} />);

        const titleElement = screen.getByText(/my title/i);

        expect(titleElement.tagName).toEqual("H2");
    });
});

/*
// findByText
it("should render same text passed into title prop (findByText)", async () => {
    render(<SectionTitle title={"My Title"} />);

    const titleElement = await screen.findByText(/my title/i);

    expect(titleElement).toBeInTheDocument;
});

// queryByText
it("should render same text passed into title prop (queryByText)", async () => {
    render(<SectionTitle title={"My Title"} />);

    const titleElement = screen.queryByText(/my false title/i);

    expect(titleElement).not.toBeInTheDocument;
});

// getAllByRole => returns an array of elements
it("should render same text passed into title prop (getAllByRole)", async () => {
    render(<SectionTitle title={"My Title"} />);

    const titleElements = screen.getAllByRole("heading");

    expect(titleElements.length).toBe(1);
});
*/
