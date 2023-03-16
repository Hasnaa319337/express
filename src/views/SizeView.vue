<template>
  <div>
    <HeadCard />
    <v-container>
      <div class="big_size">
        <h3 class="calculator">{{ $t("misc.calculator") }}</h3>
        <div class="calc_size">
          <div class="line"></div>
          <h6 v-if="visable_calc">{{ $t("misc.chooseUnit") }}</h6>
          <div class="select" v-if="visable_calc">
            <div>
              <input
                type="radio"
                id="cm"
                name="units"
                value="cm"
                v-model="unit"
                checked
              />
              <label for="cm">{{ $t("misc.cm") }}</label>
            </div>
            <div>
              <input
                type="radio"
                id="inch"
                name="units"
                value="inch"
                v-model="unit"
              />
              <label for="inch">{{ $t("misc.inch") }}</label>
            </div>
          </div>
          <!-- calc cm -->
          <div class="cm_mode" v-if="unit === 'cm'">
            <form @submit.prevent="calcSizeCm" v-if="visable_calc">
              <div class="form-group">
                <label for="lenght">{{ $t("misc.enterLenght") }}</label>

                <input v-model="length" :placeholder="$t('misc.cm')" required />
              </div>
              <div class="form-group">
                <label for="width">{{ $t("misc.enterWidth") }}</label>

                <input v-model="width" :placeholder="$t('misc.cm')" required />
              </div>
              <div class="form-group">
                <label for="height">{{ $t("misc.enterHeight") }}</label>

                <input v-model="height" :placeholder="$t('misc.cm')" required />
              </div>
              <div class="form-group">
                <label for="quantity">{{ $t("misc.quantity") }}</label>

                <input v-model="quantity" required />
              </div>
              <div class="form-group">
                <button class="confirm_btn" type="submit">
                  {{ $t("misc.calc") }}
                </button>
              </div>
            </form>
            <div class="result" v-if="visable_result">
              <h5 class="second_head">{{ $t("misc.inputs") }}</h5>
              <div class="inputs">
                <div>
                  {{ $t("misc.lenght") }} : {{ length }} {{ $t("misc.cm") }}
                </div>
                <div>
                  {{ $t("misc.width") }} : {{ width }} {{ $t("misc.cm") }}
                </div>
                <div>
                  {{ $t("misc.height") }} : {{ height }} {{ $t("misc.cm") }}
                </div>
                <div>{{ $t("misc.quantity") }} : {{ quantity }}</div>
              </div>
              <div class="line"></div>
              <div class="final_result">
                <h5 class="second_head">{{ $t("misc.result") }}</h5>

                <p>{{ $t("misc.resultText") }}</p>
                <div class="span_div">
                  <h2>cbm</h2>
                  <h2>{{ result }}</h2>
                </div>
              </div>
              <button class="confirm_btn" @click="calAgain">
                {{ $t("misc.calcAgain") }}
              </button>
            </div>
          </div>

          <!-- calc inch -->
          <div class="inch_mode" v-if="unit === 'inch'">
            <form @submit.prevent="calcSizeInch" v-if="visable_calc">
              <div class="form-group">
                <label for="lenght">{{ $t("misc.enterLenght") }}</label>

                <input
                  required
                  v-model="length"
                  :placeholder="$t('misc.inch')"
                />
              </div>
              <div class="form-group">
                <label for="width">{{ $t("misc.enterWidth") }}</label>

                <input
                  v-model="width"
                  :placeholder="$t('misc.inch')"
                  required
                />
              </div>
              <div class="form-group">
                <label for="height">{{ $t("misc.enterHeight") }}</label>

                <input
                  v-model="height"
                  :placeholder="$t('misc.inch')"
                  required
                />
              </div>
              <div class="form-group">
                <label for="quantity">{{ $t("misc.quantity") }}</label>

                <input v-model="quantity" required />
              </div>
              <div class="form-group">
                <button class="confirm_btn" type="submit">
                  {{ $t("misc.calc") }}
                </button>
              </div>
            </form>
            <div class="result" v-if="visable_result">
              <h5 class="second_head">{{ $t("misc.inputs") }}</h5>
              <div class="inputs">
                <div>
                  {{ $t("misc.lenght") }} : {{ length }} {{ $t("misc.inch") }}
                </div>
                <div>
                  {{ $t("misc.width") }} : {{ width }} {{ $t("misc.inch") }}
                </div>
                <div>
                  {{ $t("misc.height") }} : {{ height }} {{ $t("misc.inch") }}
                </div>
                <div>{{ $t("misc.quantity") }} : {{ quantity }}</div>
              </div>
              <div class="line"></div>
              <div class="final_result">
                <h5 class="second_head">{{ $t("misc.result") }}</h5>

                <p>{{ $t("misc.resultText") }}</p>
                <div class="span_div">
                  <h2>cbm</h2>
                  <h2>{{ result }}</h2>
                </div>
              </div>
              <button class="confirm_btn" @click="calAgain">
                {{ $t("misc.calcAgain") }}
              </button>
            </div>
          </div>
        </div>

        <v-row>
          <v-col cols="12" lg="6" md="6" sm="12" xs="12">
            <div class="info">
              <h3 class="calculator">{{ $t("misc.sizeHead1") }}</h3>
              <p>{{ $t("misc.sizeInfo1") }}</p>
            </div>
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="12" xs="12">
            <div class="info">
              <h3 class="calculator">{{ $t("misc.sizeHead2") }}</h3>
              <p>{{ $t("misc.sizeInfo2") }}</p>
            </div>
          </v-col>
        </v-row>

        <div class="table_container">
          <h3 class="calculator">{{ $t("misc.tabelHead") }}</h3>
          <table class="table">
            <tr style="background: #e37b0b">
              <td>{{ $t("misc.size") }}</td>
              <td>{{ $t("misc.sya") }}</td>
            </tr>
            <tr style="background: #bbb">
              <td>20 قدم</td>
              <td>33 CBM</td>
            </tr>
            <tr style="background: #ccc">
              <td>40 قدم</td>
              <td>67.3 CBM</td>
            </tr>
            <tr style="background: #bbb">
              <td>40 قدم High Cube</td>
              <td>76 CBM</td>
            </tr>
            <tr style="background: #ccc">
              <td>45 قدم High Cube</td>
              <td>85.7 CBM</td>
            </tr>
          </table>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import HeadCard from "../components/HeadCard.vue";

export default {
  components: { HeadCard },
  data() {
    return {
      quantity: 1,
      height: null,
      width: null,
      length: null,
      result: null,
      unit: "cm",
      visable_result: false,
      visable_calc: true,
    };
  },
  methods: {
    calcSizeCm() {
      this.result =
        (this.quantity * this.height * this.width * this.length) / 1000000;

      this.visable_result = true;
      this.visable_calc = false;
      console.log("cm");
      return this.result;
    },
    calcSizeInch() {
      this.result =
        (this.quantity * this.height * this.width * this.length) /
        61023.744094732;

      this.visable_result = true;
      this.visable_calc = false;

      console.log("inch");
      return this.result;
    },
    calAgain() {
      this.visable_result = false;
      this.visable_calc = true;
      this.quantity = 1;
      this.height = null;
      this.width = null;
      this.length = null;
    },
  },
};
</script>

<style lang="scss">
.big_size {
  font-family: "Cairo-Regular";
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  margin: 20px 0;
  .calculator {
    color: rgb(5, 5, 164);
    font-family: "Cairo-Bold";
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
    h6 {
      font-family: "Cairo-Bold";
    }
    .select {
      display: flex;
      justify-content: center;
      align-items: center;
      justify-items: center;
      column-gap: 25px;
      div {
        margin: 7px 0;
        input {
          margin: 0 5px;
        }
      }
    }
    .form-group {
      text-align: center;
      margin: 0 20px;
      input {
        border: 2px solid #6c757d42;
        text-align: center;
        padding: 6px 0px;
        &:focus {
          box-shadow: none;
          border-color: #e37b0b;
          outline: 0;
        }
      }
      label {
        font-size: 18px;
        font-family: "Cairo-SemiBold";
        margin: 15px 0;
        display: block;
      }
    }

    .result {
      display: flex;
      align-items: center;
      justify-content: center;
      justify-items: center;
      flex-direction: column;
      padding: 5px;

      .inputs {
        display: flex;
        align-items: center;
        justify-content: center;
        justify-items: center;
        column-gap: 20px;
        margin-top: 20px;

        div {
          border: 1px solid #e9e8e8;
          padding: 10px;
          margin-bottom: 20px;
        }
      }
      .final_result {
        display: flex;
        align-items: center;
        justify-content: center;
        justify-items: center;
        flex-wrap: wrap;
        flex-direction: column;
        margin: 0px 0 25px;
        .span_div {
          display: flex;
          align-items: center;
          justify-content: center;
          justify-items: center;
          column-gap: 10px;
          h2 {
            color: rgb(5, 5, 164);
            font-family: "Cairo-ExtraBold";
            display: inline-block;
          }
        }
      }
      .line {
        width: 100%;
        height: 2px;
        background: #bbb;
        margin: 30px 0;
        overflow: hidden;
        margin: 0 2px;
      }
      .second_head {
        font-family: "Cairo-Medium";
        color: rgb(3, 3, 96);
        font-weight: 700;
        margin: 10px 0;
      }
      p {
        font-size: 16px;
        color: rgb(5, 5, 164);
        font-family: "Cairo-SemiBold";
      }
    }
  }
  .info {
    h3 {
    }
    margin: 40px 20px;
    p {
      text-align: justify;
      margin: 25px 0;
      line-height: 1.9;
      font-size: 18px;
      font-family: "Cairo-SemiBold";
    }
  }
  .table_container {
    width: 70%;
      display: flex;
      justify-content: center;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    h3 {
      margin: 30px 0;
     
    }
    table {
      text-align: center;
      
      td{
        padding: 10px 0 !important;
        font-family: "Cairo-Medium" !important;
        font-size: 18px;
      }
    }
  }
}

@media (max-width: 800px) {
  .calc_size {
    width: 100%;
    padding: 3px;

    .result {
      .inputs {
        column-gap: 5px !important;
      }
      p {
        font-size: 12px !important;
      }
    }
    .confirm_btn {
      padding: 6px 11px;
      font-size: 11px;
    }
  }
}
@media (max-width: 500px) {
    .table_container{
        width: 100%;
        table{
            td{
                font-size: 14px !important;
            }
        }

    }
  .big_size {
    width: 100%;

    form {
      input {
        width: 150px;
      }
    }
    .select {
      //   column-gap: 0 !important;
      div {
        margin: 7px 0;
        input {
          margin: 5px !important;
          width: auto !important;
        }
      }
    }
    .result .inputs div {
      padding: 4px !important;
      font-size: 9px;
    }
    .calc_size .result .final_result .span_div h2 {
      font-size: 15px;
    }
  }
}
@media (max-width: 350px) {
  .big_size {
    label {
      font-size: 12px !important;
    }
  }
  .input {
    width: 100px !important;
  }
}
@media (max-width: 290px) {
  .big_size .calc_size .result p {
    font-size: 8px !important;
  }
}
</style>
