<template>
  <!-- :class="$i18n.locale == 'ar' ? 'is-rtl' : 'is_ltr'" -->
  <sub-header/>
  <HeaderComponent />
  <div>
    <HomeView />
  </div>
  <footer-component/>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
// import i18n from "./i18n";

import HomeView from "./views/HomeView.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import SubHeader from './components/SubHeader.vue';
export default {
  components: { HomeView, FooterComponent ,HeaderComponent, SubHeader},
};
</script>
<style lang="scss">
.ltr {
  direction: ltr;
}
.rtl {
  direction: rtl;
}
</style>
