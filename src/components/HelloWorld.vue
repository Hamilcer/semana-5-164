<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <a class="navbar-brand" href="#">
                <img src="../assets/logo.png" width="30 " height="30"
                     class="d-inline-block align-top " alt=" " loading="lazy">
                    Proyecto Sprint 2</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Inicio<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#news">Noticias</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#team">Equipo</a>
                  </li>
              </ul>
            </div>
          </nav>
</template>

<script>
  export default {
    data: () => ({
    }),
  }
</script>
