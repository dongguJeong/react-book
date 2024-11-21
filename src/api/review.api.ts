import { BookReview, BookReviewWrite } from "@/models/book.model";
import { requestHandler } from "./http";

export const fetchBookReview = async (bookId: string) => {
  return await requestHandler("get", `/reviews/${bookId}`);
};

export const addBookReview = async (bookId: string, data: BookReviewWrite) => {
  return await requestHandler("post", `/reviews/${bookId}`, data);
};

export const fetchBookReviewAll = async () => {
  return await requestHandler<BookReview[]>("get", `/reviews`);
};
