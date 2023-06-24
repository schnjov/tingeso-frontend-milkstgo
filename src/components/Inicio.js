import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NuevoProveedorFormulario from './NuevoProveedorFormulario';
import ListarProveedores from './ListarProveedores.js';
import CargarAcopios from './CargarAcopios';
import CargarValores from './CargarValores';

const theme = createTheme();

export default function Inicio() {
  const [vista, setVista] = useState(0);

  const handleButtonClick = (number) => {
    setVista(number);
    console.log(vista);
  };

  let componentToDisplay = null;

  switch (vista) {
    case 1:
      componentToDisplay = <NuevoProveedorFormulario />;
      break;
    case 2:
      componentToDisplay = <ListarProveedores />;
      break;
    case 3:
      componentToDisplay = <CargarAcopios />;
      break;
    case 4:
      componentToDisplay = <CargarValores/>;
      break;
    default:
      break;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            MilkStgo
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              MilkStgo
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              En nuestra empresa, comprendemos la importancia de contar con proveedores confiables en diferentes zonas del país. A diario, recibimos leche de calidad en nuestros centros de acopio, tanto por la mañana como por la tarde, para asegurar la frescura y el sabor excepcional de nuestros productos.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={() => handleButtonClick(1)}>
                Crear un nuevo proveedor
              </Button>
              <Button variant="contained" onClick={() => handleButtonClick(2)}>Listar proveedores</Button>
              <Button variant="contained" onClick={() => handleButtonClick(3)}>Cargar acopios</Button>
              <Button variant="contained" onClick={() => handleButtonClick(4)}>Cargar valores</Button>
              <Button variant="contained" onClick={() => handleButtonClick(5)}>Generar pagos</Button>
              <Button variant="contained" onClick={() => handleButtonClick(6)}>Ver pagos</Button>
            </Stack>
          </Container>
        </Box>
        <Container maxWidth="md">
          {componentToDisplay}
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
