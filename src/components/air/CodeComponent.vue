<template>
  <div>
    <v-container>
      <div class="code">
        <h3 class="calculator">{{ $t("misc.getYourCode") }}</h3>
        <div class="calc_size">
          <form @submit.prevent="getCode" v-if="visable_code">
            <div class="form-group">
              <input
                required
                v-model="username"
                type="text"
                :placeholder="$t('misc.username')"
              />
            </div>
            <!-- <vue-tel-input v-model="phone"></vue-tel-input> -->
            <div class="form-group">
              <input
                v-model="phone"
                :placeholder="$t('misc.phone')"
                required
                minlength="8"
                maxlength="8"
                type="tel"
              />
            </div>
            <div class="form-group">
              <button class="confirm_btn" type="submit">
                {{ $t("misc.next") }}
              </button>
            </div>
          </form>
          <div class="result" v-if="!visable_code">
            <h5 class="second_head">{{ $t("misc.yourCode") }}</h5>
            <p class="mycode">MJN{{ code }}</p>
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
      username: "",
      phone: "",
      visable_code: true,
      code: null,
    };
  },
  methods: {
    getCode() {
      localStorage.setItem("username", this.username);
      localStorage.setItem("phone", this.phone);
      this.code = Math.ceil(Math.random() * 100);
      localStorage.setItem("code", `MJN${this.code}`);
      this.visable_code = !this.visable_code;

      let data = localStorage.getItem("username");
      let worksheet = xlsx.utils.json_to_sheet(JSON.parse(data));
      let workbook = xlsx.utils.book_new();
      xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      xlsx.writeFile(workbook, "username.xlsx");
    },
  },
};
</script>

<style lang="scss">
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
      margin: 20px;
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
          font-size: 14px !important;
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
  }
  .mycode {
    margin: 13px 0;
    border: 2px solid #bbbbbb42;
    padding: 7px;
  }
}
</style>
