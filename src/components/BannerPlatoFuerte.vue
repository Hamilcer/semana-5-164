<template>
<div id="platofuerte">
  <top-menu></top-menu>
     <div id="newcarousel2" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
              <li data-target="#newcarousel2" data-slide-to="0" class="active"></li>
              <li data-target="#newcarousel2" data-slide-to="1"></li>
              <li data-target="#newcarousel2" data-slide-to="2"></li>
            </ul>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="./img/camarones-coco.jpg" alt="" width=100% height=500>
                <div class="carousel-caption"> 
                  <h2>Camarones en salsa de coco</h2>
                  <p>Camarones bañados en una deliciosa salsa de Coco y finas hierbas, acompañado de arroz blanco, ensalada de la casa y patacón.</p>                    
            <!-- <a class="btn btn-light" href="https://siaguanta.com/c-tecnologia/que-es-un-servidor-de-dominio/" role="button">Más información</a> -->
            </div>
              </div>
              <div class="carousel-item">
                <img src="./img/spaghetti-bolognese.jpg" alt="" width=100% height=500>
                <div class="carousel-caption">
                  <h2>Spaguetti a la boloñesa</h2>
                  <p>Spaguetti con una deliciosa salsa boloñesa, acompañado de pan francés.</p>                      
                <!-- <a class="btn btn-light" href="https://es.wikipedia.org/wiki/Alojamiento_web" role="button">Más información</a> -->
                </div>  
              </div>
              <div class="carousel-item">
                <img src="./img/churrasco-em-pirenopolis_capa.jpg" alt="" width=100% height=500>
                <div class="carousel-caption">
                  <h2>Carne a la parrilla</h2>
                  <p>Churrasco a la parrilla acompañado de papa a la francesa, ensalada y salsas de la casa.</p>                      
                <!-- <a class="btn btn-light" href="https://www.ibm.com/support/knowledgecenter/es/SSAW57_9.0.5/com.ibm.websphere.nd.multiplatform.doc/ae/cwbs_wbs2.html" role="button">Más información</a> -->
                </div>   
              </div>
            </div>
            <a class="carousel-control-prev" href="#newcarousel2" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#newcarousel2" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
          <div class="card w-90">
      <div class="card-body">
        <h1 class="card-title">Plato principal</h1>
        <p class="card-text">Podrá encontrar una gran variedad de platillos elaborados con ingredientes de la más alta calidad. Contamos con diferentes opciones que incluyen los principales tipos de carnes, además de platillos vegetarianos. Cada una de nuestras opciones viene acompañada de ensalada o ración de verdura, carbohidratos y bebida, debidamente equilibrados.</p>
      </div>
      </div>
         </div>
</template>


<script>
import TopMenu from './TopMenu.vue';
    export default {
        name: 'BannerPlatoFuerte',
        components: {
            TopMenu
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