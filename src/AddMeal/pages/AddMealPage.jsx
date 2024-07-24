import SearchSection from '../components/SearchSec/SearchSection';
import FoodNavigationSection from '../components/FoodNavSec/FoodNavigationSection';
import styled from 'styled-components';
import Logo from '../../common/assets/imgs/Logo.svg?react';
import { useNavigate } from 'react-router-dom';

const AddMealPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageBackground>
        <HeaderWrapper>
          <Logo></Logo>
          {/* x 버튼 svg 태그 */}
          <ButtonWrapper
            onClick={() => {
              navigate('/');
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M15 1.03955L1.08631 14.9998" stroke="#414141" strokeWidth="1.96769" strokeLinecap="round" />
              <path
                d="M14.9136 14.9604L0.999885 1.00018"
                stroke="#414141"
                strokeWidth="1.96769"
                strokeLinecap="round"
              />
            </svg>
          </ButtonWrapper>
        </HeaderWrapper>
        <ContentWrapper>
          <SearchSection></SearchSection>
          <FoodNavigationSection></FoodNavigationSection>
        </ContentWrapper>
      </PageBackground>
    </>
  );
};
// 1. 검색창
// 2. 메뉴 탭
// 3. 리스트 or 직접 등록 화면

const PageBackground = styled.div`
  // 사용자가 보는 화면의 크기가 page의 크기가 됨
  width: 100vw;
  height: 100vh;

  background-color: #f0f1f5;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  cursor: pointer;
  width: 5rem;
  height: 2.5rem;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  height: 2rem;
  padding: 2.5rem;
  background-color: #ffffff;

  display: flex;
  justify-content: space-between;
`;

export default AddMealPage;
