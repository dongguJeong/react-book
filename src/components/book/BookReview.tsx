import {
  BookReviewWrite,
  BookReview as IBookReview,
} from "@/models/book.model";
import React from "react";
import styled from "styled-components";
import BookReviewItem from "./BookReviewItem";
import BookReviewAdd from "./AddReview";

interface Props {
  reviews: IBookReview[];
  onAdd: (data: BookReviewWrite) => void;
}

const BookReview = ({ reviews, onAdd }: Props) => {
  return (
    <BookReviewStyle>
      <BookReviewAdd onAdd={onAdd} />
      {reviews.map((review) => (
        <BookReviewItem review={review} />
      ))}
    </BookReviewStyle>
  );
};
const BookReviewStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export default BookReview;
