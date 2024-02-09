
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WeatherComponent = ({ weather }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Clima
        </Typography>
        <Typography variant="body1">Temperatura: {weather.Temperature} °C</Typography>
        <Typography variant="body1">Humedad: {weather.Humidity}%</Typography>
        
      </CardContent>
    </Card>
  );
};

export default WeatherComponent;
