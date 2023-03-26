<template>
  <router-link to="/crear" class="btn btn-warning">Crear Usuario</router-link>
    <div>
      <div class="card">
        <div class="card-header">Clientes</div>
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Telefono</th>
				        <th>Email</th>
				        <th>Direccion</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cliente in cliente" :key="cliente.pkCliente" v-on:click="editar(cliente.pkCliente)">
                <td>{{ cliente.pkCliente }}</td>
                <td>{{ cliente.nombre }}</td>
                <td>{{ cliente.apellido }}</td>
                <td>{{ cliente.telefono }}</td>
				        <td>{{ cliente.email }}</td>
				        <td>{{ cliente.direccion }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <router-link to="/editar" class="btn btn-info">Editar</router-link>
                    <button
                      type="button"
                      v-on:click="borrarCliente(cliente.pkCliente)"
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
        cliente: [],
      };
    },
    created: function () {
      this.consultarClientes();
    },
    methods: {
      consultarClientes() {
        axios.get("https://localhost:7241/Cliente").then((result) => {
          console.log(result.data.result);
          this.cliente = result.data.result;
        });
      },
  
      borrarCliente(pkCliente) {
        console.log(pkCliente);
  
        axios.delete("https://localhost:7241/Cliente/" + pkCliente);
        // console.log(result.data.result);
        window.location.href = "dashboard";
      },
      editar(pkCliente){
          this.$router.push("/editar/" + pkCliente);
        }
    },
  };
  </script>