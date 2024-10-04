<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Contraseña" required />
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import { signInWithEmailAndPassword } from "firebase/auth";
  import { auth } from '../firebase';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        errorMessage: '' 
      };
    },
    methods: {
      async login() {
        try {
          await signInWithEmailAndPassword(auth, this.email, this.password);
          this.$router.push('/home'); 
        } catch (error) {
          this.errorMessage = "Error al iniciar sesión: " + error.message; 
          console.error("Error al iniciar sesión:", error);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  