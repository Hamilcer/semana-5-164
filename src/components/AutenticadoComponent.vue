<template>
  <v-app id="inspire">
     
        <v-navigation-drawer
          src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
          color="blue"
          dark
          expand-on-hover
        >
          <v-list class="pt-6" >
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="title">
                  {{ this.$store.state.user.nombre }}
                </v-list-item-title>
                <v-list-item-subtitle> {{this.$store.state.user.rol}} </v-list-item-subtitle>
                <v-list-item-subtitle> {{this.$store.state.user.email}} </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
            <v-list-item link color="white" :to="{ name: 'Home' }">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <br>
  
          <v-divider></v-divider>
  
          <v-list
            nav
            dense
          >
            
            <v-list-item link :to="{ name: 'Categoria' }">
              <v-list-item-icon>
                <v-icon>mdi-clipboard-list</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Categorias</v-list-item-title>
            </v-list-item>

            <v-list-item link :to="{ name: 'Articulo' }">
              <v-list-item-icon>
                <v-icon>mdi-clipboard-list-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Articulos</v-list-item-title>
            </v-list-item>

            <v-list-item link :to="{ name: 'Usuario' }" v-if="this.$store.state.user.rol === 'Administrador'">
              <v-list-item-icon>
                <v-icon>mdi-account-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Usuarios</v-list-item-title>
            </v-list-item>

          </v-list>
          <v-spacer></v-spacer>
          <template v-slot:append>
          <v-list-item >
              <v-list-item-icon>
                <v-icon >mdi-logout</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
              <v-btn block color="accent" @click="salir()">
                Logout
              </v-btn>
              </v-list-item-title>
          </v-list-item>
          </template>


        </v-navigation-drawer>
      <v-container class="pt-12">
        <div class="hola"></div>
        <router-view />
      </v-container>
      
  </v-app>

</template>

<script>
export default {
  name: "SeguraComponent",

  components: {},

  data: () => ({
    //
    drawer: null,
  }),
  created() {
    this.$store.dispatch("autoLogin");
  },
  methods: {
    salir() {
      this.$store.dispatch("salir");
    },
  },
};
</script>

<style scoped>
  .v-navigation-drawer{
    height: 100vh;
    position: fixed;
    z-index: 2;
  }
  .hola {
    background-image: url("https://github.com/Hamilcer/nothing/blob/main/background4.png?raw=true");
    height: 100vh;
    width: 100vw;
    position: fixed;
    left: 0;
    top: 0;
    filter: blur(1px);
    background-size: cover;
  }

</style>
