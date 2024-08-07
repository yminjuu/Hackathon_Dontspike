import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useState } from 'react';
import CalendarIcon from '../assets/CalendarIcon';
import { styled, css } from 'styled-components';
import { forwardRef } from 'react';
import '../styles/DatePicker.css';
import { ko } from 'date-fns/locale';

const Datepicker = ({ selectedDate, setDate }) => {
  // default 값: 현재 날짜
  const CustomInput = forwardRef(({ value, onClick, className }, ref) => (
    <CustomInputBtn className={className} onClick={onClick} ref={ref}>
      {value}
    </CustomInputBtn>
  ));

  return (
    <>
      <Wrapper>
        <CustomDatePicker
          locale={ko}
          showIcon
          icon={<CalendarIcon />}
          dateFormat="yyyy. MM. dd" /* 버튼에 명시되는 날짜 형식 커스텀*/
          selected={selectedDate} /* default 선택된 date 값*/
          maxDate={new Date()}
          onChange={date => setDate(date)} /* 날짜 선택 이벤트 */
          popperPlacement="bottom"
          customInput={<CustomInput className="customInput" />} /* input 디자인을 커스텀 */
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 10.5rem;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 0.625rem;
  border: none;
  background-color: #f0f1f5;
`;

const CustomInputBtn = styled.button`
  outline: none;
  border: none;

  background: #f0f1f5;
`;

const CustomDatePicker = styled(DatePicker)`
  width: 8rem;
  background-color: #f0f1f5;
  border-radius: 0.625rem;
  height: 2rem;
  box-sizing: border-box;
  border-radius: 0.625rem;
  border: none;

  color: #414141;
  font-family: 'Segoe UI';
  font-size: 1.02rem;
  font-weight: 600;
  letter-spacing: 0.03rem;

  display: flex;
  align-items: center;
  flex-shrink: 0;

  cursor: pointer;
`;
export default Datepicker;
