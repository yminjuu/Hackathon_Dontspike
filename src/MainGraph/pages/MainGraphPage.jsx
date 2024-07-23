import MainHeader from '../../common/components/MainHeader';
import MainBloodSugar from '../../Sec1_MainBloodSugar/MainBloodSugar';
import AverageBloodSugar from '../../Sec3_AverageBloodSugar/AverageBloodSugar';
import FoodBar from '../../Sec2_FoodBar/FoodBar';

import styled from 'styled-components';
import background from '../assets/imgs/background.svg';

const MainGraphPage = () => {
  return (
    <>
      <PageBackground>
        <MainHeader></MainHeader>
        <SectionsWrapper>
          {/* 제목 + 혈당 섹션 */}
          <SectionWrapper>
            <MainBloodSugar></MainBloodSugar>
          </SectionWrapper>
          {/* 구분선 추가 */}
          <HorizonWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" width="1292" height="1" viewBox="0 0 1292 1" fill="none">
              <path d="M1 0.5L1291 0.5" stroke="#CFCFCF" stroke-linecap="round" />
            </svg>
          </HorizonWrapper>
          {/* 하단 그래프 2개 섹션*/}
          <SectionWrapper2>
            <FoodBar></FoodBar>
            <AverageBloodSugar></AverageBloodSugar>
          </SectionWrapper2>
        </SectionsWrapper>
      </PageBackground>
    </>
  );
};

const PageBackground = styled.div`
  background-image: url(${background});
  background-size: cover;
`;

const SectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1.1rem 4.69rem 1.3rem 4.69rem;
`;

const SectionWrapper2 = styled.section`
  display: flex;
  flex-direction: row;
  margin: 1.3rem 4.69rem 2.5rem 4.69rem;
  justify-content: center;
  gap: 1.13rem;
`;

const HorizonWrapper = styled.div`
  width: 80.625rem;
  height: 1.75rem;
  flex-shrink: 0;
`;
export default MainGraphPage;