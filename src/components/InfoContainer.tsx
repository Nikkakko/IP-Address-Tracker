import styled from 'styled-components';
import { DataType } from '../Types/DataTypes';

const divide = (str: string) => {
  const index = str.indexOf(' ');

  if (index !== -1) {
    const first = str.slice(0, index);
    const second = str.slice(index + 1);
    return (
      <>
        {first} <br /> {second}
      </>
    );
  }
  return str;
};

const InfoContainer: React.FC<DataType> = ({
  dataIp,
  utc,
  city,
  country,
  postalCode,
  provider,
}) => {
  return (
    <StyledInfoContainer>
      <IpAddress>
        <p>IP Address</p>
        <h2>{dataIp}</h2>
      </IpAddress>
      <Line />
      <Location>
        <p>Location</p>
        <h2>
          {city}
          {city && ','} {country} <br /> {postalCode}
        </h2>
      </Location>
      <Line />

      <Timezone>
        <p>Timezone</p>
        <h2>{utc}</h2>
      </Timezone>
      <Line />

      <Isp>
        <p>ISP</p>

        <h2>{divide(provider)}</h2>
      </Isp>
    </StyledInfoContainer>
  );
};

const StyledInfoContainer = styled.div`
  position: absolute;

  left: 165px;
  top: 190px;

  width: 1110px;
  height: 161px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  /* eff */
  background: #ffffff;
  box-shadow: 0px 50px 50px -25px rgba(0, 0, 0, 0.0983665);
  border-radius: 15px;
  /* eff */

  @media (max-width: 425px) {
    width: 327px;
    height: 294px;
    /* max-height: 334px; */
    /* height: auto; */
    left: 50px;
    top: 177px;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;

    padding: 26px 24px 24px;
  }

  @media (max-width: 375px) {
    left: 24px;
  }

  @media (min-width: 1900px) {
    left: 400px;
    top: 200px;
  }

  h2 {
    font-weight: 500;
    font-size: 26px;
    line-height: 30px;
    /* or 115% */

    letter-spacing: -0.232143px;

    color: #2c2c2c;
    margin-top: 13px;

    @media (max-width: 425px) {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      margin-top: 7px;
    }
  }

  p {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 1.75px;
    text-transform: uppercase;

    color: #2c2c2c;

    mix-blend-mode: normal;
    opacity: 0.5;

    @media (max-width: 425px) {
      font-weight: 700;
      font-size: 10px;
      line-height: 12px;
    }
  }
`;

const IpAddress = styled.div`
  /* margin: 37px 32px 67px 32px; */
  /* width: 213px; */

  /* @media (max-width: 375px) {
    margin-top: 26px;

    h2 {
      margin-top: 7px;
    }
  } */
`;
const Location = styled.div`
  /* margin: 37px 32px 36px 32px; */
  /* width: 161px; */

  /* @media (max-width: 375px) {
    margin-top: 24px;

    h2 {
      margin-top: 7px;
    }
  } */
`;
const Timezone = styled.div`
  /* margin: 37px 32px 36px 32px; */
  /* width: 213px; */

  /* @media (max-width: 375px) {
    margin-top: 24px;

    h2 {
      margin-top: 7px;
    }
  } */
`;
const Isp = styled.div`
  /* width: 213px;
  margin: 37px 32px 36px 32px; */

  /* @media (max-width: 375px) {
    margin-top: 24px;

    h2 {
      margin-bottom: 24px;
    }
  } */
`;

const Line = styled.div`
  width: 1px;
  height: 75px;
  background: #000000;
  mix-blend-mode: normal;
  opacity: 0.15;
  /* display: flex; */

  @media (max-width: 425px) {
    width: 0px;
  }
`;

export default InfoContainer;
