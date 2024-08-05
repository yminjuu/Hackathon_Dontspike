import { React, useState, useEffect } from 'react';
import IconImg from '../assets/health.png';
import LogoButton from '../../common/components/LogoButton';
import styled from 'styled-components';
import { MdArrowBackIos } from 'react-icons/md';
import '../styles/login.css';
import ActiveBtn from '../assets/active.png';
import DefaultBtn from '../assets/default.png';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const navigate = useNavigate();

  const checkValidJoin = () => {
    if (id && pw) {
      // axios : login post
      // navigate
      navigate('/main');
    } else {
      if (!id) {
        alert('ID를 입력하세요');
        return;
      }
      if (!pw) alert('비밀번호를 입력하세요');
    }
  };

  return (
    <Wrapper>
      <MainHeader>
        <LogoButton type="loginPage"></LogoButton>
        {/* type을 주어 로그인하지 않고 main으로 이동하지 않도록 방지 */}
      </MainHeader>
      {/* 뒤로가기 버튼 헤더 */}
      <BackWrapper>
        <MdArrowBackIos
          style={{
            cursor: 'pointer',
            stroke: '#D6DDFE',
            fill: '#D6DDFE',
            strokeWidth: 0,
            height: '1.5rem',
            width: '1.5rem',
          }}
          onClick={() => {
            navigate('/');
          }}
        />
      </BackWrapper>
      {/* 텍스트 Wrapper */}
      <TextWrapper>
        <div style={{ color: '#FFFFFF', fontSize: '1.875rem', fontWeight: '600' }}>
          이름과 이메일을 입력하면 로그인이 완료됩니다.{' '}
        </div>
        <div style={{ color: '#D6DDFE', fontSize: '1.175rem', fontWeight: '400' }}>
          돈스파이크 에서 더욱 스마트한 혈당 관리를 시작해보세요.{' '}
        </div>
      </TextWrapper>
      {/* 로그인 창 */}
      <Icon src={IconImg}></Icon>
      <LoginWrapper>
        <LoginText>로그인</LoginText>
        <InputsWrapper>
          <InputWrapper>
            <InputTitle>이름</InputTitle>
            <StyledInput
              name="id"
              value={id}
              onChange={e => {
                setId(e.target.value);
              }}
              type="text"
              placeholder="이름을 입력하세요."
            ></StyledInput>
          </InputWrapper>
          <InputWrapper>
            <InputTitle>비밀번호</InputTitle>
            <StyledInput
              value={pw}
              onChange={e => {
                setPw(e.target.value);
              }}
              type="password"
              placeholder="비밀번호를 입력하세요."
            ></StyledInput>
          </InputWrapper>
        </InputsWrapper>
        <ButtonWrapper>
          {id == '' || pw == '' ? (
            <Button src={DefaultBtn}></Button>
          ) : (
            <Button src={ActiveBtn} onClick={checkValidJoin}></Button>
          )}
        </ButtonWrapper>
      </LoginWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, #4c62ca 50%, #f0f1f5 50%);

  position: relative;
`;

const BackWrapper = styled.div`
  width: calc(100% - 2rem);
  margin-left: 2rem;
  margin-top: 1rem;
  height: 3.5vh;
  display: flex;
  justify-content: left;
`;

const MainHeader = styled.div`
  width: 100%;
  height: 8vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;

  /* // 헤더의 border */
  border-bottom: 1px solid #cfcfcf;
`;

const TextWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Icon = styled.img`
  width: 7.6875rem;
  height: 9.0625rem;

  position: relative;
  top: 5%;
  right: 10%;
  z-index: 3;
`;

const LoginWrapper = styled.div`
  width: 30vw;
  height: 53vh;
  flex-shrink: 0;

  background-color: #ffffff;
  border-radius: 0.8rem;
  box-shadow: -3px 3px 20px rgba(0, 0, 0, 0.1);

  position: relative;
  top: 0%;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const LoginText = styled.div`
  width: 100%;
  height: 10vh;

  color: #111111;
  font-size: 1.6rem;
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const InputTitle = styled.div`
  width: 5rem;
  height: 3.125rem;
  color: #111111;

  font-size: 1rem;
  font-weight: 600;

  text-align: center;
  line-height: 3.125rem;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;

  width: 16.875rem;
  height: 3.125rem;

  color: #111111;
  font-size: 0.9rem;
  font-weight: 500;

  text-align: center;
  vertical-align: middle;

  background-color: transparent;
  border: 1px solid #cfcfcf;
  border-radius: 1.8rem;

  &::placeholder {
    font-size: 0.8rem;
    font-weight: 400;
    color: #a0a0a0;
  }
`;

const ButtonWrapper = styled.div`
  margin-bottom: 5vh;
  width: 100%;
  height: 7vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.img`
  width: 11rem;
  height: 3rem;
  flex-shrink: 0;

  cursor: pointer;
`;

export default LoginPage;
