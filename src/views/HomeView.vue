<template>
  <div class="home">
    <herocomponent/>
    <marquee-component />
    <express-types />
    <whous-component />
    <why-best />
    <sub-footer />
  </div>
</template>

<script>
import ExpressTypes from "@/components/home/ExpressTypes.vue";
import Herocomponent from "@/components/home/Herocomponent.vue";
import WhousComponent from "../components/home/WhousComponent.vue";
import WhyBest from "../components/home/WhyBest.vue";
import SubFooter from "../components/home/SubFooter.vue";
import MarqueeComponent from "../components/home/MarqueeComponent.vue";
export default {
  components: {
    Herocomponent,
    ExpressTypes,
    WhousComponent,
    WhyBest,
    SubFooter,
    MarqueeComponent,
  },
};
</script>
