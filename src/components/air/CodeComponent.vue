<template>
  <div>
    <v-container>
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
                    {{ translation.name }} <v-icon icon="mdi-airplane" />
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
              
                <img :src="`https://admin.majanexpress.net${air.img}`" alt="" />
              </div>
            </v-col>
          </v-row>
        </div>
      </div>

      <div
        class="code"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
      >
        <h3 class="calculator" style="margin: 36px 0" v-if="visable_code">
          {{ $t("misc.getYourCode") }}
        </h3>
        <h3 class="calculator" style="margin: 36px 0" v-if="!visable_code">
          {{ $t("misc.picture") }}
        </h3>
        <div class="calc_size">
          <form @submit.prevent="getCode" v-if="visable_code">
            <div class="form-group">
              <input
                required
                v-model="name"
                type="text"
                :placeholder="$t('misc.username')"
              />
            </div>
            <!-- <vue-tel-input v-model="phone"></vue-tel-input> -->
            <!--   maxlength="8"  -->
            <div class="form-group">
              <input
                v-model="phone"
                :placeholder="$t('misc.phone')"
                required
                minlength="8"
                type="tel"
              />
            </div>
            <div class="form-group">
              <button class="confirm_btn" type="submit">
                {{ $t("misc.next") }}
              </button>
            </div>
          </form>

          <div class="" v-if="!visable_code">
            <p class="mycode" style="text-align: center">{{ name }}</p>
            <p class="mycode" style="text-align: center">{{ phone }}</p>
            <br />
            <h5 class="second_head">{{ $t("misc.yourCode") }}</h5>

            <!-- <p class="mycode">OM-MJN{{ code }}</p> -->
            <p class="mycode">{{ code }}</p>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
// import xlsx from "xlsx";
export default {
  data() {
    return {
      name: "",
      phone: "",
      visable_code: true,
      code: "OM-MJN" + Math.ceil(Math.random() * 1000),
      air: {
     
        img: null,
  
      },
      translations: [],
    };
  },
  methods: {
    getCode() {
      const form = new FormData();
      form.append("name", this.name);
      form.append("phone", this.phone);
      form.append("code", this.code);
      this.axios({
        method: "POST",
        url: "getCode",
        data: form,
      })
        .then((res) => {
          this.visable_code = !this.visable_code;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    airFreight() {
      this.axios({
        method: "GET",
        url: "airFreight",
      })
        .then((res) => {
          this.translations = res.data.translations;
          this.air.img = res.data.img;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.airFreight();
  },
};
// form.append("code", this.code);
// this.code = res.code;
// this.code = Math.ceil(Math.random() * 1000);
// localStorage.setItem("code", `OM-MJN${this.code}`);
</script>

<style lang="scss">
.air {
  .contain {
    margin: 40px 0;
    h5 {
      color: #508bb3;
      margin: 14px 0;
      font-size: 23px;
    }
    h3 {
      margin: 20px 0;
      .v-icon {
        color: #508bb3;
        margin: 0 5px;
      }
    }
    span {
      display: block;
      margin: 10px 0;
    }
    .address {
      div {
        font-weight: 500;
        font-size: 18px;
        margin-bottom: 30px;
        .v-icon {
          color: blue;
          // margin:0 7px ;
        }
      }
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
  .marquee {
    background: #436e8a;
    color: white;
    height: 5px;
    padding: 0;
  }
}
.code {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  .calculator {
    color: rgb(5, 5, 164);
    font-family: "Cairo-Bold";
    margin: 20px 0;
    font-size: 22px;
    text-align: center;
  }
  .calc_size {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    column-gap: 20px;
    width: 70%;
    padding: 20px 0;
    margin-block: 15px;
    border-radius: 16px;
    border: 1px solid #e9e8e8;
    box-shadow: 0 0 10px 2px #e1e1e199;

    .form-group {
      text-align: center;
      margin: 20px 0;
      width: 100%;
      input {
        border: 2px solid #6c757d42;
        text-align: center;
        padding: 6px 0px;
        width: 100%;

        &:focus {
          box-shadow: none;
          border-color: #e37b0b;
          outline: 0;
        }
        &::placeholder {
          font-size: 14px;
          // color:red
        }
      }
    }
  }
  .result {
    text-align: center;

    p {
      color: rgb(5, 5, 164);
      font-family: "Cairo-Bold";
      display: inline-block;
    }
    .second_head {
      margin: 5px 0;
    }
  }
  .mycode {
    margin: 12px 10px;
    border: 2px solid #bbbbbb42;
    padding: 7px;
  }
}

@media (max-width: 400px) {
  .code input {
    width: 60% !important;

    &::placeholder {
      font-size: 10px !important;
    }
  }
  .second_head {
    font-size: 14px;
  }
}
@media (max-width: 500px) {
  .code .calculator {
    font-size: 16px !important;
  }
}
</style>
