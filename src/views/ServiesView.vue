<template>
  <div>
    <HeadCard />
    <div class="servies">
      <v-container>
        <h3>{{ $t("misc.quality") }}</h3>
      </v-container>
    </div>
  </div>
</template>

<script>
import HeadCard from "../components/HeadCard.vue";

export default {
  components: { HeadCard },
};
</script>

<style lang="scss">
.servies {
  h3 {
  }
}
</style>
