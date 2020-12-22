<template>

  <v-footer
    dark
    padless
  >
  <div class="container-fluid text-center text-md-center">
       <div class="row">
           <div class="col-md-6 mt-md-0 mt-0 align-self-center">
                <v-card
                flat
                tile
                class="lighten-1 gray--text text-center"
                >

                <v-card-title class="lighten-1 gray--text pt-0">
                    Contáctenos
                </v-card-title>

                <v-card-text class="lighten-1 gray--text pt-0">
                    <b>Correo electrónico:</b>  <u>servicioalcliente@deliciousfood.com</u>
                </v-card-text>

                <v-card-text class="lighten-1 gray--text pt-0">
                    <b>Pbx:</b>  (+57) 555-2335
                </v-card-text>

                 <v-card-text class="lighten-1 gray--text pt-0">
                    <a href="https://www.w3schools.com/bootstrap/bootstrap_carousel.asp">Enlace al repositorio de GitHub</a>
                </v-card-text>
                </v-card>   
            </div>

            <div class="col-md-6 mt-md-0 mt-0 align-self-center">
                <v-card
                flat
                tile
                class="lighten-1 gray--text text-center"
                >

                <v-card-title class="lighten-1 gray--text pt-0">
                    Estamos ubicados en:
                </v-card-title>

                <v-card-text class="lighten-1 gray--text pt-0">
                    Bogotá D.C
                    <br>Medellín
                    <br>Cartagena
                    <br>Barranquilla
                </v-card-text>
                </v-card>   
            </div>

            <div class="col-md-12 mt-md-0 mt-3 align-self-center">
                <v-card
                flat
                tile
                class="lighten-1 gray--text text-center"
                >
                <v-card-text class="gray--text">
                    {{ new Date().getFullYear() }} — <strong>Delicious Food</strong>
                </v-card-text>
                </v-card>
                
            </div>
            
        </div>
        
    </div>
    
  </v-footer>
  
</template>

<script>
    export default {
        name: 'SectionFooter',
    };
</script>