import styled from 'styled-components';
import { useState, useRef } from 'react';

import Typography from './Typography';
import { Button } from './Button';
import { getShortenedURL } from '../services/getShortURL';
// import { getShortenedURL } from '../services/getShortenedURL';

const InputSectionWrapper = styled.div`
  display: flex;
  padding: 10px 0px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;

const TitleTypography = styled(Typography)`
  text-align: left;
  width: 100%;
`;

const Input = styled.input`
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 15px;
  border: 2px solid ${({ theme }) => theme.colors.PRIMARY[47]};
  background: ${({ theme }) => theme.colors.GRAY[97]};
  color: ${({ theme }) => theme.colors.BLACK};
  font-family: 'Noto Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const InputAndError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
`;

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`;

const checkURL = (url) => {
  const urlRegex = new RegExp(
    '(https://www.|http://www.|https://|http://)?[a-zA-Z0-9]{2,}(.[a-zA-Z0-9]{2,})(.[a-zA-Z0-9]{2,})?'
  );
  return urlRegex.test(url);
};

export const InputSection = ({ title }) => {
  const [error, setError] = useState('');
  const inputRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const url = inputRef.current.value;
    console.log(`url :` + url);
    if (!checkURL(url)) {
      setError('Please Enter a Valid URL.');
      return;
    }
    try {
      const shortURL = await getShortenedURL(url);
      setError(shortURL);
    } catch (err) {
      setError('An Error Occurred. Please Try Again.');
    }
  };

  return (
    <InputSectionWrapper>
      <TitleTypography fs={24} fw="BOLD" ta="left">
        {title}
      </TitleTypography>
      <InputForm onSubmit={onSubmit}>
        <InputAndError>
          <Input ref={inputRef} />
          {error && (
            <Typography fs={16} fw="MEDIUM" ta="left" color="RED">
              {error}
            </Typography>
          )}
        </InputAndError>
        <Button type="submit">Shorten</Button>
      </InputForm>
    </InputSectionWrapper>
  );
};
