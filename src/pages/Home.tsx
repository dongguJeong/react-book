import React from "react";
import Title from "../components/common/Title.tsx";
import InputText from "../components/common/InputText.tsx";

const Home = () => {
  return (
    <>
      <Title size="large">제목</Title>
      <div>home body</div>
      <InputText placeholder="여기에 입력하세요" />
    </>
  );
};

export default Home;
