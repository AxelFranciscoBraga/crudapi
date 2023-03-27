<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Agregar usuario</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for="">User:</label>
              <input
                type="text"
                class="form-control"
                name="user"
                v-model="usuario.user"
                aria-describedby="helpId"
                id="user"
                placeholder="User"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del departamento</small
              >
            </div>
            <div class="form-group">
              <label for="">Password:</label>
              <input
                type="text"
                class="form-control"
                name="password"
                v-model="usuario.password"
                aria-describedby="helpId"
                id="password"
                placeholder="Password"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del departamento</small
              >
            </div>
            <div class="form-group">
              <label for="">Fecha de registro:</label>
              <input
                type="text"
                class="form-control"
                name="fechaRegistro"
                v-model="usuario.fechaRegistro"
                aria-describedby="helpId"
                id="fechaRegistro"
                placeholder="Fecha de registro"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del departamento</small
              >
            </div>
            <div class="form-group">
              <label for="">Empleado:</label>
              <input
                type="text"
                class="form-control"
                name="empleado"
                v-model="usuario.fkEmpleado"
                aria-describedby="helpId"
                id="empleado"
                placeholder="Empleado"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del departamento</small
              >
            </div>
            <div class="form-group">
              <label for="">Rol:</label>
              <input
                type="text"
                class="form-control"
                name="Rol"
                v-model="usuario.fkRol"
                aria-describedby="helpId"
                id="rol"
                placeholder="Rol"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del departamento</small
              >
            </div>
            <br />
  
            <div class="btn-group" role="group">
              <button type="submit" class="btn btn-success">Agregar</button>
              <router-link to="/dashboard" class="btn btn-danger"
                >Cancelar</router-link
              >
            </div>
          </form>
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
        usuario: {},
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.usuario);
  
        var datosEnviar = {
          user: this.usuario.user,
          password: this.usuario.password,
          fechaRegistro: this.usuario.fechaRegistro,
          fkEmpleado: this.usuario.fkEmpleado,
          fkRol: this.usuario.fkRol
        };
  
        axios
          .post("https://localhost:7241/Usuarios", datosEnviar)
          .then((result) => {
            console.log(result.data.result);
            window.location.href = "dashboard";
          });
      },
    },
  };
  </script>