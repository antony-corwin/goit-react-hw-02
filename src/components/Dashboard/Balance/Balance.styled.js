import styled from 'styled-components';

export const BalanceWrap = styled.section`
  padding: 20px;
  // border: 1px solid #464646;
  margin: 10px auto;
  display: flex;
  justify-content: center;
`;

export const Span = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #727d87;
  :not(:last-child) {
    margin-right: 30px;
  }
`;

export const UpArrow = styled.span`
  color: #96c562;
`;

export const DownArrow = styled.span`
  color: #ed666a;
`;
