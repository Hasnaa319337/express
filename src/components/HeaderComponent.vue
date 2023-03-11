<template>
  <div class="na">
    <div class="card relative z-2">
      <v-container>
        <Menubar :model="items">
          <template #start>
            <router-link to="/">
              <img
                alt="logo"
                src="https://www.majanexpres.com/assets/images/logo.png"
                height="90"
                width="150"
                class="mr-2"
            /></router-link>
          </template>

          <template #end>
            <img
              alt="logo"
              src="https://primefaces.org/cdn/primevue/images/logo.svg"
              height="40"
              class="mr-2"
            />
          </template>
        </Menubar>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: "File",
        },
        {
          label: "Edit",
        },
        {
          label: "vv",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card {
  background: #fff;
}
.p-menubar .p-menubar-root-list {
  outline: 0 none;
  margin: auto;
}
.p-menubar {
  display: flex;
  align-items: center;
  background: none !important;
  border: 0 !important;
  outline: 0;
  padding: 0 !important;
}
.p-menubar .p-menuitem {
  margin: 0 15px;
}
.v-container {
  padding: 5px !important;
}
</style>
