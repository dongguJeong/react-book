import React, { useState } from "react";
import styled from "styled-components";
import { BookDetail } from "../../models/book.model";
import InputText from "../common/InputText.tsx";
import Button from "../common/Button.tsx";
import { addCart } from "../../api/carts.api.ts";
import { useAlert } from "../../hook/useAlert.ts";
import { Link } from "react-router-dom";
import { useBook } from "../../hook/useBook.ts";

interface Props {
  book: BookDetail;
}
const AddToCart = ({ book }: Props) => {
  const { cartAdded, addToCart } = useBook(book.id.toString());
  const [quantity, setQuantity] = useState<number>(1);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleIncrese = () => {
    setQuantity((prev) => prev + 1);
  };

  const handledecrese = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity((prev) => prev - 1);
  };

  return (
    <AddToCartStyle $added={cartAdded}>
      <div>
        <InputText
          inputType="number"
          onChange={handleChange}
          value={quantity}
        />
        <Button size="medium" scheme="normal" onClick={handleIncrese}>
          +
        </Button>
        <Button size="medium" scheme="normal" onClick={handledecrese}>
          -
        </Button>
      </div>
      <Button
        size="medium"
        scheme="primary"
        onClick={() => addToCart(quantity)}
      >
        장바구니 담기
      </Button>
      {cartAdded && (
        <div className="added">
          <p>장바구니에 추가되었습니다</p>
          <Link to="/cart">장바구니로 이동</Link>
        </div>
      )}
    </AddToCartStyle>
  );
};

interface AddToCartStyleProps {
  $added: boolean;
}
const AddToCartStyle = styled.div<AddToCartStyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position : relative;

  .added{
  position : absolute;
  right : 0;
  bottom : -90px;
  background : ${({ theme }) => theme.color.background}};
  border-radius : ${({ theme }) => theme.borderRadius.default}};
  padding : 8px 12px;
  opacity :  ${({ $added }) => ($added ? "1" : "0")};
  transition : all 0.5s ease;

    p{
    padding : 0 0 8px 0;
    margin : 0;}
`;
export default AddToCart;