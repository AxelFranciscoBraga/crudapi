<template>
  <router-link to="/crearfactura" class="btn btn-warning">Crear factura</router-link>
    <div>
      <div class="card">
        <div class="card-header">Facturas</div>
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Razon social</th>
                <th>fecha</th>
                <th>RFC</th>
                <th>Cliente</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="factura in factura" :key="factura.pkFactura" v-on:click="editar(factura.pkFactura)">
                <td>{{ factura.pkFactura }}</td>
                <td>{{ factura.razonSocial }}</td>
                <td>{{ factura.fecha }}</td>
                <td>{{ factura.rfc }}</td>
                <td>{{ factura.cliente.nombre }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <router-link to="/editar" class="btn btn-info">Editar</router-link>
                    <button
                      type="button"
                      v-on:click="borrarFactura(factura.pkFactura)"
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
        factura: [],
      };
    },
    created: function () {
      this.consultarFactura();
    },
    methods: {
      consultarFactura() {
        axios.get("https://localhost:7241/Factura").then((result) => {
          console.log(result.data.result);
          this.factura = result.data.result;
        });
      },
  
      borrarFactura(pkFactura) {
        console.log(pkFactura);
  
        axios.delete("https://localhost:7241/Factura/" + pkFactura);
        // console.log(result.data.result);
        window.location.href = "dashboard";
      },
      editar(pkFactura){
          this.$router.push("/editarfactura/" + pkFactura);
        }
    },
  };
  </script>