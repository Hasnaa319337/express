<template>
  <head-card />
  <div class="courses">
    <v-container>
      <h2>{{ $t("misc.courses") }}</h2>
      <p class="text">{{ $t("misc.courseText") }}</p>

      <div class="courses_types">
        <div
          class="courses_type1"
          data-aos="slide-left"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <p>{{ $t("misc.type1") }}</p>
        </div>

        <div
          class="courses_type2"
          data-aos="slide-right"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <p>{{ $t("misc.type2") }}</p>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import HeadCard from "../components/HeadCard.vue";
export default {
  components: { HeadCard },
};
</script>

<style lang="scss">
.courses {
  text-align: center;
  font-size: 20px;
  font-family: Cairo-Regular;
  h2 {
    font-family: Cairo-ExtraBold;
    font-size: 24px;
    margin: 20px 0;
    color: #150f4e;
  }
  .text {
    color: #313131;
    line-height: 2;
    margin-bottom: 60px;
  }
  .courses_types {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    column-gap: 50px;
  }
  .courses_type1 {
    margin-bottom: 20px;
    font-family: "Cairo-Medium";
    text-align: center;
    height: 300px;
    width: 300px;
    // background-image: linear-gradient(45deg, #4c3af2, #e36c1d);
    background: url("../assets/images/ship.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
    border-radius: 50%;
    padding: 5px;
    p {
      color: white;
    }
  }
  .courses_type2 {
    margin-bottom: 20px;
    font-family: "Cairo-Medium";
    text-align: center;
    // background-image: linear-gradient(45deg, #4c3af2, #e36c1d);
    background: url("../assets/images/ship.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
    p {
      color: white;
    }
  }
  .courses_type3 {
    background: url("../assets/images/airport-1152251_640.jpg");
  }

}
</style>
