import React from 'react';
import PropTypes from 'prop-types';
import { BalanceWrap, Span, UpArrow, DownArrow } from './Balance.styled';

const Balance = ({ income, expenses, balance }) => (
  <BalanceWrap>
    <Span role="img" aria-label="icon">
      <UpArrow>⬆</UpArrow>
      {income}$
    </Span>
    <Span role="img" aria-label="icon">
      <DownArrow>⬇</DownArrow>
      {expenses}$
    </Span>
    <Span>Balance: {balance}$</Span>
  </BalanceWrap>
);

Balance.defaultProps = {
  income: 0,
  expenses: 0,
  balance: 0,
};

Balance.propTypes = {
  income: PropTypes.number,
  expenses: PropTypes.number,
  balance: PropTypes.number,
};

export default Balance;
