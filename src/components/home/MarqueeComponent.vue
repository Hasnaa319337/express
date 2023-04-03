<template>
  <div class="marquee">
    <marquee scrollamount="2" >
      <template v-for="setting in settings" :key="setting">
        {{ $t("misc.marqueeText") }}
      </template>
    </marquee>
  </div>
</template>

<script>
export default {
  props: ["settings"],
};
</script>

<style>
.marquee {
  background: #070d36;
  color: white;
  padding: 10px 0;
  /* display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center; */
  font-family: "Cairo-SemiBold";
}
</style>
