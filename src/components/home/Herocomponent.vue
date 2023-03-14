<template>
  <div class="hero">
    <v-carousel hide-delimiter-background show-arrows="hover">
      <v-carousel-item
        src="../../assets/images/hero1.jpg"
        cover
        ><div
          class="slider_contain"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <h3>{{ $t("misc.majanExpress") }}</h3>
          <p>
            {{ $t("misc.fromPlace") }}
          </p>
          <router-link to="/about" class="btn btn-border-4"
            >{{ $t("buttons.Learn more") }}
          </router-link>
        </div></v-carousel-item
      >

      <v-carousel-item
      src="../../assets/images/hero2.jpg"
        cover
      >
        <div class="slider_contain">
          <h3>{{ $t("misc.seaFreight") }}</h3>
          <p>
            {{ $t("misc.majanOcean") }}
          </p>
          <router-link to="/servies" class="btn btn-border-4">
            {{ $t("buttons.Learn more") }}
          </router-link>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {};
</script>

<style>
.v-window {
  /* height: 600px !important; */
}
.v-carousel-item{
  display: block !important;
}
.v-responsive__sizer ~ .v-responsive__content {
  margin-inline-start: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
}
.v-window__controls {
  display: none !important;
}
.v-carousel__controls {
  background: transparent !important;
}
.v-btn--variant-text .v-btn__overlay {
  opacity: 0 !important;
  width: 20px !important;
  height: 20px !important;
  border: 0 !important;
}
.v-btn {
  color: #9d9d9d !important;
}
.v-btn--active {
  color: #c6712c !important;
}

/* start:contain style */
.hero .slider_contain {
  background: rgba(0, 0, 0, 22%);
  color: white;
  text-align: center;
  padding: 40px;
  position: relative;
  margin: 20px;
  width: 45%;
}
.hero .slider_contain h3 {
  font-size: 30px;
  font-family: "Cairo-Bold";
  margin-bottom: 20px;
}
.hero .slider_contain p {
  font-size: 22px;
  font-family: "Cairo-Medium";
  margin-bottom: 20px;
}

.hero .slider_contain .btn {
  position: absolute;
  display: inline-block;
  background: white;
  text-align: center;
  transition: all 0.5s linear;
  width: 150px;
  height: 40px;
  font-size: 18px;
  color: #000;
  padding-top: 5px;
  left: 39%;
  bottom: -18px;
}

.v-carousel__controls button:focus {
  outline: none !important;
}
.v-btn--icon {
  border-radius: none !important;
}
@media (max-width: 975px) {
  .hero .slider_contain h3 {
    font-size: 24px;
    font-family: "Podkova-SemiBold";
  }
  .hero .slider_contain p {
    font-size: 18px;
    font-family: "Podkova-Regular";
  }
  .hero .slider_contain .btn {
    font-size: 14px;
    padding-top: 10px;
    left: 32%;
  }
}
@media (max-width: 750px) {
  .hero .slider_contain .btn {
    left: 28%;
  }
  .hero .slider_contain {
    width: 70%;
  }
}
@media (max-width: 700px) {
  .hero .slider_contain .btn {
    left: 32%;
  }
}
@media (max-width: 650px) {
  .hero .slider_contain .btn {
    left: 25%;
  }
}
@media (max-width: 500px) {
  .hero .slider_contain .btn {
    width: 120px;
    height: 40px;
    font-size: 14px;
    left: 30%;
  }
}
@media (max-width: 400px) {
  .hero .slider_contain .btn {
    width: 100px;
    height: 40px;
    font-size: 10px;
    left: 31%;
  }
}
@media (max-width: 390px) {
  .hero .slider_contain .btn {
    left: 28%;
  }
}
@media (max-width: 360px) {
  .hero .slider_contain .btn {
    left: 29%;
  }
}
/* end:contain style */
</style>
