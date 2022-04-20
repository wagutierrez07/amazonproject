import React from 'react';
const Navbar = ()=>{

return(
<nav className="navbar" >
  <h1>Main</h1>
    <div className="links" >
      <a href="/">Inicio</a>
      <a href="/series">Series</a>
      <a href="/peliculas">Pelicuas</a>
      <a href="/about">Iniciar sesion</a>
      <a href="/peliculas">Suscribirse</a>
      <a href="/about">Sobre Nosotros</a>
    </div>
</nav>

  );

}

export default Navbar;
