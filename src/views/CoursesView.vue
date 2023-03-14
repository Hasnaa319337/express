<template>
  <head-card />
  <div class="courses">
    <v-container>
      <h2>{{ $t("misc.courses") }}</h2>
      <p class="text">{{ $t("misc.courseText") }}</p>

      <div class="courses_types">
        <div
          class="courses_type1 rainbow"
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
          class="courses_type2 rainbow"
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
}

// .courses_types:active .courses_type2 {
//   animation: spin 2s linear infinite;
// }

@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}
.rainbow {
  position: relative;
  z-index: 0;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  color: #fff;
  margin-bottom: 20px;

  &::before {
    content: "";
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #d9770b;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(45deg, #721296, transparent);
    animation: rotate 4s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background-image: url("../assets/images/ship.jpg");
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 5px;
  }
}
</style>
