<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Agregar usuario</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for="">Nombre:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="cliente.nombre"
                aria-describedby="helpId"
                id="nombre"
                placeholder="Nombre"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del usuario</small
              >
            </div>
            <div class="form-group">
              <label for="">Apellido:</label>
              <input
                type="text"
                class="form-control"
                name="apellido"
                id="apellido"
                v-model="cliente.apellido"
                aria-describedby="helpId"
                placeholder="Apellido"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del proveedor</small
              >
            </div>
            <div class="form-group">
              <label for="">Telefono:</label>
              <input
                type="text"
                class="form-control"
                name="telefono"
                id="telefono"
                v-model="cliente.telefono"
                aria-describedby="helpId"
                placeholder="Telefono"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el telefono del usuario</small
              >
            </div>
            <div class="form-group">
              <label for="">Email:</label>
              <input
                type="text"
                class="form-control"
                name="email"
                id="email"
                v-model="cliente.email"
                aria-describedby="helpId"
                placeholder="Email"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el email del usuario</small
              >
            </div><div class="form-group">
              <label for="">Direccion:</label>
              <input
                type="text"
                class="form-control"
                name="direccion"
                id="direccion"
                v-model="cliente.direccion"
                aria-describedby="helpId"
                placeholder="Direccion"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la direccion del usuario</small
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
        cliente: {},
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.cliente);
  
        var datosEnviar = {
          nombre: this.cliente.nombre,
          apellido: this.cliente.apellido,
          telefono: this.cliente.telefono,
          email: this.cliente.email,
          direccion: this.cliente.direccion,
        };
  
        axios
          .post("https://localhost:7241/Cliente", datosEnviar)
          .then((result) => {
            console.log(result.data.result);
            window.location.href = "dashboard";
          });
      },
    },
  };
  </script>