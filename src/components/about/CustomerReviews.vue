<template>
  <v-container class="reviews_container">
    <h3 class="main_head">{{ $t("misc.customerReviews") }}</h3>
    <div class="products_slider">
      <div class="first_block"></div>
      <Carousel
        :wrap-around="true"
        :autoplay="1"
        :transition="6000"
        :breakpoints="breakpoints"
        :show-arrows="false"
      >
        <Slide v-for="review in reviews" :key="review.id">
   
          <ProdutCard :review="review" />
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </v-container>
</template>

<script>
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import ProdutCard from "@/components/cards/ProductCard.vue";
export default {
  components: {
    Carousel,
    Slide,
    Navigation,
    ProdutCard,
  },
  data() {
    return {
     
      breakpoints: {
        // 700px and up
        900: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        // 1024 and up

        1260: {
          itemsToShow: 3.5,
          snapAlign: "start",
        },
        750: {
          itemsToShow: 2,
          snapAlign: "start",
        },
      },
      reviews:[]

    };
  },
  methods: {
    customersReviews() {
      this.axios({
        method: "GET",
        url: "reviews",
      })
        .then((res) => {
          this.reviews = res.data;
         
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.customersReviews();
  },
};
</script>

<style>
.reviews_container {
  max-width: 1085px;
}
.carousel__prev {
  display: none;
}
.carousel__next {
  display: none;
}

@media (max-width: 1500px) {
}
</style>
