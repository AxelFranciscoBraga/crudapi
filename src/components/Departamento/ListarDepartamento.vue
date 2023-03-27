<template>
  <router-link to="/creardepartamento" class="btn btn-warning">Crear departamento</router-link>
    <div>
      <div class="card">
        <div class="card-header">Departamentos</div>
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="departamento in departamento" :key="departamento.pkDepartamento" v-on:click="editar(departamento.pkDepartamento)">
                <td>{{ departamento.pkDepartamento }}</td>
                <td>{{ departamento.nombre }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <router-link to="/editar" class="btn btn-info">Editar</router-link>
                    <button
                      type="button"
                      v-on:click="borrarDepartamento(departamento.pkDepartamento)"
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
        departamento: [],
      };
    },
    created: function () {
      this.consultarDepartamentos();
    },
    methods: {
      consultarDepartamentos() {
        axios.get("https://localhost:7241/Departamento").then((result) => {
          console.log(result.data.result);
          this.departamento = result.data.result;
        });
      },
  
      borrarDepartamento(pkDepartamento) {
        console.log(pkDepartamento);
  
        axios.delete("https://localhost:7241/Departamento/" + pkDepartamento);
        // console.log(result.data.result);
        window.location.href = "dashboard";
      },
      editar(pkDepartamento){
          this.$router.push("/editardepartamento/" + pkDepartamento);
        }
    },
  };
  </script>