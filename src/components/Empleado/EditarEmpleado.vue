<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Editar Empleado</div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="">Nombre:</label>
            <input
              type="text"
              class="form-control"
              name="nombre"
              v-model="form.nombre"
              aria-describedby="helpId"
              id="nombre"
              placeholder="Nombre"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa el nombre del empleado</small
            >
          </div>
          <div class="form-group">
            <label for="">Apellido:</label>
            <input
              type="text"
              class="form-control"
              name="apellido"
              v-model="form.apellidos"
              aria-describedby="helpId"
              id="apellido"
              placeholder="Apellido"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa el apellido del empleado</small
            >
          </div>
          <div class="form-group">
            <label for="">Direccion:</label>
            <input
              type="text"
              class="form-control"
              name="apellido"
              v-model="form.direccion"
              aria-describedby="helpId"
              id="direccion"
              placeholder="Direccion"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa la direccion del empleado</small
            >
          </div>
          <div class="form-group">
            <label for="">Ciudad:</label>
            <input
              type="text"
              class="form-control"
              name="ciudad"
              v-model="form.ciudad"
              aria-describedby="helpId"
              id="ciudad"
              placeholder="Ciudad"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa la ciudad del empleado</small
            >
          </div>
          <div class="form-group">
            <label for="">Puesto:</label>
            <input
              type="text"
              class="form-control"
              name="puesto"
              v-model="form.fkPuesto"
              aria-describedby="helpId"
              id="puesto"
              placeholder="Puesto"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa el apellido del empleado</small
            >
          </div>
          <div class="form-group">
            <label for="">Departamento:</label>
            <input
              type="text"
              class="form-control"
              name="departamento"
              v-model="form.fkDepartamento"
              aria-describedby="helpId"
              id="departamento"
              placeholder="Departamento"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa el apellido del empleado</small
            >
          </div>
          <br />

          <div class="btn-group" role="group">
            <button type="submit" class="btn btn-success" v-on:click="editar()">Editar</button>
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
      empleado: null,
      form:{
        "nombre":"",
        "apellidos":"",
        "direccion":"",
        "ciudad":"",
        "fkPuesto":"",
        "fkDepartamento":""
      }
    };
  },
  methods:{
    editar(){
      axios.put("https://localhost:7241/Empleado/" + this.empleado, this.form)
      .then(data =>{
        console.log(data);
      });
      this.$router.push("/dashboard");
    }
  },
  mounted:function(){
    this.empleado = this.$route.params.pkEmpleado;
    console.log(this.empleado);
    axios.get("https://localhost:7241/Empleado/" + this.empleado)
    .then(datos =>{
      console.log(datos);
      this.form.nombre = datos.data.value.result.nombre;
      this.form.apellidos = datos.data.value.result.apellidos;
      this.form.direccion = datos.data.value.result.direccion;
      this.form.ciudad = datos.data.value.result.ciudad;
      this.form.fkPuesto = datos.data.value.result.fkPuesto;
      this.form.fkDepartamento = datos.data.value.result.fkDepartamento;
      console.log(this.form);
    })
  }
};
</script>