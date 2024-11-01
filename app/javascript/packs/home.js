import { createApp } from 'vue';
import WelcomeButton from '../components/WelcomeButton.vue';

document.addEventListener('DOMContentLoaded', () => {
  const app = createApp(WelcomeButton);
  app.mount('#vue-root-button'); 
});