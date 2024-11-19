import React, { useMemo, useState } from "react";
import styled from "styled-components";
import Title from "../components/common/Title.tsx";
import { useCart } from "../hook/useCart.ts";
import CartItem from "../components/cart/CartItem.tsx";
import Empty from "../components/common/Empty.tsx";
import { FaShoppingCart } from "react-icons/fa";
import CartSummary from "../components/cart/CartSummary.tsx";
import Button from "../components/common/Button.tsx";
import { useAlert } from "../hook/useAlert.ts";
import { OrderSheet } from "../models/order.model.ts";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { showAlert, showConfirm } = useAlert();
  const navigate = useNavigate();
  const { carts, isEmpty, deleteCartItem } = useCart();
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const handleCheckItem = (id: number) => {
    if (checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter((item) => item !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };

  const handleItemDelete = (id: number) => {
    deleteCartItem(id);
  };

  const totalQuantity = useMemo(() => {
    return carts.reduce((acc, cart) => {
      if (checkedItems.includes(cart.id)) {
        return acc + cart.quantity;
      }
      return acc;
    }, 0);
  }, [carts, checkedItems]);

  const totalPrice = useMemo(() => {
    return carts.reduce((acc, cart) => {
      if (checkedItems.includes(cart.id)) {
        return acc + cart.price * cart.quantity;
      }
      return acc;
    }, 0); // 초기값 0
  }, [carts, checkedItems]); // carts와 checkedItems에 변화가 있을 때만 계산

  const handleOrder = () => {
    if (checkedItems.length === 0) {
      showAlert("주문할 상품을 선택해주세요");
      return;
    }
    const orderData: Omit<OrderSheet, "delivery"> = {
      items: checkedItems,
      totalPrice,
      totalQuantity,
      firstBookTitle: carts[0].title,
    };
    showConfirm("주문하시겠습니까?", () =>
      navigate("/order", { state: orderData })
    );
  };
  return (
    <>
      <Title size="large">장바구니</Title>
      <CartStyle>
        {!isEmpty && (
          <>
            <div className="content">
              {carts.map((cart) => (
                <CartItem
                  key={cart.id}
                  cart={cart}
                  checkedItems={checkedItems}
                  onCheck={handleCheckItem}
                  onDelete={handleItemDelete}
                />
              ))}
            </div>
            <div className="summary">
              <CartSummary
                totalQuantity={totalQuantity}
                totalPrice={totalPrice}
              />
              <Button size="large" scheme="primary" onClick={handleOrder}>
                주문하기
              </Button>
            </div>
          </>
        )}
        {isEmpty && (
          <Empty title="장바구니에 상품이 없습니다" icon={<FaShoppingCart />} />
        )}
      </CartStyle>
    </>
  );
};
const CartStyle = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
  padding: 24px 0 0 0;
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;
export default Cart;
