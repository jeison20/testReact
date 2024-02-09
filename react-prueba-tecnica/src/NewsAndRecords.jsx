import { useEffect, useState } from "react";
import NewsComponent from './components/NewsComponent';
import WeatherComponent from './components/WeatherComponent';
import { Container, Typography } from '@mui/material';
import '../style.css';
const ENDPOINT_INFO_IMAGE = "https://localhost:7229/api/CheckInformation/GetRecrodsInformation";

export function News(){
    const [data, setFact] = useState();
    const [noticias, setNoticias] = useState([]);

    let noticiasRecorridas = [];
    useEffect(() => {
      fetch(ENDPOINT_INFO_IMAGE)
        .then((res) => res.json())
        .then((resp) => {
          const { data } = resp;
          
          setFact(data);
          for (let i = 0; i < data.length; i++) {
             const objetoJson = JSON.parse(data[i].info);   
             objetoJson.city = data[i].city;              
             noticiasRecorridas.push(objetoJson);
            
          }
         setNoticias(noticiasRecorridas);
          

        });
    }, []);
  
    return (
      <Container maxWidth="md" style={{ marginTop: '20px' }}>
        {console.log(noticias)}  
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