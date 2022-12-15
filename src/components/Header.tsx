import styled from 'styled-components';
import patternBG from '../assets/images/pattern-bg.png';
import arrowIcon from '../assets/images/icon-arrow.svg';
import { DataType } from '../Types/DataTypes';
import { useEffect } from 'react';

interface Props {
  handleSubmit: (e: React.SyntheticEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

const Header: React.FC<Props> = ({ handleSubmit, handleChange, error, setError }) => {
  const interval = () => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  useEffect(() => {
    interval();
  }, [error]);

  return (
    <StyledHeader>
      <Background src={patternBG} alt='bg' />
      <HeaderTitle>IP Address Tracker</HeaderTitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='Search for any IP address or domain'
          onChange={handleChange}
        />

        <Error>{error && error}</Error>
        <Arrow>
          <img src={arrowIcon} alt='icon' />
        </Arrow>
      </Form>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;
const Background = styled.img`
  width: 100%;
  object-fit: cover;

  @media (max-width: 375px) {
    height: 300px;
  }
`;
const HeaderTitle = styled.h1`
  position: absolute;
  /* left: 580px; */
  /* top: 33px; */
  margin-top: 33px;

  font-weight: 500;
  font-size: 32px;
  line-height: 30px;
  /* identical to box height, or 94% */

  letter-spacing: -0.285714px;

  color: #ffffff;
`;

const Input = styled.input`
  background: #ffffff;
  box-shadow: 0px 50px 50px -25px rgba(0, 0, 0, 0.0983665);
  border-radius: 15px;
  border: none;

  width: 555px;
  height: 58px;

  /* Text */

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #2c2c2c;

  mix-blend-mode: normal;
  padding-left: 24px;

  ::placeholder {
    opacity: 0.5;
  }

  /* Text */

  &:focus {
    outline: none;
  }

  @media (max-width: 375px) {
    width: 327px;
    height: 58px;

    ::placeholder {
      font-size: 14px;
    }
  }
`;

const Arrow = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: #000000;
  border-radius: 0px 15px 15px 0px;
  border: none;

  width: 58px;
  height: 58px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: #3f3f3f;
    border-radius: 0px 15px 15px 0px;
  }

  img {
    /* padding: 23px 26px 23px 26px; */
  }
`;

const Form = styled.form`
  position: absolute;
  /* left: 443px;
  top: 94px; */

  margin-top: 94px;
`;

const Error = styled.p`
  position: absolute;
  top: 15px;
  right: 65px;
  color: red;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  opacity: 0.5;

  @media (max-width: 375px) {
    font-size: 14px;
    top: 40px;
  }
`;

export default Header;
