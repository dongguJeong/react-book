import { login, resetPassword, resetRequest, signUp } from "@/api/auth.api";
import { LoginProps } from "@/pages/Login";
import { useAuthStore } from "@/store/authStore";
import { useNavigate } from "react-router-dom";
import { useAlert } from "./useAlert";
import { useState } from "react";

export const useAuth = () => {
  const [resetRequested, setResetRequested] = useState(false);
  const { isloggedIn, storeLogin, storeLogout } = useAuthStore();
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const userLogin = (data: LoginProps) => {
    login(data).then(
      (res) => {
        storeLogin(res.token);
        showAlert("로그인 완료되었습니다.");
        navigate("/");
      },
      (error) => {
        showAlert("로그인이 실패했습니다");
      }
    );
  };

  const userSignUp = (data: LoginProps) => {
    signUp(data).then((res) => {
      showAlert("회원가입이 완료되었습니다");
      navigate("/");
    });
  };

  const userResetPassword = (data: LoginProps) => {
    resetPassword(data).then(() => {
      setResetRequested(true);
      showAlert("비밀번호가 초기화되었습니다");
      navigate("/login");
    });
  };

  const userRequestPassword = (data: LoginProps) => {
    resetRequest(data).then(() => {
      setResetRequested(true);
    });
  };
  return {
    userLogin,
    userSignUp,
    userResetPassword,
    userRequestPassword,
    resetRequested,
  };
};
