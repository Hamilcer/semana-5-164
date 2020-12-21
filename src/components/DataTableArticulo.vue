<template>
  <div id="app">
    <v-app id="inspire">
      <v-data-table
        :headers="headers"
        :items="articulos"
        sort-by="calories"
        :loading="cargando"
        loading-text="Cargando... Por favor espere"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Articulos</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  Agregar Articulo
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>

                      <v-col cols="12">
                        <v-text-field
                          v-model="editedItem.id"
                          label="ID"
                        ></v-text-field>
                      </v-col> 

                      <v-col cols="12">
                        <v-text-field
                          v-model="editedItem.nombre"
                          label="Nombre"
                        ></v-text-field>
                      </v-col>
                      
                      <v-col cols="12">
                        <v-textarea
                          v-model="editedItem.descripcion"
                          label="Descripcion"
                          auto-grow
                          no-resize
                          counter="250"
                        ></v-textarea>
                      </v-col>
                      
                      <v-col cols="12">
                        <v-select
                          v-model="categoria"
                          label="Categoria"
                          :items="categorias"
                          item-text="nombre"
                          item-value="id"
                          return-object
                        ></v-select>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="editedItem.codigo"
                          label="Codigo"
                        ></v-text-field>
                      </v-col>
          
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancelar
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save"> Guardar </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogChange" max-width="500px">
              <v-card>
                <v-card-title class="headline"
                  >Seguro quieres cambiar el estado?</v-card-title
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeChange"
                    >Cancelar</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="changeStateConfirm"
                    >OK</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon medium @click="changeState(item)">
            <template v-if="item.estado"> mdi-toggle-switch </template>
            <template v-else> mdi-toggle-switch-off-outline </template>
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize"> Reset </v-btn>
        </template>
      </v-data-table>
    </v-app>

  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    dialog: false,
    dialogChange: false,
    cargando: true,
    headers: [
      { text: "ID", value: "id" },
      {
        text: "Nombre",
        align: "start",
        sortable: true,
        value: "nombre",
      },
      { text: "Descripcion", value: "descripcion" },
      { text: "Categoria", value: "categoria.nombre" },
      { text: "Codigo", value: "codigo" },
      { text: "Estado", value: "estado" },
      { text: "Editar", value: "actions", sortable: false },
    ],
    articulos: [],
    categorias: [],
    categoria: '',
    editedIndex: -1,
    editedItem: {
      id: 0,
      nombre: "",
      descripcion: "",
      codigo: "",
      estado: 0,
      categoria: {
        id: 0,
        nombre: "",
      }
    },
    defaultItem: {
      id: 0,
      nombre: "",
      descripcion: "",
      codigo: "",
      estado: 0,
      categoria: {
        id: 0,
        nombre: "",
      }
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nueva articulo" : "Editar articulo";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogChange(val) {
      val || this.closeChange();
    },
  },

  created() {
    this.list();
    this.listCategorias();
  },

  methods: {
    list() {
      axios
        .get("http://localhost:3000/api/articulo/list")
        .then((response) => {
          this.articulos = response.data;
          this.cargando = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    listCategorias() {
      axios
        .get("http://localhost:3000/api/categoria/list",{
          headers: {
            token: this.$store.state.token
          }
        })
        .then(response => {
          this.categorias = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    editItem(item) {
      this.editedIndex = item.id
      this.categoria = item? item.categoria : '';
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    changeState(item) {
      this.editedIndex = item.id
      this.editedItem = Object.assign({}, item);
      this.dialogChange = true;
    },

    changeStateConfirm() {
      if (this.editedItem.estado === 1) {
        axios
          .put("http://localhost:3000/api/articulo/deactivate", {
            id: this.editedItem.id,
          },{
          headers: {
            token: this.$store.state.token
          }
        })
          .then((response) => {
            this.list();
          })
          .catch((error) => {
            return error;
          });
      } else {
        axios
          .put("http://localhost:3000/api/articulo/activate", {
            id: this.editedItem.id,
          },{
          headers: {
            token: this.$store.state.token
          }
        })
          .then((response) => {
            this.list();
          })
          .catch((error) => {
            return error;
          });
      }
      this.closeChange();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.categoria = ''
        this.editedIndex = -1;
      });
    },

    closeChange() {
      this.dialogChange = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        axios
          .put("http://localhost:3000/api/articulo/update", {
            "id": this.editedItem.id,
            "nombre": this.editedItem.nombre,
            "descripcion": this.editedItem.descripcion,
            "codigo": this.editedItem.codigo,
            "categoria": this.categoria.id,
          },{
          headers: {
            token: this.$store.state.token
          }
        })
          .then((response) => {
            this.list();
          })
          .catch((error) => {
            return error;
          });
      } else {
        axios
          .post("http://localhost:3000/api/articulo/add", {
            "estado": 1,
            "nombre": this.editedItem.nombre,
            "descripcion": this.editedItem.descripcion,
            "codigo": this.editedItem.codigo,
            "categoriaId": this.categoria.id,
          },{
          headers: {
            token: this.$store.state.token
          }
        })
          .then((response) => {
            this.list();
          })
          .catch((error) => {
            return error;
          });
      }
      this.close();
    },
  },
};
</script>

<style scoped>
  .v-data-table {
    box-shadow:rgba(0, 0, 0, .2) 0px 0px 6px 6px;
    
  }
</style>