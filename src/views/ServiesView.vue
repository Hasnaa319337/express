<template>
  <div>
    <HeadCard />
    <div class="servies">
      <v-container>
        <h2>{{ $t("misc.quality") }}</h2>

        <div class="courses_types">
          <v-row>
            <v-col
              cols="12"
              lg="6"
              md="6"
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
              <div class="courses_type1">
                <p>* {{ $t("misc.serviceShip") }}</p>

                <p>* {{ $t("misc.serviceShip1") }}</p>
              </div>
              <marquee class="marquee"></marquee>
            </v-col>

            <v-col
              cols="12"
              lg="6"
              md="6"
              sm="6"
              xs="12"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              ><div class="courses_type2"></div
            ></v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              lg="6"
              md="6"
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
              <div class="courses_type3"></div>
            </v-col>
            <v-col
              cols="12"
              lg="6"
              md="6"
              sm="6"
              xs="12"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              ><div class="courses_type4">
                <p>* {{ $t("misc.servicePlane") }}</p>

                <p>* {{ $t("misc.servicePlane1") }}</p>
              </div>
              <marquee class="marquee"></marquee
            ></v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              lg="6"
              md="6"
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
              <div class="courses_type1">
                <p>* {{ $t("misc.serviceLand") }}</p>

                <p>* {{ $t("misc.serviceLand1") }}</p>
              </div>
              <marquee class="marquee"></marquee>
            </v-col>

            <v-col
              cols="12"
              lg="6"
              md="6"
              sm="6"
              xs="12"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              ><div class="courses_type6"></div
            ></v-col>
          </v-row>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import HeadCard from "../components/HeadCard.vue";

export default {
  components: { HeadCard },
};
</script>

<style lang="scss">
.servies {
  text-align: center;
  font-size: 18px;
  font-family: Cairo-Regular;
  h2 {
    font-family: Cairo-ExtraBold;
    font-size: 24px;
    margin-bottom: 70px;
    color: #150f4e;
    border-bottom: 3px solid #150f4e;
    display: inline-block;
    padding-bottom: 20px;
  }
  p {
    color: #313131;
    line-height: 2;
  }
  .v-row {
    margin: auto;
  }
  .courses_type1,
  .courses_type4 {
    margin-bottom: 20px;
    font-family: "Cairo-Medium";
    text-align: center;
    height: 300px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: start;
    justify-items: center;
    flex-direction: column;
    p {
      font-weight: 900;
      text-align: start !important;
    }
  }
  .courses_type2,
  .courses_type3,
  .courses_type6 {
    margin-bottom: 20px;

    text-align: center;
    background: url("../assets/images/port-1845350_640.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    height: 300px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
    p {
      color: white;
      font-weight: 900;
    }
  }
  .courses_type3 {
    background: url("../assets/images/airport-1152251_640.jpg");
  }
  .courses_type6 {
    background: url("../assets/images/land-service.jpg");
  }
  .marquee {
    background: #436e8a;
    color: white;
    height: 5px;
    padding: 0;
  }
}
</style>
