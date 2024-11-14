import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { SignUpStyle } from "./SignUp.tsx";
import Title from "../components/common/Title.tsx";
import InputText from "../components/common/InputText.tsx";
import { useAlert } from "../hook/useAlert.ts";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button.tsx";
import { resetPassword, resetRequset } from "../api/auth.api.ts";

export interface ResetPasswordProps {
  email: string;
  password: string;
}

const ResetPassword = () => {
  const navigate = useNavigate();
  const showAlert = useAlert();
  const [resetRequested, setResetRequested] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordProps>();
  const onSubmit = (data: ResetPasswordProps) => {
    if (resetRequested) {
      resetPassword(data).then(() => {
        showAlert("비밀번호가 초기화되었습니다");
        navigate("/login");
      });
    } else {
      resetRequset(data).then(() => {
        setResetRequested(true);
      });
    }
  };
  return (
    <>
      <Title size="large">비밀번호 초기화</Title>
      <SignUpStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <InputText
              placeholder="이메일"
              inputType="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="error-text">이메일을 입력해주세요</p>
            )}
          </fieldset>
          {resetRequested && (
            <fieldset>
              <InputText
                placeholder="비밀번호"
                inputType="password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="error-text">비밀번호를 입력해주세요</p>
              )}
            </fieldset>
          )}
          <fieldset>
            <Button type="submit" size="medium" scheme="primary">
              {resetRequested ? "비밀번호 초기화" : "초기화 요청"}
            </Button>
          </fieldset>
        </form>
      </SignUpStyle>
    </>
  );
};

export default ResetPassword;
