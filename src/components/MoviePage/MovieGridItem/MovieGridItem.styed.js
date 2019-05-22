import styled from 'styled-components';

export const MovieCard = styled.div`
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background-color: #fff;
  flex: 0 0 calc(25% - 16px);
  height: 626px;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 16px;
  overflow: hidden;
`;

export const Img = styled.img`
  display: block;
  max-width: 100%;
`;

export const Content = styled.div`
  padding: 8px;
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  padding: 
  font-weight: 500;
`;

export const Paragraph = styled.p`
  line-height: 1.5;
  padding: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;
