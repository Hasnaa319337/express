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
          text: "حرفيا افضل شركه تعاملت معها",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNa79qNZL_efDAd2mqL7MgYwH8vdHsdNb8_Q&usqp=CAU",
        },

        {
          id: 2,
          name: "samy Mohamed",
          text: "بصراحه ما عندي شي بس انتوا افضل شركه تعاملت معها من بين 5 شركات تعاملت معهم",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHUBjOnosNUz1zIv9hg2Bx_uuc4S-BK4bITQ&usqp=CAU",
        },
        {
          id: 3,
          name: "Ayman Khaled",
          text: "اقل الاسعار مقارنه بباقى شركات الشحن",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZCXUnJ637C6MLIc9QDEcFp7DLCjyV13yVQ&usqp=CAU",
        },
        {
          id: 4,
          name: "Aya Omer",
          text: "أهنئكم علي الصدق و الامانه",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdS9fe93wFAattcdepsN2_3aB0cvoGy5AGYg&usqp=CAU",
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
