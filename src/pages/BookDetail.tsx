import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useBook } from "../hook/useBook.ts";
import { getImgSrc } from "../utils/image.ts";
import Title from "../components/common/Title.tsx";
import { BookDetail as IBookDetail } from "../models/book.model.ts";
import { formatDate, formatNumber } from "../utils/format.ts";
import { Link } from "react-router-dom";
import EllipsisBox from "../components/common/EllipsisBox.tsx";
import LikeButton from "../components/book/LikeButton.tsx";
import AddToCart from "../components/book/AddToCart.tsx";

const bookInfoList = [
  {
    label: "카테고리",
    key: "categoryName",
    filter: (book: IBookDetail) => (
      <Link to={`/books/?category_id=${book.category_id}`}>
        {book.categoryName}
      </Link>
    ),
  },

  {
    label: "포맷",
    key: "form",
  },

  {
    label: "페이지",
    key: "pages",
  },
  {
    label: "ISBN",
    key: "isbn",
  },
  {
    label: "출간일",
    key: "pubDate",
    filter: (book: IBookDetail) => {
      return formatDate(book.pubDate);
    },
  },
  {
    label: "가격",
    key: "price",
    filter: (book: IBookDetail) => {
      return `${formatNumber(book.price)} 원`;
    },
  },
];

const BookDetail = () => {
  const { bookId } = useParams();
  const { book, likeToggle, cartAdded } = useBook(bookId);
  if (!book) return null;
  return (
    <BookDetailStyle>
      <header className="header">
        <img src={getImgSrc(book.img)} alt={book.title} />
        <div className="info">
          <Title size="large" color="text">
            {book.title}
          </Title>

          {bookInfoList.map((item) => (
            <dl>
              <dt>{item.label}</dt>
              <dd>
                {item.filter
                  ? item.filter(book)
                  : book[item.key as keyof IBookDetail]}
              </dd>
            </dl>
          ))}

          <div className="like">
            <LikeButton book={book} onClick={likeToggle} />
          </div>
          <div className="add-cart">
            <AddToCart book={book} />
          </div>
        </div>
      </header>
      <div className="content">
        <Title size="large" color="text">
          상세설명
        </Title>
        <EllipsisBox lineLimit={4}>{book.detail}</EllipsisBox>
        <Title size="large" color="text">
          목차
        </Title>
        <p className="index">{book.contents}</p>
      </div>
    </BookDetailStyle>
  );
};

const BookDetailStyle = styled.div`
  .header {
    display: flex;
    align-items: start;
    gap: 24px;
    padding: 0 0 24px 0;

    .img {
      flex: 1;
      img {
        width: 100%;
        height: auth;
      }
    }
  }

  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;

    dl {
      display: flex;
      margin: 0;
      dt {
        width: 80px;
        color: ${({ theme }) => theme.color.secondary};
      }
      a {
        color: ${({ theme }) => theme.color.primary};
      }
    }
  }

  .content {
  }
`;
export default BookDetail;
