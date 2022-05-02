import { render } from "@testing-library/react";
import Container from "./Container";
import { screen } from "@testing-library/dom";

describe("Container Component", () => {
  it("should render a children component", () => {
    render(
      <Container>
        <h1>Hello</h1>
      </Container>
    );
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("should render a loading content", () => {
    render(
      <Container loading={true}>
        <h1>Hello</h1>
      </Container>
    );
    expect(screen.getByTestId("loading-component")).toBeInTheDocument();
    expect(screen.queryByText("Hello")).not.toBeInTheDocument();
  });

  it("should render a error message content", () => {
    render(
      <Container error={{ title: "title_error", subTitle: "subtitle_error" }}>
        <h1>Hello</h1>
      </Container>
    );
    expect(screen.getByText("title_error")).toBeInTheDocument();
    expect(screen.getByText("subtitle_error")).toBeInTheDocument();
    expect(screen.queryByText("Hello")).not.toBeInTheDocument();
  });
});
