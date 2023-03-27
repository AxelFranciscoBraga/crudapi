<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Editar usuarios</div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="">User:</label>
            <input
              type="text"
              class="form-control"
              name="user"
              v-model="form.user"
              aria-describedby="helpId"
              id="user"
              placeholder="User"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa el nombre del usuario</small
            >
          </div>
          <div class="form-group">
            <label for="">Password:</label>
            <input
              type="text"
              class="form-control"
              name="password"
              v-model="form.password"
              aria-describedby="helpId"
              id="password"
              placeholder="Password"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa el nombre del usuario</small
            >
          </div>
          <div class="form-group">
            <label for="">Fecha de registro:</label>
            <input
              type="text"
              class="form-control"
              name="fechaRegistro"
              v-model="form.fechaRegistro"
              aria-describedby="helpId"
              id="fechaRegistro"
              placeholder="Fecha de registro"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa el nombre del usuario</small
            >
          </div>
          <div class="form-group">
            <label for="">Empleado:</label>
            <input
              type="text"
              class="form-control"
              name="fkEmpleado"
              v-model="form.fkEmpleado"
              aria-describedby="helpId"
              id="fkEmpleado"
              placeholder="Empleado"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa el nombre del usuario</small
            >
          </div>
          <div class="form-group">
            <label for="">Rol:</label>
            <input
              type="text"
              class="form-control"
              name="fkRol"
              v-model="form.fkRol"
              aria-describedby="helpId"
              id="fkRol"
              placeholder="Rol"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa el nombre del usuario</small
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
      usuario: null,
      form:{
        "user":"",
        "password":"",
        "fechaRegistro":"",
        "fkEmpleado":"",
        "fkRol":""
      }
    };
  },
  methods:{
    editar(){
      axios.put("https://localhost:7241/Usuarios/" + this.usuario, this.form)
      .then(data =>{
        console.log(data);
      });
      this.$router.push("/dashboard");
    }
  },
  mounted:function(){
    this.usuario = this.$route.params.pkUsuario;
    console.log(this.usuario);
    axios.get("https://localhost:7241/Usuarios/" + this.usuario)
    .then(datos =>{
      console.log(datos);
      this.form.user = datos.data.value.result.user;
      this.form.password = datos.data.value.result.password;
      this.form.fechaRegistro = datos.data.value.result.fechaRegistro;
      this.form.fkEmpleado = datos.data.value.result.fkEmpleado;
      this.form.fkRol = datos.data.value.result.fkRol;
      console.log(this.form);
    })
  }
};
</script>