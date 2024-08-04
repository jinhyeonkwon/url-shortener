import styled from 'styled-components';
import Typography from './Typography';

const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.GRAY[97]};
`;

const HeaderContentsWrapper = styled.div`
  display: flex;
  width: ${({ theme }) => theme.minWidth};
  padding: 0px 10px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`;

const Title = styled.div`
  display: flex;
  height: 52px;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  color: ${({ theme }) => theme.colors.PRIMARY[27]};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.FAMILY.NOTO_SANS};
  font-size: 30px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fonts.WEIGHT.BOLD};
  line-height: normal;
`;
const InfoButton = styled.div`
  display: flex;
  width: 28px;
  height: 28px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 25px;
  border: 3px solid ${({ theme }) => theme.colors.PRIMARY[47]};
  font-family: ${({ theme }) => theme.fonts.FAMILY.NOTO_SANS};
  color: var(--Primary-47_Primary, #3c9ab4);
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fonts.WEIGHT.BOLD};
  line-height: normal;
`;

const LeftDummy = styled.div`
  display: flex;
  width: 28px;
  height: 28px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContentsWrapper>
        <LeftDummy />
        <Title>
          <Typography fs={30} fw="BOLD" ta="center">
            URL Shortner
          </Typography>
        </Title>
        <InfoButton>?</InfoButton>
      </HeaderContentsWrapper>
    </HeaderWrapper>
  );
};
