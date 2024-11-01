import { createApp } from 'vue';
import Counter from '../components/Counter.vue';

document.addEventListener('DOMContentLoaded', () => {
  const app = createApp(Counter); 
  app.mount('#vue-welcome-app');
});
