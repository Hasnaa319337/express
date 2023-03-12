<template>
  <div>
    <div class="whous">
      <div
        class="whous_contain"
        data-aos="slide-left"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
      >
        <h4>حول مجان للشحن</h4>
        <p>
          مجموعة موثقة تقدم العديد من الخدمات ذات القيمة المضافة المتعلقة بالشحن
          بجميع أنواعه (الشحن الجوي والبحري والتوصيل الداخلي في سلطنة عمان)
        </p>
        <router-link to="/about" class="btn btn-border-4">
          <img src="@/assets/images/Arrow.png" alt="" />
          تعرف علينا
        </router-link>
      </div>
 
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
.whous {
  background-image: url("https://www.majanexpres.com/assets/images/breadcrumbs_bg.jpg");
  background-size: cover;
  background-position: 50% 50%;
  height: 450px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 50px 0;
  margin: 50px 0;
}
.whous_contain {
  width: 42%;
  margin-bottom: 30px;

  padding: 30px 40px;
  background: #070d36;
  color: white;
  border-radius: 8px;
}
.whous_contain h4 {
  font-size: 24px;
  margin-bottom: 20px;
  font-family: "Cairo-SemiBold";
}
.whous_contain p {
  font-size: 18px;
  margin: 11px 0;
}
.whous_contain img {
  width: 12px;
  margin: 0 8px;
}
.whous_contain a {
  position: relative;
  display: inline-block;
  background: white;
  text-align: center;
  font-family: "Podkova-SemiBold";
  transition: all 0.5s linear;
  width: 150px;
  height: 40px;
  font-size: 20px;
  color: #000;
  float: left;
  padding-top: 5px;
}

.logo_image {
  height: 85%;
  margin: auto;
}
.logo_image img {
  width: 100% !important;
  height: 100% !important;
}
@media (max-width: 800px) {
  .whous_contain {
    width: 45%;
  }
  .logo_image {
    width: 350px;
  }
}
@media (max-width: 500px) {
  .whous_contain h4 {
    font-size: 18px;
  }
  .whous_contain p {
    font-size: 12px;
    margin: 5px 0;
  }
  .whous_contain a {
    font-size: 16px;

    width: 120px;
    height: 30px;
  }
}
@media (max-width: 380px) {
  .whous_contain h4 {
    font-size: 12px;
  }
  .whous_contain p {
    font-size: 8px;
    margin: 5px 0;
  }
  .whous_contain a {
    font-size: 12px;

    width: 100px;
    height: 30px;
  }
}
</style>
