import Banner from "@/components/banner/Banner";
import Title from "@/components/common/Title";
import MainBestBooks from "@/components/main/MainBestBooks";
import MainNewBooks from "@/components/main/MainNewBooks";
import MainReview from "@/components/main/MainReview";
import { useMain } from "@/hook/useMain";
import { useMediaQuery } from "@/hook/useMediaQuery";
import React from "react";
import styled from "styled-components";

const Home = () => {
  const { reviews, newBooks, bestBooks, banners } = useMain();
  const { isMobile } = useMediaQuery();
  return (
    <HomeStyle>
      <Banner banners={banners} />

      <section className="section">
        <Title size="large">베스트 셀러</Title>
        <MainBestBooks books={bestBooks} />
      </section>

      <section className="section">
        <Title size="large">신간</Title>
        <MainNewBooks books={newBooks} />
      </section>
      <section className="section">
        <Title size="large">리뷰</Title>
        <MainReview reviews={reviews} />
      </section>
    </HomeStyle>
  );
};

const HomeStyle = styled.div`
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default Home;
