<template>
  <div :class="this.$i18n.locale == 'ar' ? 'is_rtl' : 'is_ltr'">
    <!-- <sub-header /> -->
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
    <SubFooter/>
    <footer-component />
  </div>
</template>

<script>
// import '$i18n';
import FooterComponent from "./components/FooterComponent.vue";

import HomeView from "./views/HomeView.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import SubFooter from "./components/home/SubFooter.vue";
// import SubHeader from "./components/SubHeader.vue";
export default {
  components: { HomeView, FooterComponent, HeaderComponent, SubFooter },
  mounted() {
    if ($i18n.global.locale == "en") {
      document.body.dir = "ltr";
    } else {
      document.body.dir = "rtl";
    }
  },
};
</script>
<style lang="scss"></style>
