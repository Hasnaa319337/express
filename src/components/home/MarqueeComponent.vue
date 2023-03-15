<template>
  <div class="marquee">
    <marquee direction="right" scrollamount="8" v-if="this.$i18n.locale == 'ar'"
      >{{ $t("misc.marqueeText") }}
    </marquee>
    <marquee direction="left" scrollamount="8" v-if="this.$i18n.locale == 'en'"
      >{{ $t("misc.marqueeText") }}
    </marquee>
  </div>
</template>

<script>
export default {};
</script>

<style>
.marquee {
  background: #070d36;
  color: white;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  font-family: "Cairo-SemiBold";
}
</style>
