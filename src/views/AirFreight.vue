<template>
  <div class="air">
    <HeadCard />
    <CodeComponent/>
    <!-- <CalculateVolume/> -->
  </div>
</template>

<script>
// import CalculateVolume from '@/components/air/CalculateVolume.vue';
import CodeComponent from '@/components/air/CodeComponent.vue';
import HeadCard from "@/components/HeadCard.vue";
export default {
    components: { CodeComponent ,HeadCard}
}
</script>

<style>

</style>