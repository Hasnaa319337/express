<template>
  <div class="program_card">
    <div class="image_card"><img :src="program.img" /></div>
    <div class="program_text">
      <h3 class="program_name">{{ program.name }}</h3>
      <p class="program_info">{{ program.info }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["program"],
};
</script>

<style scoped>
.program_card {
  position: relative;
  height: 400px;
  transform: scale(1);
  transition: all 0.5s linear;
  margin-bottom: 10px;
}
.program_card:hover {
  transition: all 0.5s linear;
  transform: scale(1.06);
}
.image_card {
  height: 250px;
}
.image_card img {
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.program_card .program_text {
  padding: 20px;
  border-radius: 8px;

  bottom: 8px;
  background: white;
}
.program_card .program_name {
  font-size: 24px;
  font-family: "Podkova-SemiBold";
}
.program_card .program_info {
  font-family: "Podkova-Regular";
  font-size: 16px;
}
</style>
