import React, { useEffect, useState } from "react";
import axios from 'axios';
import NewsComponent from './components/NewsComponent';
import WeatherComponent from './components/WeatherComponent';
import { Container, Typography } from '@mui/material';
import '../style.css';

const ENDPOINT_INFO_IMAGE = "https://localhost:7229/api/CheckInformation/GetRecrodsInformation";

export function News() {
  const [data, setFact] = useState();
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(ENDPOINT_INFO_IMAGE);
        const { data } = response.data.data;
        setFact(response.data.data);
        

        const noticiasRecorridas = response.data.data.map(item => {
          const objetoJson = JSON.parse(item.info);
          objetoJson.city = item.city;
          return objetoJson;
        });

        setNoticias(noticiasRecorridas);
      } catch (error) {
        console.error('Error al obtener datos:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      
      {noticias.map((ciudadData, index) => (
        <div key={index} style={{ marginBottom: '30px' }}>
          <Typography variant="h4" gutterBottom>
            {ciudadData.city}
          </Typography>
          <NewsComponent noticias={ciudadData.News} />         
          <WeatherComponent weather={ciudadData.Weathers} />
        </div>
      ))}
    </Container>
  );
}
