import { Book } from "@/models/book.model";
import React from "react";
import styled from "styled-components";
import BookBestItem from "../books/BookBestItem";

interface Props {
  books: Book[];
}

const MainBestBooks = ({ books }: Props) => {
  return (
    <MainBestBooksStyle>
      {books.map((book, index) => (
        <BookBestItem book={book} itemIndex={index} />
      ))}
    </MainBestBooksStyle>
  );
};
const MainBestBooksStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;

  @media screen AND ${({ theme }) => theme.mediaQuery.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export default MainBestBooks;
