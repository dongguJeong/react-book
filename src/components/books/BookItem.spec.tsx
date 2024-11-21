import "@testing-library/jest-dom";
import React from "react";
import { getByAltText, render, screen } from "@testing-library/react";
import BookItem from "./BookItem";
import { BookStoreThemeProvider } from "../../context/themeContext";
import { Book } from "@/models/book.model";

const dummyBooks: Book = {
  id: 1,
  title: "The Art of Programming",
  form: "Hardcover",
  isbn: "978-3-16-148410-0",
  summary: "A comprehensive guide to programming concepts.",
  detail:
    "This book covers various programming techniques and algorithms for both beginners and experienced developers.",
  author: "John Doe",
  pages: 550,
  contents:
    "Introduction, Basics of Programming, Advanced Techniques, Algorithms, Final Thoughts",
  price: 39900,
  pubDate: "2022-05-15",
  category_id: 1,
  img: 1,
  likes: 120,
};

describe("BookItem Test", () => {
  it("렌더 여부", () => {
    const { getByText } = render(
      <BookStoreThemeProvider>
        <BookItem book={dummyBooks} />
      </BookStoreThemeProvider>
    );
    expect(screen.getByText(dummyBooks.title)).toBeInTheDocument();
    expect(screen.getByText(dummyBooks.summary)).toBeInTheDocument();
    expect(screen.getByText(dummyBooks.author)).toBeInTheDocument();
    // expect(getByAltText(dummyBooks.title)).toHaveAttribute(
    //   "src",
    //   `https://picsum.photos/id/${dummyBooks.img}/600/600`
    // );
  });
});
