<template>
  <router-link to="/crearpuesto" class="btn btn-warning">Crear Puesto</router-link>
    <div>
      <div class="card">
        <div class="card-header">Puestos</div>
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="puesto in puesto" :key="puesto.pkpuesto" v-on:click="editar(puesto.pkpuesto)">
                <td>{{ puesto.pkpuesto }}</td>
                <td>{{ puesto.nombre }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <router-link to="/editarpuesto" class="btn btn-info">Editar</router-link>
                    <button
                      type="button"
                      v-on:click="borrarPuesto(puesto.pkpuesto)"
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
        puesto: [],
      };
    },
    created: function () {
      this.consultarPuesto();
    },
    methods: {
      consultarPuesto() {
        axios.get("https://localhost:7241/Puesto").then((result) => {
          console.log(result.data.result);
          this.puesto = result.data.result;
        });
      },
  
      borrarPuesto(pkpuesto) {
        console.log(pkpuesto);
  
        axios.delete("https://localhost:7241/Puesto/" + pkpuesto);
        // console.log(result.data.result);
        window.location.href = "dashboard";
      },
      editar(pkpuesto){
          this.$router.push("/editarpuesto/" + pkpuesto);
        }
    },
  };
  </script>