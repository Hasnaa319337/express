<template >
  <div>

    <select v-model="this.$i18n.locale" id="locale" @change="localfff">
      <option
        v-for="(locale, index) in this.$i18n.availableLocales"
        :value="locale"
        key="index"
      >
        {{ locale }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
methods:{
  localfff(){
    console.log(this.$i18n.locale);
  }
}
}

</script>

<style scoped>
label,
select {
  width: 100%;
}
select {
  height: 25px;
}
</style>
