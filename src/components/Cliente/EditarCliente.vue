<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Agregar usuario</div>
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
              v-model="form.apellido"
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
              v-model="form.telefono"
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
              v-model="form.email"
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
              v-model="form.direccion"
              aria-describedby="helpId"
              placeholder="Direccion"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa la direccion del usuario</small
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
      cliente: null,
      form:{
        "nombre":"",
        "apellido":"",
        "telefono":"",
        "email":"",
        "direccion":""
      }
    };
  },
  methods:{
    editar(){
      axios.put("https://localhost:7241/Cliente/" + this.cliente, this.form)
      .then(data =>{
        console.log(data);
      });
      this.$router.push("/dashboard");
    }
  },
  mounted:function(){
    this.cliente = this.$route.params.pkCliente;
    console.log(this.cliente);
    axios.get("https://localhost:7241/Cliente/" + this.cliente)
    .then(datos =>{
      console.log(datos);
      this.form.nombre = datos.data.value.result.nombre;
      this.form.apellido = datos.data.value.result.apellido;
      this.form.telefono = datos.data.value.result.telefono;
      this.form.email = datos.data.value.result.email;
      this.form.direccion = datos.data.value.result.direccion;
      console.log(this.form);
    })
  }
};
</script>