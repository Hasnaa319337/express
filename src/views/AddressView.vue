<template>
  <div class="our_address">
    <head-card />
    <v-container>
      <div class="contain">
        <v-row>
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
            <div class="address">
              <h3>{{ $t("misc.seaFreight") }} <v-icon icon="mdi-ferry" /></h3>
              <h5>Yiwu — china</h5>

              <span>
                (海运仓库地址) 收货人：仓管(李锐) 18057931507
                地址：浙江省金华市义乌市苏福路255号博尼B栋W05仓库。</span
              >
              <div>
                1- ⚠️唛头⚠️ （唛头形式客户名字➕客户电话号码➕货物英文品名+MJN）
              </div>
              <div>
                2-
                货物用纸箱包装必须用编织袋套装然后外包贴唛头没有编织袋的则用胶带整体缠封纸箱然后贴客户唛头，唛头必须贴四面，否则拒绝收货，
              </div>
              <div>
                3- 大货或者重货工厂自带工人卸货，如需叉车 ，请提前联系。
              </div>

              <div>
                4- 发货前请加17688269444
                彭嘉俊微信⚠️确认后再发货否则仓库有权拒收，所产生的问题和费用由发货方承担。
              </div>
            </div>

            <marquee class="marquee"></marquee>
          </v-col>
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
            <div class="image">
              <img
                src="../assets/images/container-ship-6631117_640.jpg"
                alt=""
              />
            </div>
          </v-col>
        </v-row>
      </div>
      <div></div>
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
.our_address {
  .contain {
    margin-bottom: 60px;
    h5 {
      color: #508bb3;
      margin: 14px 0;
      font-size: 23px;
    }
    h3 {
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
</style>
