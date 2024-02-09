import React, { useState } from 'react';
import axios from 'axios';
import NewsComponent from './NewsComponent';
import WeatherComponent from './WeatherComponent';
import { Container, Typography } from '@mui/material';
import '../../style.css';


const SearchComponent = () => {
  const [city, setCity] = useState('');
  const [result, setResult] = useState(null);
  const [noticias, setNoticias] = useState([]);
let noticiasRecorridas = [];
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      
      if (!city.trim()) {
        console.error('Por favor, ingresa el nombre de la ciudad.');
        return;
      }

      
      const response = await axios.get(`https://localhost:7229/api/CheckInformation/Information?city=${city}`);

     
       
                   
        noticiasRecorridas.push(response.data.data.news);
       
     
      setResult(response.data);
      setNoticias(response.data.data.news);
    } catch (error) {
      console.error('Error al consumir el servicio:', error.message);
    }
  };

  return (
    <div>   
     
      <label>
        City:
        <input type="text" value={city} onChange={handleCityChange} />
      </label>

      <button onClick={handleButtonClick}>Consultar Servicio</button>
      
      {result && (
        <div>
          <h2>Resultado del Servicio</h2>
          <Container maxWidth="md" style={{ marginTop: '20px' }}>
      
       
       
          <div  style={{ marginBottom: '30px' }}>
            <Typography variant="h4" gutterBottom>
             {city}
            </Typography>
            <NewsComponent noticias={noticias} />
           
          </div>
      
       
      </Container>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
    
  );
};


export default SearchComponent;
