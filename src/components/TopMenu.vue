<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">

    <a class="navbar-brand" href="#">Delicious Food: ¡Toda una experiencia en sabor!</a>
     <button class="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" aria-current="page" href="/">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="About">Sobre nosotros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Login">Inicio de sesión</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#platofuerte">Plato principal</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#postres">Postres</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#bebida">Bebidas</a>
        </li>
      </ul>
    </div>

</nav>
</template>

<script>

    export default {
        name: 'TopMenu',
    };
</script>