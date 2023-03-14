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
            "data:image/jpeg;base64,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",
        },

        {
          id: 2,
          name: "samy Mohamed",
          text: "شركه محترمه وحسن استقبال العملاء فى الفروع ممتاز",
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
          text: " مندوىبين محترمين شركه محترمه جدا و خدمه عملاء محترمه",
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
