import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useBook } from "../hook/useBook";
import { getImgSrc } from "../utils/image";
import Title from "../components/common/Title";
import { BookDetail as IBookDetail } from "../models/book.model";
import { formatDate, formatNumber } from "../utils/format";
import { Link } from "react-router-dom";
import EllipsisBox from "../components/common/EllipsisBox";
import LikeButton from "../components/book/LikeButton";
import AddToCart from "../components/book/AddToCart";
import BookReview from "@/components/book/BookReview";
import { Tab, Tabs } from "@/components/common/Tabs";
import Modal from "@/components/Modal";

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
  const { book, likeToggle, reviews, addReview } = useBook(bookId);
  const [isImgOpen, setIsImgOpen] = useState(false);

  if (!book) return null;

  return (
    <BookDetailStyle>
      <header className="header">
        <img
          src={getImgSrc(book.img)}
          alt={book.title}
          onClick={() => setIsImgOpen(true)}
        />
        <div>
          <Modal isOpen={isImgOpen} onClose={() => setIsImgOpen(false)}>
            <img src={getImgSrc(book.img)} alt={book.title} />
          </Modal>
        </div>

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
        <Tabs>
          <Tab title="상세 설명">
            <Title size="large" color="text">
              상세설명
            </Title>
            <EllipsisBox lineLimit={4}>{book.detail}</EllipsisBox>
          </Tab>
          <Tab title="목차">
            <Title size="medium" color="text">
              목차
            </Title>
            <p className="index">{book.contents}</p>
          </Tab>
          <Tab title="리뷰">
            <Title size="medium" color="text">
              리뷰
            </Title>
            <BookReview reviews={reviews} onAdd={addReview} />
          </Tab>
        </Tabs>
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

    > div {
      position: relative !important;
    }

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
