<template>
  <duv class="">
    <v-container>
      <h3 class="main_head">مجان للشحن</h3>

      <div class="express_types">
        <div
          class="express_type first"
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
              <span>الشحن البحري</span>
              <v-icon icon="mdi-ferry" />
            </div>
          </div>
        </div>

        <div
          class="express_type second"
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
              <span>الشحن الجوي</span>
              <v-icon icon="mdi-airplane" />
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </duv>
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
  width: 400px;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  border-radius: 10px;
  text-align: center;
  position: relative;
  transition: 0.3s all linear;
  margin: 20px;
}
.express_types {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.first {
  background-image: url("https://www.majanexpres.com/upload/16665575069926.jpg");
}
.second {
  background-image: url("https://www.majanexpres.com/upload/166655750615322.jpg");
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
