import React from "react";
import { useForm } from "react-hook-form";
import { SignUpStyle } from "./SignUp";
import Title from "../components/common/Title";
import InputText from "../components/common/InputText";
import Button from "../components/common/Button";
import { useAuth } from "@/hook/useAuth";

export interface LoginProps {
  email: string;
  password: string;
}

const ResetPassword = () => {
  const { userResetPassword, userRequestPassword, resetRequested } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();

  const onSubmit = (data: LoginProps) => {
    resetRequested ? userResetPassword(data) : userRequestPassword(data);
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
