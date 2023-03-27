<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Agregar factura</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for="">Razon social:</label>
              <input
                type="text"
                class="form-control"
                name="razonSocial"
                v-model="factura.razonSocial"
                aria-describedby="helpId"
                id="razonSocial"
                placeholder="Razon social"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del departamento</small
              >
            </div>
            <div class="form-group">
              <label for="">Fecha:</label>
              <input
                type="text"
                class="form-control"
                name="fecha"
                v-model="factura.fecha"
                aria-describedby="helpId"
                id="fecha"
                placeholder="Fecha"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del departamento</small
              >
            </div>
            <div class="form-group">
              <label for="">RFC:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="factura.rfc"
                aria-describedby="helpId"
                id="rfc"
                placeholder="RFC"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del departamento</small
              >
            </div>
            <div class="form-group">
              <label for="">Cliente:</label>
              <input
                type="text"
                class="form-control"
                name="fkCliente"
                v-model="factura.fkCliente"
                aria-describedby="helpId"
                id="fkCliente"
                placeholder="Cliente"
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
        factura: {},
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.factura);
  
        var datosEnviar = {
          razonSocial: this.factura.razonSocial,
          fecha: this.factura.fecha,
          rfc: this.factura.rfc,
          fkCliente: this.factura.fkCliente
        };
  
        axios
          .post("https://localhost:7241/Factura", datosEnviar)
          .then((result) => {
            console.log(result.data.result);
            window.location.href = "dashboard";
          });
      },
    },
  };
  </script>