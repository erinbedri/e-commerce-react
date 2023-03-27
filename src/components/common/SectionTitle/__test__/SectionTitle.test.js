import { render, screen } from "@testing-library/react";
import SectionTitle from "../SectionTitle";

it("should render same text passed into title prop", async () => {
    // 1) Render a component we want to test
    render(<SectionTitle title={"My Title"} />);

    // 2) Find the element we want to interact with
    const titleElement = screen.getByRole("heading", { name: "My Title" });

    // 3) Interact with those elements

    // 4) Assert that the results are as expected
    expect(titleElement).toBeInTheDocument;
});
