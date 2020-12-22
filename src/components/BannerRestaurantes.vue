<template>
<div>
     <div id="newcarousel" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
              <li data-target="#newcarousel" data-slide-to="0" class="active"></li>
              <li data-target="#newcarousel" data-slide-to="1"></li>
              <li data-target="#newcarousel" data-slide-to="2"></li>
            </ul>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="./img/Bogotá.jpg" alt="" width=100% height=500>
                <div class="carousel-caption"> 
                  <h2>Nuestra sede en Bogotá</h2>
                  <!-- <p>Masa dulce en forma de disco que se usa como base para enrollar crema blanca y frutas.</p>                     -->
            <!-- <a class="btn btn-light" href="https://siaguanta.com/c-tecnologia/que-es-un-servidor-de-dominio/" role="button">Más información</a> -->
            </div>
              </div>
              <div class="carousel-item">
                <img src="./img/Medllín.jpg" alt="" width=100% height=500>
                <div class="carousel-caption">
                  <h2>Nuestra sede en Medellín</h2>
                  <!-- <p>Postre elaborado con merengue crujiente por fuera y muy cremoso y ligero por dentro.</p>                       -->
                <!-- <a class="btn btn-light" href="https://es.wikipedia.org/wiki/Alojamiento_web" role="button">Más información</a> -->
                </div>  
              </div>
              <div class="carousel-item">
                <img src="./img/Barranquilla.jpg" alt="" width=100% height=500>
                <div class="carousel-caption">
                  <h2>Nuestra sede en Barranquilla</h2>
                  <!-- <p>Postre tradicional de masa negra con sabor a chocolate.</p>                       -->
                <!-- <a class="btn btn-light" href="https://www.ibm.com/support/knowledgecenter/es/SSAW57_9.0.5/com.ibm.websphere.nd.multiplatform.doc/ae/cwbs_wbs2.html" role="button">Más información</a> -->
                </div>   
              </div>
            </div>
            <a class="carousel-control-prev" href="#newcarousel" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#newcarousel" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
          <div class="card w-90">
      <div class="card-body">
        <h1 class="card-title">Nosotros</h1>
        <p class="card-text">Somos una cadena de restaurantes ubicada en las principales ciudades del país, ofrecemos a nuestros clientes alimentos de excelente calidad, preseleccionados y con un delicioso sabor. Disfrute de una nueva experiencia haciendo uso de nuestra aplicación para tomar su orden en tipos de pandemia.</p>
        <br>
        <h5>Con el uso de esta página web logramos aumentar nuestras ventas durante el año 2020.</h5>
      </div>
</div>
</div>


</template>


<script>
    export default {
        name: 'BannerPostres',
        components: {
            
        }
 };
</script>

<style>
/*Estilos del Carousel Bootstrap*/
.carousel-inner img {
    width: 100%;
    height: 500;
    }
.carousel-caption {
    position: absolute; 
    right: 15%;
    left: 15%;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5); /* Añadir para conseguir el fondo con opacidad */
    }
</style>