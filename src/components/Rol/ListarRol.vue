<template>
  <router-link to="/crearrol" class="btn btn-warning">Crear rol</router-link>
    <div>
      <div class="card">
        <div class="card-header">Roles</div>
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rol in rol" :key="rol.pkRol" v-on:click="editar(rol.pkRol)">
                <td>{{ rol.pkRol }}</td>
                <td>{{ rol.nombre }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <router-link to="/editarrol" class="btn btn-info">Editar</router-link>
                    <button
                      type="button"
                      v-on:click="borrarRol(rol.pkRol)"
                      class="btn btn-danger"
                    >
                      Eliminar</button
                    >
                    </div>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  <script>
  import axios from "axios";
  import {RouterView} from 'vue-router';
  export default {
    data() {
      return {
        rol: [],
      };
    },
    created: function () {
      this.consultarRol();
    },
    methods: {
      consultarRol() {
        axios.get("https://localhost:7241/Rol").then((result) => {
          console.log(result.data.result);
          this.rol = result.data.result;
        });
      },
  
      borrarRol(pkRol) {
        console.log(pkRol);
  
        axios.delete("https://localhost:7241/Rol/" + pkRol);
        // console.log(result.data.result);
        window.location.href = "dashboard";
      },
      editar(pkRol){
          this.$router.push("/editarrol/" + pkRol);
        }
    },
  };
  </script>