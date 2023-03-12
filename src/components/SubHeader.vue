<template>
  <div class="big_contain">
    <v-container>
      <div class="sub_header">
        <LanguageSelect />
        <div class="phone">
          <span>968 95564020+</span>
          <v-icon icon="mdi-cellphone" />
        </div>
        <div class="phone">
          <span>Majanexpres@gmail.com</span>
          <v-icon icon="mdi-email" />
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
.big_contain {
  padding: 5px 0;

  border: none;
  background: #fafafa;
}
.sub_header {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  column-gap: 50px;
}
.sub_header .v-icon {
  color: #fe8704;
  margin: 0 7px;
}
@media (max-width: 700px) {
  .sub_header {
    column-gap: 0;
  }
}
@media (max-width: 400px) {
  .sub_header .v-icon {
  color: #fe8704;
  margin: 0 2px;
}
}
</style>
