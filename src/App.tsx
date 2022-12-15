import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import InfoContainer from './components/InfoContainer';
import Map from './components/Map';
import styled from 'styled-components';

// import env vite
const Key = import.meta.env.VITE_GEO_API_KEY;

const App = () => {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const [ip, setIp] = useState('');
  const [dataIp, setDataIp] = useState('');
  const [utc, setUtc] = useState('');
  const [provider, setProvider] = useState('');

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${Key}&ipAddress=`
      );
      setLat(data.location.lat);
      setLng(data.location.lng);

      setDataIp(data.ip);
      setCountry(data.location.country);
      setCity(data.location.city);
      setUtc(data.location.timezone);
      setPostalCode(data.location.postalCode);
      setProvider(data.isp);
      setError(null);

      console.log(data);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const { data } = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${Key}&ipAddress=${ip}`
      );

      console.log(data);

      setDataIp(data.ip);

      setLat(data.location.lat);
      setLng(data.location.lng);

      setCountry(data.location.country);
      setCity(data.location.city);
      setUtc(data.location.timezone);
      setPostalCode(data.location.postalCode);
      setProvider(data.isp);
      setError(null);
    } catch (err) {
      if (err instanceof Error) {
        setError('Input correct IPv4 or IPv6 address.');
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIp(e.target.value);
  };

  return (
    <Container>
      <Header
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        error={error}
        setError={setError}
      />
      <InfoContainer
        dataIp={dataIp}
        utc={utc}
        city={city}
        country={country}
        postalCode={postalCode}
        provider={provider}
      />
      <Map lat={lat} lng={lng} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  /* height: 800px; */
  height: 100vh;
  /* background-color: #f2f2f2; */
`;

export default App;
