<template>
  <div class="marquee">
    <marquee>{{ $t('misc.marqueeText') }} </marquee>
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
