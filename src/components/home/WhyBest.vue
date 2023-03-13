<template>
  <div class="best">
    <v-container>
      <h3 class="main_head">{{ $t('misc.best') }} </h3>
      <div class="reasons">
        <v-row>
          <v-col
            cols="12"
            lang="6"
            md="6"
            sm="6"
            xs="12 "
            data-aos="slide-left"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <div class="reason reason1">
              <span>{{ $t('misc.customerSupport') }}</span> <v-icon icon="mdi-face-agent" />
            </div>
          </v-col>
          <v-col
            cols="12"
            lang="6"
            md="6"
            sm="6"
            xs="12 "
            data-aos="slide-right"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <div class="reason reason2">
              <span>{{ $t('misc.Reliability') }}</span>
              <v-icon icon="mdi-card-account-details-star-outline" />
            </div>
          </v-col>
          <v-col
            cols="12"
            lang="6"
            md="6"
            sm="6"
            xs="12 "
            data-aos="slide-left"
            data-aos-offset="200"
            data-aos-delay="700"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <div class="reason reason3">
              <span>{{ $t('misc.FreeConsulting') }}</span>
              <v-icon icon="mdi-bag-checked" />
            </div>
          </v-col>
          <v-col
            cols="12"
            lang="6"
            md="6"
            sm="6"
            xs="12 "
            data-aos="slide-right"
            data-aos-offset="200"
            data-aos-delay="700"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <div class="reason reason4">
              <span>{{ $t('misc.trustedFranchise') }}</span>
              <v-icon icon="mdi-timer-cog-outline" />
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.best {
  /* background: url("https://www.majanexpres.com/assets/images/bg-wave.svg"); */
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  overflow-x: hidden;
}
.best .reasons {
  margin: auto;
  max-width: 1100px;
}
.best .reasons .reason {
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin: 20px 0;
}
.best .reasons .reason div {
  margin: 0 20px;
}
.best .reasons .reason4,
.best .reasons .reason2 {
  clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
  height: 200px;
  background: #a1a1a070;
}
.best .reasons .reason1,
.best .reasons .reason3 {
  clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);

  height: 200px;
  background: #a1a1a070;
}
.reason .v-icon {
  color: #fe8704;
  background: #fff;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 39px;
  margin: 0 11px;
  box-shadow: 0 0 10px 2px hsla(0, 0%, 88%, 0.6);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 39px;
  margin: 0 11px;
}
@media (max-width: 1200px) {
  .reason .v-icon {
    margin: 0 7px;
    font-size: 27px;
  }
}

@media (max-width: 1200px) {
  .reason .v-icon {
  width: 40px;
  height: 40px;
  }
}
@media (max-width: 825px) {
  .reason span {
font-size: 15px;
  }
}
</style>
