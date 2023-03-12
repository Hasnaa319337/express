<template>
  <div class="sub_footer">
    <v-container>
      <div class="contact_ways">
        <v-row>
          <v-col cols="12" lg="4" md="4" xs="12">
            <v-row>
              <v-col cols="12" lg="2" md="2" xs="2">
                <v-icon icon="mdi-clock-time-four-outline" />
              </v-col>
              <v-col cols="12" lg="10" md="10" xs="10">
                <span>ساعات العمل</span>
                <div class="contain">
                  <p>الأحد - الخميس 09.00 - 18.00</p>
                  <p>السبت 09.00 - 14.00</p>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" lg="4" md="4" xs="12">
            <v-row>
              <v-col cols="12" lg="2" md="2" xs="2">
                <v-icon icon="mdi-phone-hangup" />
              </v-col>
              <v-col cols="12" lg="10" md="10" xs="10">
                <span> تواصل معنا</span>
                <div class="contain">
                  <p>95564020</p>
                  <p>92247043</p>
                  <ul>
                    <li>
                      <ShareNetwork
                        network="facebook"
                        url="https://m.facebook.com/MajanExpress/"
                        hashtags="vuejs,vite"
                      >
                        <v-icon icon="mdi-facebook"></v-icon>
                      </ShareNetwork>
                    </li>
                    <li>
                      <ShareNetwork
                        network="whatsapp"
                        url="https://api.whatsapp.com/send/?phone=%2B96895564020&text&type=phone_number&app_absent=0"
                        hashtags="vuejs,vite"
                      >
                        <v-icon icon="mdi-whatsapp"></v-icon>
                      </ShareNetwork>
                    </li>
                  </ul>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" lg="4" md="4" xs="12">
            <v-row>
              <v-col cols="12" lg="2" md="2" xs="2">
                <v-icon icon="mdi-email" />
              </v-col>
              <v-col cols="12" lg="10" md="10" xs="10">
                <span>البريد اللإلكتروني </span>
                <div class="contain">
                  <p>Majanexpres@gmail.com</p>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sub_footer {
  background: #232135e8;
  padding: 30px 0;
  color: white;
}
.contact_ways {
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin: 20px 0;
}
.sub_footer .v-icon {
  font-size: 40px;
}
.sub_footer span {
  font-family: "Cairo-Medium";
  font-size: 20px;
  margin-bottom: 20px;
  display: block;
}
.sub_footer p {
  margin: 0;
  margin-bottom: 7px;
}
.sub_footer .v-icon:hover {
  transform: rotate(20deg) scale(1.03);
  transition: 0.3s all ease-in-out;
}
.sub_footer ul {
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  justify-items: center;
  column-gap: 7px;
}
.sub_footer ul a {
  text-decoration: none;
  color: white;
}
.sub_footer ul .v-icon {
  font-size: 30px;
  margin-top: 20px;
}
</style>
