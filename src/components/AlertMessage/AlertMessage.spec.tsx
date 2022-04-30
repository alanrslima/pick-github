import { render, screen } from "@testing-library/react";
import AlertMessage from "./AlertMessage";

describe("AlertMessage Component", () => {
  it("should render a message with title and subtitle", () => {
    render(<AlertMessage title="title" subTitle="subtitle" />);
    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("subtitle")).toBeInTheDocument();
  });

  it("should render a information icon as default", () => {
    render(<AlertMessage title="title" />);
    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByTestId("information-icon")).toBeInTheDocument();
  });
});
