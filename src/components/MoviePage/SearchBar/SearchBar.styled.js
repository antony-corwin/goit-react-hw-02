import styled from 'styled-components';

const SearchInput = styled.input`
  margin-top: 20px;
  color: #171718;
  font-size: 16px;
  min-height: 38px;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #b3b3b3;
  width: 100%;
  outline: 0;
  transition: border-color 200ms ease-in-out;

  :focus {
    border-width: 2px;
    border-color: #2684ff;
  }
`;

export default SearchInput;
