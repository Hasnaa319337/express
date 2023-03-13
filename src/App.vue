<template>
  <div :class="this.$i18n.locale == 'ar' ? 'is-rtl' : 'is_ltr'">
    <sub-header />
    <HeaderComponent />
    <main>
      <router-view
        data-aos="fade-in"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      ></router-view>
  
    </main>
    <footer-component />
   
  </div>
</template>

<script>
import FooterComponent from "./components/FooterComponent.vue";

import HomeView from "./views/HomeView.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import SubHeader from "./components/SubHeader.vue";
export default {
  components: { HomeView, FooterComponent, HeaderComponent, SubHeader },
};
</script>
<style lang="scss"></style>
