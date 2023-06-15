import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const EnConstruccion = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Componente en Construcción
        </Typography>
        <Typography variant="body1">
          Este componente está en construcción. Pronto estará disponible.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EnConstruccion;
