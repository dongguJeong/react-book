import React, { useMemo } from "react";
import styled from "styled-components";
import { Cart } from "../../models/cart.model.ts";
import Button from "../../components/common/Button.tsx";
import Title from "../common/Title.tsx";
import { formatNumber } from "../../utils/format.ts";
import CheckIconButton from "./CheckIconButton.tsx";
import { useAlert } from "../../hook/useAlert.ts";

interface Props {
  cart: Cart;
  checkedItems: number[];
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
}
const CartItem = ({ cart, checkedItems, onCheck, onDelete }: Props) => {
  const { showConfirm } = useAlert();
  const isChecked = useMemo(() => {
    return checkedItems.includes(cart.id);
  }, [checkedItems, cart.id]);

  const handleCheck = () => {
    onCheck(cart.id);
  };

  const handleDelete = () => {
    showConfirm("정말 삭제하시겠습니까?", () => {
      onDelete(cart.id);
    });
  };

  return (
    <CartItemStyle>
      <div className="info">
        <div className="check">
          <CheckIconButton isChecked={isChecked} onCheck={handleCheck} />
        </div>
        <div>
          <Title size="medium" color="text">
            {cart.title}
          </Title>
          <p className="summary">{cart.summary}</p>
          <p className="price">{formatNumber(cart.price)}</p>
          <div className="quantity">{cart.quantity}</div>
        </div>
      </div>

      <Button size="medium" scheme="normal" onClick={handleDelete}>
        장바구니 삭제
      </Button>
    </CartItemStyle>
  );
};
const CartItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: start;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 1px solid ${({ theme }) => theme.borderRadius.default};
  padding: 12px;

  .info {
    display: flex;
    align-items: start;
    flex: 1;

    .check {
      width: 40px;
      flex-shrink: 0;
    }
  }

  p {
    padding: 0 0 8px 0;
    margin: 0;
  }
`;
export default CartItem;
