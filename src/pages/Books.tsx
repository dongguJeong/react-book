import React from "react";
import styled from "styled-components";
import Title from "../components/common/Title.tsx";
import BooksFilter from "../components/books/BooksFilter.tsx";
import BooksList from "../components/books/BooksList.tsx";
import BooksEmpty from "../components/books/BooksEmpty.tsx";
import Pagination from "../components/books/Pagination.tsx";
import BooksViewSwitcher from "../components/books/BooksViewSwitcher.tsx";
import { useBooks } from "../hook/useBooks.ts";

const Books = () => {
  const { books, pagination, isEmpty } = useBooks();
  console.log(books, pagination);
  return (
    <>
      <Title size="large">도서 검색 결과</Title>
      <BookStyle>
        <div className="filter">
          <BooksFilter />
          <BooksViewSwitcher />
        </div>
        {!isEmpty && <BooksList books={books} />}
        {isEmpty && <BooksEmpty />}
        {!isEmpty && <Pagination pagination={pagination} />}
      </BookStyle>
    </>
  );
};
const BookStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
`;

export default Books;
