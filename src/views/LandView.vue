<template>
  <div>
    <head-card />
    <div class="land">
      <v-container>
        <!-- <p>{{ $t('misc.agreement') }}</p> -->

        <div class="air">
          <div class="contain">
            <v-row>
              <v-col
                cols="12"
                lg="6"
                md="6"
                sm="6"
                xs="12"
                data-aos="slide-left"
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              >
                <div class="address">
                  <template
                    v-for="translation in translations"
                    :key="translation"
                  >
                    <h3 v-if="translation.locale == this.$i18n.locale">
                      {{ translation.name }} <v-icon icon="mdi-truck" />
                    </h3>
                    <!-- <h5>Yiwu — china</h5> -->
                    <div v-if="translation.locale == this.$i18n.locale">
                      {{ translation.description }}
                    </div>
                  </template>
                </div>
              </v-col>
              <v-col
                cols="12"
                lg="6"
                md="6"
                sm="6"
                xs="12"
                data-aos="slide-right"
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              >
                <div class="image">
                  <img :src="`https://admin.majanexpress.net${land.img}`" alt="" />
                 
                </div>
              </v-col>
            </v-row>
          </div>
        </div>

        
      </v-container>
    </div>
  </div>
</template>

<script>
import HeadCard from "../components/HeadCard.vue";
export default {
  components: { HeadCard },
  data() {
    return {
      land: {
        img: null,
      },
      translations: [],
    };
  },
  methods: {
    landFreight() {
      this.axios({
        method: "GET",
        url: "landFreight",
      })
        .then((res) => {
          this.translations = res.data.translations;
          this.land.img = res.data.img;
     
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.landFreight();
  },
};
</script>

<style lang="scss">
.land {
  margin-top: 50px;
  p {
    color: rgb(5, 5, 164);
    font-family: "Cairo-Bold";
    margin: 20px 0;
    font-size: 22px;
    text-align: center;
  }
  .image {
      border-radius: 8px;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
      }
    }
}
</style>
