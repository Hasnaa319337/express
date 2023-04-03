<template>
  <div class="home">
    <herocomponent/>
    <marquee-component :settings="settings"/>
    <express-types />
    <whous-component :settings="settings" />
    <why-best :home="home"/>
  </div>
</template>

<script>
import ExpressTypes from "@/components/home/ExpressTypes.vue";
import Herocomponent from "@/components/home/Herocomponent.vue";
import WhousComponent from "../components/home/WhousComponent.vue";
import WhyBest from "../components/home/WhyBest.vue";
import MarqueeComponent from "../components/home/MarqueeComponent.vue";
export default {
  components: {
    Herocomponent,
    ExpressTypes,
    WhousComponent,
    WhyBest,
  
    MarqueeComponent,
  },
  data() {
    return {
      settings: [],
      home:[],
      truck:null
   
    };
  },
  methods: {
    siteSettings() {
      this.axios({
        method: "GET",
        url: "siteSetting",
      })
        .then((res) => {
          this.settings = res.data.translations;
          this.icons = res.data;
          this.truck = res.data.truck_img;
          console.log(this.truck);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    siteHome() {
      this.axios({
        method: "GET",
        url: "siteHome",
      })
        .then((res) => {
          this.home = res.data;
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.siteSettings();
    this.siteHome()
  },
};
</script>
