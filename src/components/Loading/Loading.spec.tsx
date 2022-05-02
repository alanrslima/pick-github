import { render } from "@testing-library/react";
import Loading from "./Loading";
import { screen } from "@testing-library/dom";

describe("Loading Component", () => {
  it("should render a loading component", () => {
    render(<Loading />);
    expect(screen.getByTestId("loading-component")).toBeInTheDocument();
  });
});
