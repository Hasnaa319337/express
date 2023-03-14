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
          <!-- <div class="carousel__item">image</div> -->
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
      reviews: [
        {
          id: 1,
          name: "Ahmed Ali",
          text: "شركه ممتازه شكرا للعاملين بها و أنصح بالتعامل معها",
          image:
            "https://eng-hasnaa.netlify.app/images/team-3.jpg",
        },

        {
          id: 2,
          name: "samy Mohamed",
          text: "شركه محترمه وحسن استقبال العملاء فى الفروع ممتاز",
          image:
            "https://blissful-bhaskara-a0d804.netlify.app/images/testimonials-5.jpg",
        },
        {
          id: 3,
          name: "Mona Khaled",
          text: "اقل الاسعار مقارنه بباقى شركات الشحن",
          image:
            "https://edua.netlify.app/images/blog-2-450x267.jpg",
        },
        {
          id: 4,
          name: "Aya Omer",
          text: " مندوىبين محترمين شركه محترمه جدا و خدمه عملاء محترمه",
          image:
            "https://eng-hasnaa.netlify.app/images/team-4.jpg",
        },
      ],
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
    };
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
