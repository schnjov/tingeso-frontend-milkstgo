import React, { useState } from 'react';
import { Button, Card, CardContent, Checkbox, Grid, TextField, Typography, Snackbar, Alert } from '@mui/material';

const NuevoProveedorFormulario = () => {
  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [afectoARetencion, setAfectoARetencion] = useState(false);
  const [alerta, setAlerta] = useState(null);

  const handleAfectoARetencionChange = (e) => {
    setAfectoARetencion(e.target.checked);
  };

  const handleCloseAlert = () => {
    setAlerta(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un objeto con los datos del proveedor
    const proveedorData = {
      codigo: codigo,
      nombre: nombre,
      categoria: categoria,
      afectoARetencion: afectoARetencion
    };

    // Realizar la solicitud POST al endpoint
    fetch('http://localhost:8083/proveedor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(proveedorData)
    })
      .then(response => {
        if (response.ok) {
          setAlerta({ type: 'success', message: 'Proveedor creado exitosamente' });
          // Limpiar los campos del formulario después de enviar
          setCodigo('');
          setNombre('');
          setCategoria('');
          setAfectoARetencion(false);
        } else {
          setAlerta({ type: 'error', message: 'Error al crear el proveedor' });
        }
      })
      .catch(error => {
        console.error('Error de red:', error);
      });
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Crear un nuevo proveedor
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Código"
                fullWidth
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Nombre"
                fullWidth
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Categoría"
                fullWidth
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Checkbox
                checked={afectoARetencion}
                onChange={handleAfectoARetencionChange}
              />
              <Typography>Afecto a retención</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                disableElevation
                fullWidth
              >
                Crear Proveedor
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
      <Snackbar
        open={!!alerta}
        autoHideDuration={5000}
        onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={alerta?.type}
          sx={{ width: '100%' }}
        >
          {alerta?.message}
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default NuevoProveedorFormulario;
