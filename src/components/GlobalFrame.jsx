import styled from 'styled-components';

export const GlobalFrameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;
