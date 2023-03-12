<template>
  <div class="home">
    <herocomponent />
    <express-types />
    <whous-component />
    <why-best/>
  </div>
</template>

<script>
import ExpressTypes from "@/components/home/ExpressTypes.vue";
import Herocomponent from "@/components/home/Herocomponent.vue";
import WhousComponent from "../components/home/WhousComponent.vue";
import WhyBest from '../components/home/WhyBest.vue';
export default {
  components: { Herocomponent, ExpressTypes, WhousComponent, WhyBest },
};
</script>
