<template>
  <section
    data-w-id="59d16d4f-bf37-d50c-f53d-f60398635b53"
    class="call-to-action py-14 md:py-0"
    style="
      will-change: transform;
      transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      transform-style: preserve-3d;
    "
  >
    <div
      data-w-id="862d7fe0-a6b1-c9ca-fb7f-59b962046ba4"
      class="container mx-auto rounded-lg"
    >
      <div class="call-to-action-inner md:py-32 md:px-20 p-3">
        <div class="section-title-wrap">
          <h3
            class="section-title mb-20"
            style="
              transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
                rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              transform-style: preserve-3d;
            "
          >
            Lets’ Connect
          </h3>
          <p
            style="
              transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
                rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              transform-style: preserve-3d;
            "
            class="cta-paragraph text-white"
          >
            Subscribe to our weekly newsletter.
          </p>
          <div
            style="
              transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
                rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              transform-style: preserve-3d;
            "
            class="call-to-action-form-wrap w-form md:w-5/12"
          >
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              method="get"
              class="call-to-action-form w-full"
              aria-label="Email Form"
            >
              <input
                v-model="email"
                type="text"
                class="call-to-action-form-input-field md:w-[460px] w-full w-input"
                maxlength="256"
                name="email"
                data-name="Email"
                placeholder="Enter your mail"
                id="email"
              /><button
                @click.prevent="subscribeToUs"
                type="submit"
                class="submit-button2 is-magnetic w-button"
                style="
                  will-change: transform;
                  transform: translate3d(0em, 0em, 0px) scale3d(1, 1, 1)
                    rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                  transform-style: preserve-3d;
                "
              >
                <span class="flex relative justify-center items-center gap-3">
                  <Spinner v-if="subscribing" />
                  <span v-else>Subscribe</span>
                </span>
              </button>
            </form>
          </div>
        </div>
        <div class="call-to-action-thumbnail-wrap">
          <img
            src="~/assets/large_img/rail.png"
            srcset="
              https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f35c3c863d5816c2693a99_railline-p-500.png 500w,
              https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f35c3c863d5816c2693a99_railline.png       685w
            "
            sizes="(max-width: 767px) 100vw, 685px"
            alt=""
            class="railline-image"
          /><img
            src="~/assets/large_img/train.png"
            srcset="
              https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f35c3cb1910b2e2214b161_rail-p-500.png 500w,
              https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f35c3cb1910b2e2214b161_rail.png       662w
            "
            style="
              transform: translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg)
                rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              transform-style: preserve-3d;
            "
            sizes="(max-width: 767px) 100vw, 661.9921875px"
            alt=""
            class="train-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { toastHandler } from "@/composables/toastHandler";

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const subscribing = ref(false);
const email = ref("");

const subscribeToUs = () => {
  const test = emailRegex.test(email.value);

  if (email.value.length < 4) {
    toastHandler("Invalid email", 3000);
  } else if (test === false) {
    toastHandler("Invalid email", 3000);
  } else {
    subscribing.value = true;
    setTimeout(() => {
      subscribing.value = false;
    }, 4000);
  }
};
</script>

<style scoped>
.call-to-action-inner {
  position: relative;
  z-index: 0;
  /* padding: 120px 110px; */
  border: 2px solid #000;
  background-color: #89bcff;
}
.section-title-wrap {
  position: relative;
  z-index: 1;
}

.section-title.mb-20 {
  margin-bottom: 20px;
  color: #fff;
}
.section-title {
  margin-top: 0px;
  margin-bottom: 0px;
}
.cta-paragraph {
  max-width: 490px;
  margin-bottom: 36px;
}
.w-form-done {
  display: none;
  padding: 20px;
  text-align: center;
  background-color: #dddddd;
}
.w-form-fail {
  display: none;
  margin-top: 10px;
  padding: 10px;
  background-color: #ffdede;
}
.call-to-action-thumbnail-wrap {
  position: absolute;
  left: auto;
  top: 0%;
  right: 0%;
  bottom: auto;
  z-index: 0;
  text-align: right;
}
.train-image {
  position: absolute;
  left: auto;
  top: 0%;
  right: 0%;
  bottom: auto;
  z-index: 0;
}

h3 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: "FontSpring Demo priego", sans-serif;
  font-size: 60px;
  line-height: 120%;
  font-weight: 600;
}

@media screen and (max-width: 500px) {
  h3 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-family: "FontSpring Demo priego", sans-serif;
    font-size: 40px;
    line-height: 120%;
    font-weight: 600;
  }
}
p {
  margin-bottom: 10px;
  font-family: Outfit, sans-serif;
  font-size: 20px;
  line-height: 150%;
}

@media screen and (min-width: 1440px) {
  .call-to-action-form-input-field {
    font-size: 20px;
    font-weight: 500;
    text-transform: none;
  }
}

.call-to-action-form-input-field {
  /* width: 500px; */
  min-height: 80px;
  margin-bottom: 0px;
  padding: 28px 28px 28px 30px;
  border: 1.5px solid #000;
}
.w-input .w-select {
  display: block;
  width: 100%;
  height: 38px;
  padding: 8px 12px;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333333;
  vertical-align: middle;
  background-color: #ffffff;
  border: 1px solid #cccccc;
}
button.w-button {
  -webkit-appearance: button;
}
.submit-button2 {
  position: absolute;
  left: auto;
  top: 23px;
  right: 16px;
  bottom: auto;
  z-index: 1;
  max-height: 64px;
  padding: 12px 36px;
  border: 1px solid #000;
  background-color: #0e0f18;
  color: #fff;
  font-size: 18px;
  line-height: 150%;
  font-weight: 500;
}
.w-button {
  display: inline-block;
  padding: 9px 15px;
  background-color: #3898ec;
  color: white;
  border: 0;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0;
}
.call-to-action-form {
  position: relative;
  display: inline-block;
}
</style>
