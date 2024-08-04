import styled from 'styled-components';

const BodyFrameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.minWidth};
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export default BodyFrameWrapper;
