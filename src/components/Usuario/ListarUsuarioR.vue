<template>
  <router-link to="/crearusuarior" class="btn btn-warning">Crear usuario</router-link>
    <div>
      <div class="card">
        <div class="card-header">Usuarios</div>
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Password</th>
                <th>Fecha de registro</th>
                <th>Empleado</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="usuario in usuario" :key="usuario.pkUsuario" v-on:click="editar(usuario.pkUsuario)">
                <td>{{ usuario.pkUsuario }}</td>
                <td>{{ usuario.user }}</td>
                <td>{{ usuario.password }}</td>
                <td>{{ usuario.fechaRegistro }}</td>
                <td>{{ usuario.fkEmpleado }}</td>
                <td>{{ usuario.fkRol }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <router-link to="/editarusuarior" class="btn btn-info">Editar</router-link>
                    <button
                      type="button"
                      v-on:click="borrarUsuario(usuario.pkUsuario)"
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
        usuario: [],
      };
    },
    created: function () {
      this.consultarUsuarios();
    },
    methods: {
      consultarUsuarios() {
        axios.get("https://localhost:7241/Usuarios").then((result) => {
          console.log(result.data.result);
          this.usuario = result.data.result;
        });
      },
  
      borrarUsuario(pkUsuario) {
        console.log(pkUsuario);
  
        axios.delete("https://localhost:7241/Usuarios/" + pkUsuario);
        // console.log(result.data.result);
        window.location.href = "dashboard";
      },
      editar(pkUsuario){
          this.$router.push("/editarusuarior/" + pkUsuario);
        }
    },
  };
  </script>