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
  pub_date: string;
  category_id: number;
  img: number;
  likes: number;
}

export interface BookDetail extends Book {
  categoryName: string;
  liked: boolean;
}
