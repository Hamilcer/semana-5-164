<template>
<div id ="bebida">
     <div id="newcarousel1" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
              <li data-target="#newcarousel1" data-slide-to="0" class="active"></li>
              <li data-target="#newcarousel1" data-slide-to="1"></li>
              <li data-target="#newcarousel1" data-slide-to="2"></li>
            </ul>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="./img/whisky.jpg" alt="" width=100% height=500>
                <div class="carousel-caption"> 
                  <h2>Whisky de malta</h2>
                  <p>Bebida alcohólica obtenida a partir de la destilación de la malta.</p>                    
            <!-- <a class="btn btn-light" href="https://siaguanta.com/c-tecnologia/que-es-un-servidor-de-dominio/" role="button">Más información</a> -->
            </div>
              </div>
              <div class="carousel-item">
                <img src="./img/vino-tinto.jpg" alt="" width=100% height=500>
                <div class="carousel-caption">
                  <h2>Vino Tinto</h2>
                  <p>Acompañe sus comidas con una deliciosa copa de nuestro grupo de selectos vinos.</p>                      
                <!-- <a class="btn btn-light" href="https://es.wikipedia.org/wiki/Alojamiento_web" role="button">Más información</a> -->
                </div>  
              </div>
              <div class="carousel-item">
                <img src="./img/Limonada.jpg" alt="" width=100% height=500>
                <div class="carousel-caption">
                  <h2>Limonada natural</h2>
                  <p>Refrescante limonada preparada al instante, pidala en nuestras variaciones: Natural, Coco y Cerezada..</p>                      
                <!-- <a class="btn btn-light" href="https://www.ibm.com/support/knowledgecenter/es/SSAW57_9.0.5/com.ibm.websphere.nd.multiplatform.doc/ae/cwbs_wbs2.html" role="button">Más información</a> -->
                </div>   
              </div>
            </div>
            <a class="carousel-control-prev" href="#newcarousel1" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#newcarousel1" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
          <div class="card w-90">
      <div class="card-body">
        <h1 class="card-title">Bebidas</h1>
        <p class="card-text">Acompañe sus platillos con alguno de nuestros selectos licores. También le ofrecemos jugos naturales.</p>
      </div>
      </div>
         </div>
</template>


<script>
    export default {
        name: 'BannerBebidas',
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