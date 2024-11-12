import React from "react";
import { render, screen } from "@testing-library/react";
import Title from "./Title.tsx";
import { BookStoreThemeProvider } from "../../context/themeContext.tsx";
import "@testing-library/jest-dom";

describe("Title 컴포넌트 테스트", () => {
  it("렌더를 확인합니다", () => {
    render(
      <BookStoreThemeProvider>
        <Title size="large">제목</Title>
      </BookStoreThemeProvider>
    );
    expect(screen.getByText("제목")).toBeInTheDocument();
  });

  it("size", () => {
    const { container } = render(
      <BookStoreThemeProvider>
        <Title size="large">제목</Title>
      </BookStoreThemeProvider>
    );

    expect(container?.firstChild).toHaveStyle({ fontSize: "2rem" });
  });

  it("color", () => {
    const { container } = render(
      <BookStoreThemeProvider>
        <Title size="large" color="primary">
          제목
        </Title>
      </BookStoreThemeProvider>
    );

    expect(container?.firstChild).toHaveStyle({ color: "brown" });
  });
});
