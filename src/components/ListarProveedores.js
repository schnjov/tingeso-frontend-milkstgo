import React, { useEffect, useState } from 'react';
import { Card, CardContent, Grid, Typography, Box } from '@mui/material';

const ListaProveedores = () => {
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8083/proveedor')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error al obtener los proveedores');
        }
      })
      .then(data => {
        setProveedores(data);
      })
      .catch(error => {
        console.error('Error de red:', error);
      });
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Lista de Proveedores
        </Typography>
        <Grid container spacing={2}>
          {proveedores.map(proveedor => (
            <Grid item xs={12} key={proveedor.codigo}>
              <Card>
                <Box bgcolor="primary.main" color="primary.contrastText">
                  <CardContent>
                    <Typography variant="subtitle1" gutterBottom>
                      Código: {proveedor.codigo}
                    </Typography>
                    <Typography variant="subtitle2">
                      Nombre: {proveedor.nombre}
                    </Typography>
                    <Typography variant="subtitle2">
                      Categoría: {proveedor.categoria}
                    </Typography>
                    <Typography variant="subtitle2">
                      Afecto a retención: {proveedor.afectoARetencion ? 'Sí' : 'No'}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ListaProveedores;
