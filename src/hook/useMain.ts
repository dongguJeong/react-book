import { fetchBanners } from "@/api/banner.api";
import { fetchBestBook, fetchBooks } from "@/api/books.api";
import { fetchBookReviewAll } from "@/api/review.api";
import { Banner } from "@/models/banner.model";
import { Book, BookReview } from "@/models/book.model";
import { useEffect, useState } from "react";

export const useMain = () => {
  const [reviews, setReviews] = useState<BookReview[]>([]);
  const [newBooks, setNewBooks] = useState<Book[]>([]);
  const [bestBooks, setBestBooks] = useState<Book[]>([]);
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    fetchBookReviewAll().then((reviews) => setReviews(reviews));

    fetchBooks({
      category_id: undefined,
      news: true,
      currentPage: 1,
      limit: 4,
    }).then(({ books }) => {
      setNewBooks(books);
    });

    fetchBestBook().then((bestBooks) => setBestBooks(bestBooks));

    fetchBanners().then((banners) => setBanners(banners));
  }, []);

  return { reviews, newBooks, bestBooks, banners };
};
