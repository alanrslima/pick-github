import { render } from "@testing-library/react";
import LabelItem from "./LabelItem";
import { AiFillAlert } from "react-icons/ai";
import { screen } from "@testing-library/dom";

describe("LabelItem Component", () => {
  it("should render a label with icon", () => {
    render(
      <LabelItem
        Icon={() => <AiFillAlert data-testid="alert-icon" />}
        label="label"
      />
    );
    expect(screen.getByText("label")).toBeInTheDocument();
    expect(screen.getByTestId("alert-icon")).toBeInTheDocument();
  });

  it("should render a label with link", () => {
    render(
      <LabelItem
        Icon={() => <AiFillAlert data-testid="alert-icon" />}
        label="www.google.com"
        link
      />
    );
    expect(screen.getByText("www.google.com")).toBeInTheDocument();
    expect(screen.getByTestId("alert-icon")).toBeInTheDocument();
    expect(screen.getByRole("link")).toBeInTheDocument();
  });
});
