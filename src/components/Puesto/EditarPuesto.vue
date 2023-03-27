<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Editar Puesto</div>
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
              >Ingresa el nombre del puesto</small
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
      puesto: null,
      form:{
        "nombre":""
      }
    };
  },
  methods:{
    editar(){
      axios.put("https://localhost:7241/Puesto/" + this.puesto, this.form)
      .then(data =>{
        console.log(data);
      });
      this.$router.push("/dashboard");
    }
  },
  mounted:function(){
    this.puesto = this.$route.params.pkpuesto;
    console.log(this.puesto);
    axios.get("https://localhost:7241/Puesto/" + this.puesto)
    .then(datos =>{
      console.log(datos);
      this.form.nombre = datos.data.value.result.nombre;
      console.log(this.form);
    })
  }
};
</script>