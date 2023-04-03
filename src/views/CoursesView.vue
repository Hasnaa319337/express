<template>
  <head-card />
  <div class="courses">
    <v-container>
      <template v-for="translation in courses" :key="translation">
        <h2 v-if="translation.locale == this.$i18n.locale">
          {{ translation.name }}
        </h2>
        <p v-if="translation.locale == this.$i18n.locale">
          {{ translation.description }}
        </p>
      </template>

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
          <v-row class="carousel-inner">
            <v-col
              cols="12"
              lg="3"
              md="4"
              sm="6"
              xs="12"
              v-for="comment in comments"
              :key="comment.id"
            >
              <div id="carousel-item" class="carousel-item active">
                <div class="carousal_contain">
                  <div
                    class=""
                    v-for="translation in comment.translations"
                    :key="translation"
                  >
                    <p v-if="translation.locale == this.$i18n.locale">
                      {{ translation.content }}
                    </p>
                    <span v-if="translation.locale == this.$i18n.locale">
                      {{ translation.name }}
                    </span>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
          <!-- <button
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
          </button> -->
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
  data() {
    return {
      courses: [],
      comments: [],
    };
  },
  methods: {
    courseReviews() {
      this.axios({
        method: "GET",
        url: "courseReviews",
      })
        .then((res) => {
          this.comments = res.data;
          let element = document.getElementById("carousel-item");
          element.classList.add("active");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    siteCourses() {
      this.axios({
        method: "GET",
        url: "siteCourse",
      })
        .then((res) => {
          this.courses = res.data.translations;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.courseReviews();
    this.siteCourses();
  },
};
</script>

<style lang="scss">
.active {
  display: block;
}
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
  p {
    line-height: 1.9;
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
    
    border-radius: 8px;
    // padding: 20px 10px;
    // height: 300px;

    .carousel-item {
      width: 100%;
      background: #211c4be6;
      height: 280px;
      padding: 5px 10px;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      justify-items: center;
  
      &:first-of-type {
        // display: block;
      }
    }

    .carousal_contain {
      text-align: center;

    

      font-size: 17px;
      padding: 11px 0;
    }
    .carousal_contain p {
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
    height: 100% !important;
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
    height: 100% !important;
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
