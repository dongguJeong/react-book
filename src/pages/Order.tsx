import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Title from "../components/common/Title.tsx";
import CartSummary from "../components/cart/CartSummary.tsx";
import Button from "../components/common/Button.tsx";
import InputText from "../components/common/InputText.tsx";
import { useForm } from "react-hook-form";
import { Delivery, OrderSheet } from "../models/order.model.ts";
import FindAddressButton from "../components/order/FindAddressButton.tsx";
import { order } from "../api/order.api.ts";
import { useAlert } from "../hook/useAlert.ts";

interface DeliveryForm extends Delivery {
  addressDetail: string;
}

const Order = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { showAlert, showConfirm } = useAlert();
  const orderDataFromCart = location.state;
  console.log(orderDataFromCart);
  const { totalPrice, totalQuantity, firstBookTitle } = orderDataFromCart;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<DeliveryForm>();

  const handlePay = (data: DeliveryForm) => {
    const orderData: OrderSheet = {
      ...orderDataFromCart,
      delivery: {
        ...data,
        address: `${data.address} ${data.addressDetail}`,
      },
    };
    showConfirm("주문을 진행하시겠습니까?", () => {
      order(orderData).then(() => {
        showAlert("주문이 처리되었습니다");
        navigate("/orderlist");
      });
    });
  };
  return (
    <>
      <Title size="large">주문서 작성</Title>
      <OrderStyle>
        <div className="content">
          <div className="order-info">
            <Title size="medium" color="text">
              배송 정보
            </Title>
            <form className="delivery">
              <fieldset>
                <label>주소</label>
                <div className="input">
                  <InputText
                    inputType="text"
                    {...register("address", { required: true })}
                  />
                  {errors.address && (
                    <p className="error-text">주소를 입력해주세요</p>
                  )}
                </div>
                <FindAddressButton
                  onCompleted={(address) => setValue("address", address)}
                />
              </fieldset>
              <fieldset>
                <label>상세 주소</label>
                <div className="input">
                  <InputText
                    inputType="text"
                    {...register("addressDetail", { required: true })}
                  />
                  {errors.addressDetail && (
                    <p className="error-text">상세 주소를 입력해주세요</p>
                  )}
                </div>
              </fieldset>
              <fieldset>
                <label>수령인</label>
                <div className="input">
                  <InputText
                    inputType="text"
                    {...register("receiver", { required: true })}
                  />
                  {errors.receiver && (
                    <p className="error-text">수령인을 입력해주세요</p>
                  )}
                </div>
              </fieldset>
              <fieldset>
                <label>전화번호</label>
                <div className="input">
                  <InputText
                    inputType="text"
                    {...register("contact", { required: true })}
                  />
                  {errors.contact && (
                    <p className="error-text">전화번호를 입력해주세요</p>
                  )}
                </div>
              </fieldset>
            </form>
          </div>
          <div className="order-info">
            <Title size="medium" color="text">
              주문 상품
            </Title>
            <strong>
              {firstBookTitle} 등 총 {totalQuantity} 권
            </strong>
          </div>
        </div>
        <div className="summary">
          <CartSummary totalQuantity={totalQuantity} totalPrice={totalPrice} />
          <Button
            size="large"
            scheme="primary"
            onClick={handleSubmit(handlePay)}
          >
            주문하기
          </Button>
        </div>
      </OrderStyle>
    </>
  );
};
const OrderStyle = styled.div`
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
  .summary {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .delivery {
    fieldset {
      border: 0;
      margin: 0;
      padding: 0 0 12px 0;
      display: flex;
    }
  }
  label {
    width: 80px;
  }
  .input {
    flex: 1;
    input {
      width: 100%;
    }
  }

  .error-text {
    color: red;
    margin: 0;
    padding: 0 0 12px 0;
    text-align: right;
  }

  .order-info {
    h1 {
      padding: 0 0 24px 0;
    }
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding: 12px;
  }
`;
export default Order;
