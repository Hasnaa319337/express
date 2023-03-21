<template>
  <div>
    <head-card />
    <div class="land">
        <v-container>
            <p>{{ $t('misc.agreement') }}</p>
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

.land{
    margin-top: 50px;
    p{
        color: rgb(5, 5, 164);
    font-family: "Cairo-Bold";
    margin: 20px 0;
    font-size: 22px;
    text-align: center;
    }
}


</style>
