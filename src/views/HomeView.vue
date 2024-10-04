<template>
    <div>
      <h1 v-if="isAuthenticated">Bienvenido a tu cuenta</h1>
      <h1 v-else>Bienvenido a nuestra aplicación</h1>
      <p v-if="isAuthenticated">Has iniciado sesión con éxito.</p>
      <p v-else>Por favor, inicia sesión o regístrate para continuar.</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { auth } from '../firebase'; 
  import { onAuthStateChanged } from 'firebase/auth'; 
  
  export default {
    name: 'HomeView',
    setup() {
      const isAuthenticated = ref(false); 
      
      onAuthStateChanged(auth, (user) => {
        isAuthenticated.value = !!user; 
      });
  
      return { isAuthenticated };
    }
  }
  </script>
  
  <style scoped>
  </style>
  