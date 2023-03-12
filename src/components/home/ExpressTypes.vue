<template>
  <duv class="express_type">
    <v-container>
        <h3 class="main_head">مجان للشحن</h3>
      <v-row>
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
          <div class="express_type first">
            <div class="overlay">
              <div class="logo">
                <span>الشحن البحري</span>
                <v-icon icon="mdi-ferry" />
              </div>
            </div>
          </div>
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
          <div class="express_type second">
            <div class="overlay">
              <div class="logo">
                <span>الشحن الجوي</span>
                <v-icon icon="mdi-airplane" />
             
              </div>
            </div>
          </div>
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
          <div class="express_type last">
            <div class="overlay">
              <div class="logo">
                <span>الشحن البري</span>
                <v-icon icon="mdi-truck-delivery" />
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
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
  width: 93%;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  border-radius: 10px;
  text-align: center;
  position: relative;
  transition: .3s all linear;
  margin: 20px ;
}
.first {
  background-image: url("https://www.majanexpres.com/upload/16665575069926.jpg");
}
.second {
  background-image: url("https://www.majanexpres.com/upload/166655750615322.jpg");
}

.last {
  background-image: url("https://www.majanexpres.com/upload/166655750620864.jpg");
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
.express_type:hover{
    transform: scale(1.06);
    transition: .3s all linear;
}
</style>
