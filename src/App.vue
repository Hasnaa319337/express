<template>
  <!-- :class="$i18n.locale == 'ar' ? 'is-rtl' : 'is_ltr'" -->
  <!-- <HeaderComponent /> -->
  <div>
    <HomeView />
  </div>
</template>

<script>
// import i18n from "./i18n";

import HomeView from "./views/HomeView.vue";
// import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  components: { HomeView },
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
