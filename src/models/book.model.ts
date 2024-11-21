export interface Book {
  id: number;
  title: string;
  form: string;
  isbn: string;
  summary: string;
  detail: string;
  author: string;
  pages: number;
  contents: string;
  price: number;
  pubDate: string;
  category_id: number;
  img: number;
  likes: number;
}

export interface BookDetail extends Book {
  categoryName: string;
  liked: boolean;
}

export interface BookReview {
  id: number;
  userName: string;
  content: string;
  createdAt: string;
  score: number;
}

export type BookReviewWrite = Pick<BookReview, "content" | "score">;
