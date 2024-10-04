<template>
  <div id="app">
    <nav class="navbar">
      <ul class="navbar-list">
        <li class="navbar-item">
          <router-link @click.native="logout" to="/">Inicio</router-link> 
        </li>
        <li class="navbar-item" v-if="!isAuthenticated">
          <router-link to="/login">Login</router-link>
        </li>
        <li class="navbar-item" v-if="!isAuthenticated">
          <router-link to="/registro">Registrar</router-link>
        </li>
        <li class="navbar-item" v-if="isAuthenticated">
          <router-link to="/home">Home</router-link>
        </li>
      </ul>
    </nav>

    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { auth } from './firebase'; 
import { signOut, onAuthStateChanged } from 'firebase/auth'; 

export default {
  name: 'App',
  setup() {
    const isAuthenticated = ref(false);

    onAuthStateChanged(auth, (user) => {
      isAuthenticated.value = !!user;
    });

    const logout = async () => {
      try {
        await signOut(auth);
        console.log("Sesión cerrada");
      } catch (error) {
        console.error("Error al cerrar sesión:", error);
      }
    };

    return { isAuthenticated, logout };
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  padding: 1rem;
  z-index: 1000;
}
.navbar-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.navbar-item {
  display: inline;
  margin-right: 20px;
}
</style>
