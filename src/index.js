// Footer.js
import './Estilo/estilo1.css';  // Importa los estilos globales
import React from 'react';
import ReactDOM from 'react-dom';

function Footer() {
  return (
    <footer>
        <h2 id="foot1">The King</h2>
        <p id="foot2">Restaurant</p>
        <p id="cel"><div class="iconoF" id="iconCel"/> Cel: 767 117 5953</p>
        <p id="Ubicacion"><div class="iconoF" id="iconUb"/>Ubicación: J. Inocente Lugo pte 6, Ciudad Altamirano, México</p>
    </footer>
  );
}

function Header() {
  return(
    <div id="logo" onclick="window.location.href='index.html'"></div>
  );
}

// Renderizar el componente en el div con id "root"
ReactDOM.render(<Footer />, document.getElementById('footerr'));
ReactDOM.render(<Header />, document.getElementById('header'));
