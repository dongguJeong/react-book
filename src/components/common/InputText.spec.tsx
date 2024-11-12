import React from "react";
import { render, screen } from "@testing-library/react";
import { BookStoreThemeProvider } from "../../context/themeContext.tsx";
import "@testing-library/jest-dom";
import InputText from "./InputText.tsx";

describe("Title 컴포넌트 테스트", () => {
  it("렌더를 확인합니다", () => {
    render(
      <BookStoreThemeProvider>
        <InputText placeholder="여기에 입력" />
      </BookStoreThemeProvider>
    );
    expect(screen.getByPlaceholderText("여기에 입력")).toBeInTheDocument();
  });

  it("forwardRef", () => {
    const ref = React.createRef<HTMLInputElement>();
    const { container } = render(
      <BookStoreThemeProvider>
        <InputText placeholder="여기에 입력" ref={ref} />
      </BookStoreThemeProvider>
    );

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
