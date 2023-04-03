<template>
  <div class="about">
    <head-card />

    <div class="about">
      <v-container>
        <!-- <h2>{{ $t("misc.About company") }}</h2> -->

        <div class="info">
          <h2>{{ name }}</h2>
          <p v-html="description"></p>
          <!-- <p>
            {{ $t("misc.aboutInfo") }}<br />
            {{ $t("misc.aboutInfo2") }}
          </p> -->
        </div>
        <div
          class="info"
          v-for="translation in translations"
          :key="translation"
        >
          <h3 v-if="translation.locale == this.$i18n.locale">
            {{ translation.name }}
          </h3>

          <div v-if="translation.locale == this.$i18n.locale">
            {{ translation.description }}
          </div>
        </div>
      </v-container>
    </div>
    <WhyUs />
    <CustomerReviews />
  </div>
</template>
<script>
import CustomerReviews from "../components/about/CustomerReviews.vue";
import WhyUs from "../components/about/WhyUs.vue";
import HeadCard from "../components/HeadCard.vue";

export default {
  components: {
    CustomerReviews,
    WhyUs,
    HeadCard,
  },
  data() {
    return {
      translations: [],
      img: null,
    };
  },

  methods: {
    getAboutData() {
      this.axios({
        method: "GET",
        url: "siteAbout",
      })
        .then((res) => {
          this.translations = res.data.translations;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getAboutData();
  },
};
</script>

<style lang="scss">
.about {
  text-align: center;
  // padding: 20px 0;
  font-size: 20px;
  font-family: Cairo-Regular;
  h2 {
    font-family: Cairo-ExtraBold;
    font-size: 24px;
    margin: 20px 0;
    color: #150f4e;
  }
  .info {
    color: #313131;
    p {
      line-height: 2;
    }
  }
}
</style>
