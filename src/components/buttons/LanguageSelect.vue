<template>
  <!-- <div>
    <p :class="this.$i18n.locale == 'ar' ? 'is_rtl' : 'is_ltr'">
      <span>حسناء</span>
      <span></span>
    </p>
    <select v-model="this.$i18n.locale" id="locale" @change="localfff">
      <option
        v-for="(locale, index) in this.$i18n.availableLocales"
        :value="locale"
        key="index"
      >
        {{ locale }}
      </option>
    </select>
  </div> -->
  <div>

<div class="lang_and_currency">
  <div class="lang">
    <template v-if="this.$i18n.locale == 'ar'">
      <button @click="changeLocale">
        <img
          src="https://www.speed4ever.com/img/en.23a2323c.png"
          width="35"

        />
      </button>
    </template>
    <template v-if="this.$i18n.locale == 'en'">
      <button @click="changeLocale">
        <img
          src="https://www.speed4ever.com/img/ar_uae.e41477bc.webp"
          width="35"
        />
      </button>
    </template>
  </div>
</div>
</div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  methods: {
    // localfff() {
    //   console.log(this.$i18n.locale);
    // },

    changeLocale() {
      if (this.$i18n.locale == "ar") {
        Cookies.set("locale", "en");
        window.location.reload();
      }
      if (this.$i18n.locale == "en") {
        Cookies.set("locale", "ar");
        window.location.reload();
      }
    },
  },
};
</script>

<style scoped>
label,
select {
  width: 100%;
}
select {
  height: 25px;
}


span{
  display: block;
}
</style>
