<template>
  <div>
    <head-card />
    <div class="contact">
      <v-container>
        <h3>{{ $t("misc.contactDirect") }}</h3>
        <P>{{ $t("misc.contactDaily") }}</P>

        <div class="contact_content">
          <div class="info_content" v-for="setting in settings" :key="setting">
         
            <v-row  v-if="setting.locale == this.$i18n.locale">
              <v-col class="col_div" cols="12" lg="4" md="4" xs="12">
                <v-icon icon="mdi-map-marker-outline" style="color: #13136b" />
                <br />
                <span >{{
                  setting.address
                }}</span>
              </v-col>
              <v-col class="col_div" cols="12" lg="4" md="4" xs="12">
                <v-icon icon="mdi-whatsapp" style="color: #08a508" /> <br />
                <span >{{
                  setting.phone
                }}</span>
              </v-col>
              <v-col class="col_div" cols="12" lg="4" md="4" xs="12">
                <v-icon icon="mdi-gmail" style="color: #cb0909" />
                <br />
                <span>{{
                  setting.email
                }}</span>
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
      settings: [],
    };
  },
  methods: {
    siteSettings() {
      this.axios({
        method: "GET",
        url: "siteSetting",
      })
        .then((res) => {
          this.settings = res.data.translations;
          this.logo = res.data.logo;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.siteSettings();
  },
};
</script>

<style lang="scss">
.contact {
  text-align: center;
  padding-bottom: 50px;
  h3 {
    font-family: "Cairo-Bold";
    margin: 20px 0;
    color: #150f4e;
  }
  p {
    font-family: "Cairo-Medium";
    font-size: 20px;
    margin-bottom: 50px;
  }

  .contact_content {
    margin: auto;
    width: 65%;
    background: #f2efe6;
    border-radius: 20px;
    padding: 20px;
    .info_content {
      padding: 10px 45px;
    padding-top: 0;
    padding-bottom: 20px;
    }

    h4 {
      text-align: center;
      margin-top: 0;
      margin-bottom: 0.5em;
      color: rgb(0 0 0 / 79%);
      font-weight: bold;
      font-size: 29px;
      margin-bottom: 50px;
      font-family: Cairo-Bold;
    }
    .col_div {
      text-align: center;
      .v-icon {
        font-size: 45px;

        margin-bottom: 23px;
      }
      span {
        font-family: Cairo-SemiBold !important;
      }
    }
  }
}
@media (max-width: 960px) {
  .contact_content {
    width: 66% !important;
    height: 450px !important;

    .v-icon {
      margin-bottom: 10px !important;
    }
  }
}
@media (max-width: 500px) {
  .contact_content {
    span {
      font-size: 15px;
    }
  }
}
@media (max-width: 450px) {
  .contact_content {
    span {
      font-size: 10px;
    }
  }
}
</style>
