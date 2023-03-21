<template>
  <div class="">
    <v-container>
      <h3 class="main_head">{{ $t("misc.majanExpress") }}</h3>

      <v-row class="express_types">
        <v-col
          cols="12"
          lg="4"
          md="4"
          sm="6"
          xs="12"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <router-link to="/seaFreight">
            <div class="express_type first">
              <div class="overlay">
                <div class="logo">
                  <span>{{ $t("misc.seaFreight") }} </span>
                  <v-icon icon="mdi-ferry" />
                </div>
              </div>
            </div>
          </router-link>
        </v-col>
        <v-col
          cols="12"
          lg="4"
          md="4"
          sm="6"
          xs="12"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <router-link to="/airFreight">
            <div class="express_type second">
              <div class="overlay">
                <div class="logo">
                  <span>{{ $t("misc.airFreight") }} </span>
                  <v-icon icon="mdi-airplane" />
                </div>
              </div>
            </div>
          </router-link>
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="6" xs="12"
          ><div
            class="express_type three"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <div class="overlay">
              <div class="logo">
                <span>{{ $t("misc.Land") }} </span>
                <v-icon icon="mdi-truck" />
              </div>
            </div></div
        ></v-col>
      </v-row>
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
.express_type {
  height: 400px;
  /* width: 400px; */
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  border-radius: 10px;
  text-align: center;
  position: relative;
  transition: 0.3s all linear;
  /* margin: 20px 0; */
}
.express_types {
  /* column-gap: 10px; */
}
.first {
  background-image: url("../../assets/images/ship-express.jpg");
}
.second {
  background-image: url("../../assets/images/air-express.jpg");
}
.three {
  background-image: url("../../assets/images/land.jpg");
}

.overlay {
  background: black;
  opacity: 0.7 !important;
  border-radius: 10px;
  width: 100%;
  height: 400px;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  row-gap: 30px;
}

.overlay span {
  display: block;
  margin: 15px;
  font-size: 26px;
}
.overlay .v-icon {
  font-size: 60px;
}
.express_type:hover {
  transform: scale(1.06) !important;
  transition: 0.3s all linear;
}
</style>
