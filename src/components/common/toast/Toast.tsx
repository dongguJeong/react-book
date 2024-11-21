import useTimeout from "@/hook/useTimeout";
import useToastStore, { ToastItem } from "@/store/toastStore";
import React, { useEffect, useState } from "react";
import { FaBan, FaInfoCircle, FaPlus } from "react-icons/fa";
import styled from "styled-components";

export const TOAST_REMOVE_DELAY = 3000;

const Toast = ({ id, message, type }: ToastItem) => {
  const removeToast = useToastStore((store) => store.removeToast);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleRemoveToast = () => {
    setIsFadingOut(true);
  };

  useTimeout(handleRemoveToast, TOAST_REMOVE_DELAY);

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       handleRemoveToast();
  //     }, TOAST_REMOVE_DELAY);

  //     return () => clearTimeout(timer);
  //   }, []);

  const handleAnimationEnd = () => {
    if (isFadingOut) {
      removeToast(id);
    }
  };
  return (
    <ToastStyle
      className={isFadingOut ? "fade-out" : "fade-in"}
      onAnimationEnd={handleAnimationEnd}
    >
      <p>
        {type === "info" && <FaInfoCircle />}
        {type === "error" && <FaBan />}
        {message}
      </p>
      <button onClick={handleRemoveToast}>
        <FaPlus />
      </button>
    </ToastStyle>
  );
};
const ToastStyle = styled.div`
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  &.fade-in {
    animation: fade-in 0.3s ease-in-out forwards;
  }

  &.fade-out {
    animation: fade-out 0.3s ease-in-out forwards;
  }

  background-color: ${({ theme }) => theme.color.background};
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 24px;
  align-items: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;

  p {
    ${({ theme }) => theme.color.text};
    line-height: 1;
    margin: 0;
    flex: 1;

    display: flex;
    align-items: end;
    gap: 4px;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;

    svg {
      transform: rotate(45deg);
    }
  }
`;
export default Toast;
