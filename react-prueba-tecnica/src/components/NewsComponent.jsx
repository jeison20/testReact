
import React from 'react';
import { Card, CardContent, Typography, Link } from '@mui/material';

const NewsComponent = ({ noticias }) => {
  return (
    <Card variant="outlined" style={{ marginBottom: '16px' }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Noticias
        </Typography>
       
        {noticias.map((noticia, index) => (
          <div key={index} style={{ marginBottom: '12px' }}>
            <Typography variant="subtitle1" gutterBottom>
              <Link href={noticia.Link} target="_blank" rel="noopener noreferrer">
                {noticia.Title}
              </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {noticia.Description}
              {console.log(noticia)}
            </Typography>
          </div>
          
        ))}
      </CardContent>
    </Card>
  );
};

export default NewsComponent;
