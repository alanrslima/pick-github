import { render } from "@testing-library/react";
import Container from "./Container";
import { screen } from "@testing-library/dom";

describe("Container Component", () => {
  it("should render a children component", () => {
    const { getByText } = render(
      <Container>
        <h1>Hello</h1>
      </Container>
    );
    expect(getByText("Hello")).toBeInTheDocument();
  });

  it("should render a loading content", () => {
    const { queryByText } = render(
      <Container loading={true}>
        <h1>Hello</h1>
      </Container>
    );
    expect(screen.getByTestId("loading-component")).toBeInTheDocument();
    expect(queryByText("Hello")).not.toBeInTheDocument();
  });

  it("should render a error message content", () => {
    const { queryByText, getByText } = render(
      <Container error={{ title: "title_error", subTitle: "subtitle_error" }}>
        <h1>Hello</h1>
      </Container>
    );
    expect(getByText("title_error")).toBeInTheDocument();
    expect(getByText("subtitle_error")).toBeInTheDocument();
    expect(queryByText("Hello")).not.toBeInTheDocument();
  });
});
