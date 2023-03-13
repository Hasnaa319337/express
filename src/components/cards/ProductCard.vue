<template>
  <div class="product_card" v-if="review">
    <img class="image_card" :src="review.image" />

    <h4 class="product_name">{{ review.name }}</h4>
    <p>{{ review.text }}</p>
  </div>
</template>

<script>
export default {
  props: ["review"],
  components: {},
  data() {
    return {};
  },
};
</script>

<style>
.product_card {
  position: relative;
  width: 300px;
  height: 300px;
  margin-block: 15px;
  border-radius: 16px;
  border: 1px solid #e9e8e8;
  box-shadow: 0 0 10px 2px #e1e1e199;
  padding: 20px;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
}

.product_card .image_card {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin: auto;
}
.product_card .product_name {
  font-size: 16px;
  margin-top: 10px;
  font-family: "Cairo-Bold";
  text-align: center;
}

.product_card p {
  font-family: "Cairo-Medium";
  font-size: 18px;
}
</style>
