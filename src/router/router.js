import Registro from './views/Registro.vue';
import Login from './views/Login.vue';
import Home from './views/Home.vue';

const routes = [
    
  { path: '/registro', component: Registro },
  { path: '/login', component: Login },
  { path: '/home', component: Home, meta: { requiresAuth: true } }
];
