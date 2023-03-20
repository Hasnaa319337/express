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

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
  },
});

//primeVue
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons

import PrimeVue from "primevue/config";
import InputNumber from 'primevue/inputnumber';



import Cookies from "js-cookie";
import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: Cookies.get("locale") || "ar",
  fallbackLocale: Cookies.get("locale") || "ar",
  messages: messages,
});
//tel
import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'
const VueTelInputOptions = {
  mode: "international",
  onlyCountries: ['NG', 'GH', "GB", "US", "CA"]
};



// import {registerLicense} from '@syncfusion/ej2-base';
// registerLicense("ORg4AjUWIQA/Gnt2VVhiQlFaclxJVHxIe0x0RWFbb1x6cVZMYFVBNQtUQF1hS35bd0NjX31XcX1QR2FY")



const app = createApp(App);
app.use(VueTelInput, VueTelInputOptions); // Define default global options here (optional)
app.use(i18n);
app.use(router);
app.use(vuetify);
app.use(VueAxios, axios);
app.use(VueSocialSharing);
app.use(bootstrap);
// primevue
app.use(PrimeVue);
app.component("InputNumber",InputNumber)
app.mount("#app");
