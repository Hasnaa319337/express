<template>
  <div class="about">
    <head-card />

    <div class="about">
      <v-container>
        <h2>{{ $t("misc.About company") }}</h2>

        <div class="info">
          <p>
           {{ $t('misc.aboutInfo') }}<br/>
           {{ $t('misc.aboutInfo2') }}
          </p>
        </div>
      </v-container>
    </div>
    <WhyUs/>
    <CustomerReviews/>
  </div>
</template>
<script setup>
import CustomerReviews from "../components/about/CustomerReviews.vue";
import WhyUs from "../components/about/WhyUs.vue";
import HeadCard from "../components/HeadCard.vue";
</script>

<style lang="scss">
.about {
  text-align: center;
  // padding: 20px 0;
  font-size: 20px;
  font-family: Cairo-Regular;
  h2 {
    font-family: Cairo-ExtraBold;
    font-size: 24px;
    margin: 20px 0;
    color: #150f4e;
  }
  .info {
    color: #313131;
    p{
      line-height: 2;
    }
  }
}
</style>
