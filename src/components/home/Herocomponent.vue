<template>
<div class="hero">

    <!-- Carousel -->
    <div id="demo" class="carousel slide" data-bs-ride="carousel">
    <!-- Indicators/dots -->
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#demo"
        data-bs-slide-to="0"
        class="active"
      ></button>
      <button
        type="button"
        data-bs-target="#demo"
        data-bs-slide-to="1"
      ></button>
      <button
        type="button"
        data-bs-target="#demo"
        data-bs-slide-to="2"
      ></button>
    </div>

    <!-- The slideshow/carousel -->
    <div class="carousel-inner">
      <div class="carousel-item">
        <img src="../../assets/images/hero1.jpg" class="d-block w-100" />
      </div>
      <div class="carousel-item active">
        <img
          src="../../assets/images/sea.jpeg"
          alt="Chicago"
          class="d-block w-100"
        />
      </div>
    </div>

    <!-- Left and right controls/icons -->
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#demo"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#demo"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>
</div>
</template>

<script>

export default { components: {  } };
</script>

<style lang="scss">
.hero{
  position: relative;
}
.hero .carousel-inner {
  // height: 500px;
  .carousel-item {
    background: url("../../assets/images/hero1.jpg");
    background-size: cover;

    .contain {
    }
  }
}
.hero .carousel-control-prev {
  display: none;
}
.hero .carousel-control-next{
  display: none;
}
</style>
