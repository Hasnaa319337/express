<template>
  <div>
    <v-container>
      <h3 class="main_head">{{ $t("misc.why") }}</h3>
      <div class="reasons">
        <div
          class="reason"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <div class="icon">
            <v-icon icon="mdi-check" />
          </div>
          <div class="contain">
            <p>{{ $t("misc.reason1") }}</p>
          </div>
        </div>
     
        <div
          class="reason"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <div class="icon">
            <v-icon icon="mdi-check" />
          </div>
          <div class="contain">
            <p>{{ $t("misc.reason2") }}</p>
          </div>
        </div>
        <div
          class="reason"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <div class="icon">
            <v-icon icon="mdi-check" />
          </div>
          <div class="contain">
            <p>{{ $t("misc.reason3") }}</p>
          </div>
        </div>
 
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.reasons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 13px;
}
.reason {
  width: 250px;
  height: 250px;
  display: flex;
  border-radius: 4px;
  margin-block: 12px;
  overflow: hidden;
  transition: 0.5s all ease-in-out;
  background: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
  row-gap: 20px;
}
.reason:hover {
  background-color: #54a2b3;
  transform: scale(1.06);
  color: #fff !important;
  transition: 0.5s all ease-in-out;
}
.icon {
  color: #fe8704;
  background: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px 2px hsla(0, 0%, 88%, 0.6);

  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
}
.contain {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
}
.contain p {
  font-family: "Cairo-Medium";
  font-size: 18px;
  margin: 0 10px;
}
</style>
