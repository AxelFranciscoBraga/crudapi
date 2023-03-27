<template>
  <router-link to="/crearempleado" class="btn btn-warning">Crear empleado</router-link>
    <div>
      <div class="card">
        <div class="card-header">Empleados</div>
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apelldios</th>
                <th>Direccion</th>
                <th>Ciudad</th>
                <th>Puesto</th>
                <th>Departamento</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="empleado in empleado" :key="empleado.pkEmpleado" v-on:click="editar(empleado.pkEmpleado)">
                <td>{{ empleado.pkEmpleado }}</td>
                <td>{{ empleado.nombre }}</td>
                <td>{{ empleado.apellidos }}</td>
                <td>{{ empleado.direccion }}</td>
                <td>{{ empleado.ciudad }}</td>
                <td>{{ empleado.puesto.nombre }}</td>
                <td>{{ empleado.departamento.nombre }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <router-link to="/editarempleado" class="btn btn-info">Editar</router-link>
                    <button
                      type="button"
                      v-on:click="borrarEmpleado(empleado.pkEmpleado)"
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
        empleado: [],
      };
    },
    created: function () {
      this.consultarEmpleados();
    },
    methods: {
      consultarEmpleados() {
        axios.get("https://localhost:7241/Empleado").then((result) => {
          console.log(result.data.result);
          this.empleado = result.data.result;
        });
      },
  
      borrarEmpleado(pkEmpleado) {
        console.log(pkEmpleado);
  
        axios.delete("https://localhost:7241/Empleado/" + pkEmpleado);
        // console.log(result.data.result);
        window.location.href = "dashboard";
      },
      editar(pkEmpleado){
          this.$router.push("/editarempleado/" + pkEmpleado);
        }
    },
  };
  </script>