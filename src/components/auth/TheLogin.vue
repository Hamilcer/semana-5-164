<template>
<div>
<top-menu-1></top-menu-1>
    <br><br><br><br>
    <v-layout align-center justify-center>
        <!-- <v-row> -->
            <v-flex xs12 sm8 md6 lg5 x14>
        
                <v-card>
                    <v-toolbar dark color="silver darken-3">
                        <v-toolbar-title>
                            Acceso al sistema
                        </v-toolbar-title>
                    </v-toolbar>
                <!-- <v-card-title></v-card-title> -->
                <v-card-text>
                    <v-form
                        ref="form"
                        lazy-validation
                    >

                        <v-text-field
                        v-model="login.email"
                        label="E-mail"
                        required
                        ></v-text-field>

                        <v-text-field
                        v-model="login.password"
                        label="Contraseña"
                        type="password"
                        required
                        ></v-text-field>

                    </v-form>

                </v-card-text>
                <v-card-actions>
                        <v-btn
                        :disabled="!(this.login.password && this.login.email)"
                        color="info"
                        class="mr-4"
                        block
                        @click="loginUser"
                        >
                        Login
                        </v-btn>
                </v-card-actions>
                </v-card>
            </v-flex>
        <!-- </v-row> -->
    </v-layout>
</div>
</template>
<script>
import swal from 'sweetalert';
import VueJwtDecode from 'vue-jwt-decode';
import axios from 'axios'
import TopMenu1 from '../TopMenu1.vue';

export default {
    name:'TheLogin',
    components:{
        TopMenu1

    },
    data(){
        return{
            login: {
                email:'',
                password: ''
            }
        }
    },
    
    // envio al usuario a /autenticado/categoria, si hay un token
    beforeCreate(){
        this.$store.dispatch('autoLogin')? this.$router.push({path: '/autenticado/categoria'}) : false;
  },
    methods:{
        loginUser(){
            axios.post('http://localhost:3000/api/usuario/login', this.login)
            .then(response=>{
                return response.data;
            })
            // si el usuario es correcto guardo el token y envio al usuario a /autenticado/categoria, si no disparo una alerta de error
            .then(data =>{
                this.$store.dispatch('guardarToken', data.tokenReturn)
                this.$router.push({path: '/autenticado/categoria'});
                swal ("Éxito!!",'Login correcto, beinvenido!',"success");
                console.log(data);
            })
            .catch(error =>{
                swal ("Oops!","Algo salió mal","error");
                console.log(error)
                return error
            })
            
        }
    }
}
</script>

<style scoped>

.main-section{
    margin:0 auto;
    margin-top:25%;
    padding: 0;
}

.modal-content{
    background-color: #3b4652; 
    opacity: .90;
    padding: 0 20px;
    box-shadow: 0px 0px 3px #848484;
}
.user-img{
    margin-top:-50px;
    margin-bottom: 35px;
}
.user-img img{
    width: 100px;
    height: 100px;
    box-shadow: 0px 0px 3px #848484;
    border-radius: 50%;
    background-color: #3b4652;
}

.form-group input{
    height: 42px;
    font-size: 18px;
    border: 0;
    padding-left: 54px;
    border-radius: 5px;
}

.form-group::before{
    font-family:"Font Awesome\ 5 Free";
    position: absolute;
    left: 28px;
    font-size: 22px;
    padding-top: 4px;
}

.form-group#user-group::before{
    content: "\f007";
}

.form-group#password-group::before{
    content: "\f023";
}

button{
    width: 60%;
    margin: 5px 0 25px ;
}
</style>