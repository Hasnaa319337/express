<template>
  <div>
    <HeadCard />
    <v-container>
      <div class="big_size">
        <div class="calc_size">
          <div class="form-group">
            <label for="lenght">{{ $t("misc.lenght") }}</label>

            <InputNumber
              v-model="length"
              :placeholder="$t('misc.cm')"
              inputId="withoutgrouping"
              :useGrouping="false"
            />
          </div>
          <div class="form-group">
            <label for="width">{{ $t("misc.width") }}</label>

            <InputNumber
              v-model="width"
              :placeholder="$t('misc.cm')"
              inputId="withoutgrouping"
              :useGrouping="false"
            />
          </div>
          <div class="form-group">
            <label for="height">{{ $t("misc.height") }}</label>

            <InputNumber
              v-model="height"
              :placeholder="$t('misc.cm')"
              inputId="withoutgrouping"
              :useGrouping="false"
            />
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import HeadCard from "../components/HeadCard.vue";

export default {
  components: { HeadCard },
};
</script>

<style lang="scss">
.big_size {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
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
    margin: 0 10px;

    .form-group {
      text-align: center;
      margin: 0 20px;
      label {
        font-size: 18px;
        font-family: "Cairo-SemiBold";
        margin: 15px 0;
        display: block;
      }
      input {
      }
    }
    .p-inputtext {
      border: 2px solid #6c757d42;
      text-align: center;
      // height: 30px;
    }
  }
}

@media (max-width: 500px) {
  .big_size {
    width: 100%;

    input {
      width: 150px;
    }
  }
}
@media (max-width: 300px) {
  .big_size {
    .p-inputtext {
      width: 100px;
    }
    label {
      font-size: 12px !important;
    }
  }
}
</style>
