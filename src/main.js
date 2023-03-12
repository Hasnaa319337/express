import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import store from "./store";

import "./assets/main.css";

//share
import VueSocialSharing from "vue-social-sharing";

// animation
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

//axios

import axios from "axios";
import VueAxios from "vue-axios";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

// i18n
// import i18n from "./i18n";

//primeVue
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons

import PrimeVue from "primevue/config";
import Menubar from "primevue/menubar";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
  },
});

const app = createApp(App);

// app.use(i18n);

// app.use(store);
app.use(router);
app.use(vuetify);
app.use(VueAxios, axios);

app.use(VueSocialSharing);
app.use(bootstrap);

// primevue
app.use(PrimeVue);
app.component("Menubar", Menubar);

app.mount("#app");
