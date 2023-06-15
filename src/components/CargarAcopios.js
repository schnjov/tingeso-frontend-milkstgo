import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Snackbar, Alert } from '@mui/material';

const CargarAcopios = () => {
  const [file, setFile] = useState(null);
  const [alerta, setAlerta] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCloseAlert = () => {
    setAlerta(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      setAlerta({ type: 'error', message: 'Por favor, selecciona un archivo' });
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    fetch('http://localhost:8080/acopio/save', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (response.status === 201) {
          setAlerta({ type: 'success', message: 'Archivo cargado exitosamente' });
          // Limpiar el campo del archivo después de enviar
          setFile(null);
        } else {
          setAlerta({ type: 'error', message: 'Error al cargar el archivo' });
        }
      })
      .catch(error => {
        setAlerta({ type: 'success', message: 'Archivo cargado exitosamente' });
      })
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Subir archivo Excel
        </Typography>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept=".xlsx,.xls"
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            disableElevation
          >
            Subir Archivo
          </Button>
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

export default CargarAcopios;