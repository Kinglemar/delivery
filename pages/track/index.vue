<template>
  <section>
    <div class="container mt-14 mx-auto w-11/12">
      <div class="banner-inner">
        <div class="banner-content">
          <h1
            style="
              transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
                rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              transform-style: preserve-3d;
            "
            class="banner-title md:text-8xl text-6xl"
          >
            Track your packages
          </h1>
          <h1
            style="
              transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
                rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              transform-style: preserve-3d;
            "
            class="banner-title md:text-8xl text-6xl"
          >
            Never miss an update
          </h1>
          <p
            style="
              transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
                rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              transform-style: preserve-3d;
            "
            class="banner-paragraph mt-5"
          >
            We continue to pursue that same vision in today's complex, uncertain
            world, working every day to earn our customers’
          </p>
        </div>
        <div class="banner-button justify-center sm:flex block gap-2">
          <div class="md:w-[24rem] md:mx-0 mb-4 lg:mb-0">
            <input
              v-model="trackingID"
              placeholder="Enter unique tracking ID"
              class="w-full border outline-0 px-8 py-4"
              type="text"
            />
          </div>

          <div
            @click="audioTracking"
            style="
              transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
                rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              transform-style: preserve-3d;
            "
            class="btn-wrapper md:w-[16rem] md:mx-0 w-10/12 mx-auto"
          >
            <pre
              class="primary-button w-inline-block cursor-pointer"
            ><button class="button-content">
                <div class="button-color">Track Shipment</div>
              </button>
            </pre>
          </div>
        </div>
      </div>
    </div>

    <div class="w-11/12 mx-auto mb-20 mt-8">
      <div class="section-title-wrap mb-5">
        <h3
          class="section-title small text-center"
          style="
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
              rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
            transform-style: preserve-3d;
          "
        >
          Over
          <span class="section-colorful-title">1,158,000 Packages</span>
          Delivered
        </h3>
      </div>
    </div>
  </section>
</template>

<script setup>
const router = useRouter();
const trackingID = ref("");
const audioTracking = () => {
  let tracker = trackingID.value;
  console.log(tracker.val);
  router.push({ path: `track/${trackingID.value}` });
};

definePageMeta({
  layout: "default",
});
</script>

<style scoped>
.p-card {
  min-height: 30rem;
}
.p-card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.section-title-wrap {
  position: relative;
  z-index: 1;
}
.section-title.small {
  font-size: 28px;
}
.section-title {
  margin-top: 0px;
  margin-bottom: 0px;
}
.section-colorful-title {
  font-family: "FontSpring Demo priego", sans-serif;
  color: #89bcff;
  font-size: 34px;
}
h1 {
  margin-top: 0px;
  font-family: "FontSpring Demo priego", sans-serif;
  /* font-size: 100px; */
}
p {
  /* color: #0e0f18; */
  /* font-size: 20px; */
  line-height: 150%;
}
.banner-button input {
  font-size: 22px;
  font-weight: 500;
  font-family: "Outfit", sans-serif;
}
.banner-button input::-webkit-input-placeholder {
  font-size: 20px;
  font-weight: 500;
  color: #5b5b7d;
  font-family: "Outfit", sans-serif;
}
.banner-inner {
  padding-top: 20px;
  padding-bottom: 20px;
}
/* .btn-wrapper:hover > div {
  display: none;
  transition: all 200ms ease;
} */
.banner-button {
  padding-top: 38px;
}
.banner-title {
  margin-bottom: 0px;
  text-align: center;
  line-height: 120%;
  font-weight: 700;
}
.banner-paragraph {
  max-width: 700px;
  margin-right: auto;
  margin-left: auto;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
}
.btn-wrapper {
  transition: all 300ms ease;
}
/* .btn-wrapper {
  position: relative;
  z-index: 0;
  display: inline-block;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
} */
.primary-button {
  position: relative;
  z-index: 6;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  /* width: 100%; */
  height: 100%;
  padding: 16px 36px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid #000;
  background-color: #fff;
  box-shadow: 7px 7px 0 0 #000;
  -webkit-transition: all 200ms ease;
  transition: all 200ms ease;
  text-decoration: none;
}
.button-content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.button-color {
  color: #0e0f18;
  font-size: 18px;
  line-height: 150%;
  font-weight: 500;
}
.video-lightbox {
  position: relative;
  z-index: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  color: #0e0f18;
  font-weight: 500;
  text-decoration: none;
}
.video-button {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-left: 32px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
}
.video-icon {
  margin-right: 8px;
}
.video-player-title {
  font-size: 18px;
  line-height: 150%;
}
.play-button-wrap {
  position: absolute;
  display: none;
  width: 60px;
  height: 60px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 10000000px;
  background-color: #0e0f18;
  color: #fff;
}
</style>
