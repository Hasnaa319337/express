<template>
  <head-card />
  <div class="courses">
    <v-container>
      <h2>{{ $t("misc.courses") }}</h2>
      <!-- <h5>{{ $t("misc.coursesHead") }}</h5> -->
      
      <p class="text">{{ $t("misc.courseText") }}</p>
      <p class="">{{ $t("misc.courseText1") }}</p>
      <p class="">{{ $t("misc.courseText2") }}</p>



      <div class="courses_types">
     

        <div
          class="courses_type1 rainbow"
          data-aos="fade-up"
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
          data-aos="fade-up"
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

      <!-- Start:: comments -->
      <div class="comments">
        <h2>{{ $t("misc.opinions") }}</h2>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="carousal_contain">
                <p>
                  {{ $t('misc.opinion1') }}
                </p>
                <span>مشترك 1</span>
              </div>
            </div>
            <div class="carousel-item">
              <div class="carousal_contain">
                <p>
                  {{ $t('misc.opinion2') }}
                </p>
                <span> مشترك 2</span>
              </div>
            </div>
            <div class="carousel-item">
              <div class="carousal_contain">
                <p>
                  {{ $t('misc.opinion3') }}
                </p>
                <span>مشترك 3</span>
              </div>
            </div>
            <div class="carousel-item">
              <div class="carousal_contain">
                <p>
                  {{ $t('misc.opinion4') }}
                </p>
                <span> مشترك 4</span>
              </div>
            </div>
            <div class="carousel-item">
              <div class="carousal_contain">
                <p>
                  كنت اعتقد انه مثل المواقع الاخري بس طلع  عالم ثاني 
                </p>
                <span> مشترك 5</span>
              </div>
            </div>
            <div class="carousel-item">
              <div class="carousal_contain">
                <p>
           متحمسه ادخل الموقع و اطلب طلبيتي بنفسي ; تعلمت عن البحث اكثر 
                </p>
                <span> مشترك 6</span>
              </div>
            </div>
            <div class="carousel-item">
              <div class="carousal_contain">
                <p>
                   الشرح اكثر من رائع و كنتي طوال الوقت تبادلينا اذا فاهمين او لا  كأنها دردشه من دون قيود انها محاضره او شرح
                </p>
                <span>مشترك 7</span>
              </div>
            </div>
            <div class="carousel-item">
              <div class="carousal_contain">
                <p>
                  كنت متخوفه ان الوقت ما يكفي لكي افهم كل جوانب الاستيراد من الصين بس احس ان اللي عرفته كافي للبدء في تجربتي الاولي
                </p>
                <span>مشترك 8</span>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <!-- End::comments -->
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



@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}
.rainbow {
  margin-top: 50px;
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
    background-color: #df903c;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(45deg, #3c32db, #df903c);
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

.comments {
  margin: 50px 0;
  h2 {
    margin-bottom: 40px;
  }
  .carousel-inner {
    text-align: center;
    color: white;
    background: #211c4be6;
    border-radius: 8px;
    padding: 20px 10px;
    height: 300px;

    .carousel-item {
      width: 100%;
      height: 333px;
      position: relative;
    }

    .carousal_contain {
      text-align: center;
      width: 50%;
      position: absolute;
      top: 20%;
      left: 23%;

      font-size: 20px;
    }
    .carousal_contain p {
      // text-align: justify;
      // width: 92%;
    }
    .carousal_contain span {
      display: block;
      text-align: center;
      margin: 20px 0;
      color: #fe8704;
    }
  }
}
@media (max-width: 700px) {
  .carousal_contain {
    font-size: 18px;
  }
}
@media (max-width: 415px) {
  .carousel-inner {
    padding: 5px !important;
    height:100% !important;
    .carousal_contain {
      font-size: 16px;
      top: 7% !important;

      span {
        margin: 10px 0 !important;
      }
    }
  }
}

@media (max-width: 300px) {
  .carousel-inner {
    padding: 5px !important;
    height:100% !important;
    .carousal_contain {
      font-size: 16px !important;
      top: 26% !important;
      span {
        margin: 5px 0 !important;
      }
    }
  }
}

@media (max-width: 600px) {
  .carousel-inner {
 
    .carousal_contain {
     
      top: 10% !important;
      
    }
  }
}
</style>
