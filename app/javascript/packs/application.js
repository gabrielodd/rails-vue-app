// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import { createApp } from 'vue'; // Use createApp para Vue 3
import HelloVue from '../components/HelloVue.vue';

Rails.start()
Turbolinks.start()
ActiveStorage.start()

// Inicie o Vue
document.addEventListener('DOMContentLoaded', () => {
  const app = createApp(HelloVue); // Crie a aplicação Vue
  app.mount('#vue-app'); // Monte a aplicação na div com id "vue-app"
});