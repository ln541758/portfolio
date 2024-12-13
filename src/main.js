import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Add Font Awesome icons to the library
library.add(faTimes);

// Create the Vue application instance
const app = createApp(App);

// Register the Font Awesome component globally
app.component("font-awesome-icon", FontAwesomeIcon);

// Use the router and mount the application to the DOM
app.use(router).mount('#app');
