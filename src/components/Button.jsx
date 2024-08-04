import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  width: 100%;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.PRIMARY[47]};
  color: ${({ theme }) => theme.colors.WHITE};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.FAMILY.NOTO_SANS};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
`;
