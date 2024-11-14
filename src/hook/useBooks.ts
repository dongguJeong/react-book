import { useLocation } from "react-router-dom";
import { Book } from "../models/book.model.ts";
import { Pagination } from "../models/pagination.model.ts";
import { useEffect, useState } from "react";
import { fetchBooks } from "../api/books.api.ts";
import { QUERYSTRING } from "../constants/querystring.ts";
import { LIMIT } from "../constants/pagination.ts";

export const useBooks = () => {
  const location = useLocation();

  const [books, setBooks] = useState<Book[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    totalCount: 0,
    currentPage: 1,
  });
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    fetchBooks({
      category_id: params.get(QUERYSTRING.CATEGORY_ID)
        ? Number(params.get(QUERYSTRING.CATEGORY_ID))
        : undefined,
      news: params.get(QUERYSTRING.NEWS) ? true : undefined,
      currentPage: params.get(QUERYSTRING.PAGE) ? Number(QUERYSTRING.PAGE) : 1,
      limit: LIMIT,
    }).then(({ books, pagination }) => {
      setBooks(books);
      setPagination(pagination);
      setIsEmpty(books.length === 0);
    });
  }, [location.search]);

  return { books, pagination, isEmpty };
};
