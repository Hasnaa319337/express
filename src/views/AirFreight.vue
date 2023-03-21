<template>
  <div class="air">
    <HeadCard />
    <!-- <excel-component/> -->
    <CodeComponent/>
    <!-- <CalculateVolume/> -->
  </div>
</template>

<script>
// import CalculateVolume from '@/components/air/CalculateVolume.vue';
import CodeComponent from '@/components/air/CodeComponent.vue';
import HeadCard from "@/components/HeadCard.vue";
// import ExcelComponent from '@/components/air/ExcelComponent.vue'
export default {
    components: { CodeComponent ,HeadCard}
}
</script>

<style>

</style>