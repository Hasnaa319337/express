<template>
  <section class="offer containBK">
    <div class="back">
      <div class="heads">
        <h3>{{ showurl() }}</h3>
        <ul>
          <li>
            <router-link to="/">{{ $t("navs.home") }}</router-link>
          </li>
          <li>
            <v-icon
              icon="mdi-chevron-left"
              class="icon_left"
              v-if="$i18n.locale == 'ar'"
            />
            <v-icon icon="mdi-chevron-right" class="icon_right" v-else />
          </li>

          <li style="margin: 0px">{{ showurl() }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      myurl: window.location.pathname,
    };
  },
  methods: {
    showurl: function () {
      this.myurl = this.myurl.replace("/", "");

      // About Us
      if (this.myurl === "about") {
        if (this.$i18n.locale == "ar") {
          var newURL = "من نحن";
        } else {
          newURL = "About Us";
        }
        return newURL;
      }


      if (this.myurl === "contact-us") {
        if (this.$i18n.locale == "ar") {
          newURL = "تواصل معنا";
        } else {
          newURL = "Contact Us";
        }
        return newURL;
      }


      if (this.myurl === "address") {
        if (this.$i18n.locale == "ar") {
          newURL = "عناوينا";
        } else {
          newURL = "Our Address";
        }
        return newURL;
      }

      if (this.myurl === "services") {
        if (this.$i18n.locale == "ar") {
          newURL = "خدماتنا ";
        } else {
          newURL = "Our Servies";
        }
        return newURL;
      }
      if (this.myurl === "courses") {
        if (this.$i18n.locale == "ar") {
          newURL = "الدورات ";
        } else {
          newURL = "Our Courses";
        }
        return newURL;
      }
      if (this.myurl === "size-calc") {
        if (this.$i18n.locale == "ar") {
          newURL = "حساب الحجم ";
        } else {
          newURL = "Calculating volume";
        }
        return newURL;
      }
      if (this.myurl === "airFreight") {
        if (this.$i18n.locale == "ar") {
          newURL = "الشحن الجوي";
        } else {
          newURL = "Air Freight";
        }
        return newURL;
      }
      if (this.myurl === "seaFreight") {
        if (this.$i18n.locale == "ar") {
          newURL = "الشحن البحري";
        } else {
          newURL = "Sea Freight";
        }
        return newURL;
      }
      if (this.myurl === "land") {
        if (this.$i18n.locale == "ar") {
          newURL = "الشحن البري";
        } else {
          newURL = "Land shipping";
        }
        return newURL;
      }
  

      
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.offer {
  position: relative;
  overflow: hidden;
  font-family: "Cairo-Bold", sans-serif;
  color: white;
  // height: 200px;

  .back {
    background: url("../assets/images/ship.jpg");
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }

  .heads {
    text-align: center;
    margin: auto;
    width: 100%;
    padding: 20px 0;
    h3 {
      font-size: 27px;
      font-family: Cairo-Bold;
      font-style: normal;
    }
    ul {
      overflow: hidden;
      font-family: Cairo-Regular;
      display: flex;
      justify-content: center;
      align-items: center;
      justify-items: center;
      li {
        margin: 0;
        margin-right: 7px;
        font-size: 15px;
        font-weight: 100;

        &:first-of-type {
          font-weight: 700;
        }
        &:last-of-type {
          color: #000;
          margin-top: 3px;
        }
      }
    }
    .icon_left {
      color: #504e4eb3;
      font-size: 23px;
    }
    a {
      cursor: pointer;
      color: var(--vt-c-volite);
    }
  }
}

@media (max-width: 900px) {
  .heads .offer .heads {
    h3 {
      font-size: 30px;
      width: 100%;
    }
    li {
      margin-right: 5px;
      font-size: 14px;
    }
  }
}
@media (max-width: 690px) {
  .offer .heads li {
    padding: 0;
  }
}
@media (max-width: 560px) {
  .offer .heads {
    text-align: start;
    padding: 15px 0;
    h3 {
      text-align: center;
      font-size: 16px;
    }
    ul {
      column-gap: 9px;
      justify-items: center;
      li {
        font-size: 10px;
        // width: 100%;
      }
    }
  }
}
li {
  font-size: 1.3rem;
  font-size: 15px;
  padding: 15px 0;
  float: left;
  margin-right: 29px;
}
</style>
