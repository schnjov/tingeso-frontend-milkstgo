import React, { useState, useEffect } from 'react';

function GenerarPagos({ quincena }) {
  const [pagos, setPagos] = useState(null);

  useEffect(() => {

  fetch('http://localhost:8082/planilla/pagos?quincena=' + quincena, {
      method: 'POST',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); 
      })
      .then(data => {
        setPagos(data);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });


  if (pagos === null) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Resultado de la generación de pagos</h2>
      <ul>
        {pagos.map((pago, index) => (
          <li key={index}>{pago}</li>
        ))}
      </ul>
    </div>
  );
})};

export default GenerarPagos;
