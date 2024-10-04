<template>
  <div>
    <h1>Registro</h1>
    <form @submit.prevent="register">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Registrar</button>
    </form>
    <p v-if="registrationSuccess" style="color: green;">{{ registrationMessage }}</p> 
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p> 
  </div>
</template>

<script>
import { createUserWithEmailAndPassword, signOut } from "firebase/auth"; 
import { getFirestore, setDoc, doc } from "firebase/firestore"; 
import { auth } from '../firebase'; 

const db = getFirestore();

export default {
  data() {
    return {
      email: '',
      password: '',
      registrationSuccess: false, 
      registrationMessage: '', 
      errorMessage: '' 
    };
  },
  methods: {
    async register() {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        
        const user = userCredential.user; 
        
        await setDoc(doc(db, "users", user.uid), {
          email: this.email,
          createdAt: new Date() 
        });

        await signOut(auth);

        this.registrationSuccess = true;
        this.registrationMessage = "Registro exitoso. Por favor, inicia sesión.";
        this.email = ''; 
        this.password = '';
        
      } catch (error) {
        this.errorMessage = "Error al registrar: " + error.message;
        console.error("Error al registrar:", error);
      }
    }
  }
}
</script>

<style scoped>
</style>
