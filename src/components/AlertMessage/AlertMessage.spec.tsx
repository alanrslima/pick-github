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

  it("should render a success icon", () => {
    render(<AlertMessage title="title" type="success" />);
    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByTestId("success-icon")).toBeInTheDocument();
  });

  it("should render a error icon", () => {
    render(<AlertMessage title="title" type="error" />);
    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByTestId("error-icon")).toBeInTheDocument();
  });

  it("should render a information icon", () => {
    render(<AlertMessage title="title" type="information" />);
    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByTestId("information-icon")).toBeInTheDocument();
  });
});
