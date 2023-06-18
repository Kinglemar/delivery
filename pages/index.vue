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
            Full Sustainable
          </h1>
          <h1
            style="
              transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
                rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              transform-style: preserve-3d;
            "
            class="banner-title md:text-8xl text-6xl"
          >
            Cargo Solution
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
            style="
              transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
                rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              transform-style: preserve-3d;
            "
            class="btn-wrapper md:w-[16rem] md:mx-0 w-10/12 mx-auto"
          >
            <pre
              @click="audioTracking"
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
          Over <span class="section-colorful-title">17,000 Clients</span> All
          Over The World
        </h3>
      </div>
      <Marque />
    </div>

    <section>
      <div class="w-11/12 mx-auto md:w-9/12">
        <h1 class="md:text-5xl text-2xl mb-4 font-bold md:mb-6">
          Customized solutions
          <br />
          for your business
        </h1>
        <div class="md:grid grid-cols-3 justify-start gap-5 mt-16">
          <div
            class="w-full rounded-lg border border-[#ddddec] relative p-4 md:mb-0 mb-8"
          >
            <div class="absolute top-[-18px] bg-[#f4f7ff]">
              <h1 class="text-4xl font-bold text-[#89bcff]">By land</h1>
            </div>
            <div class="my-8">
              <p class="pb-6 pt-2 text-base text-zinc-500">WEIGHT</p>
              <P class="text-lg font-bold">Up to 44,000lbs</P>
            </div>
          </div>
          <div
            class="w-full rounded-lg border border-[#ddddec] relative p-4 md:mb-0 mb-8"
          >
            <div class="absolute top-[-18px] bg-[#f4f7ff]">
              <h1 class="text-4xl font-bold text-[#89bcff]">By Air</h1>
            </div>
            <div class="my-8">
              <p class="pb-6 pt-2 text-base text-zinc-500">WEIGHT</p>
              <P class="text-lg font-bold">Up to 20,000lbs</P>
            </div>
          </div>
          <div
            class="w-full rounded-lg border border-[#ddddec] relative p-4 md:mb-0 mb-8"
          >
            <div class="absolute top-[-18px] bg-[#f4f7ff]">
              <h1 class="text-4xl font-bold text-[#89bcff]">By Sea</h1>
            </div>
            <div class="my-8">
              <p class="pb-6 pt-2 text-base text-zinc-500">WEIGHT</p>
              <P class="text-lg font-bold">Unlimited</P>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="my-20">
      <div
        class="md:flex items-center justify-between w-11/12 mx-auto gap-6 md:py-14 md:px-10"
      >
        <div class="md:w-6/12 w-full md:mb-0 mb-5 md:mx-0 mx-auto md:order-1">
          <img
            class="rounded-lg"
            src="~/assets/img/logistics.jpeg"
            alt="Logistics"
          />
        </div>
        <div class="md:w-6/12 w-full md:mx-0 mx-auto">
          <h1 class="md:text-5xl text-2xl mb-4 font-bold md:mb-6">
            We’re committed to continuing to deliver for you
          </h1>
          <p class="mb-10 md:text-xl text-lg">
            Reach your customers and mitigate risk. Find out why it's worth
            staying with us
          </p>
          <pre
            class="primary-button w-inline-block w-7/12 cursor-pointer"
          ><button class="button-content">
                <div class="button-color">Get quote</div>
              </button>
            </pre>
        </div>
      </div>
    </section>

    <section class="my-20">
      <div
        class="md:flex items-center justify-between w-11/12 mx-auto gap-6 md:py-14 md:px-10"
      >
        <div class="md:w-6/12 w-full md:mb-0 mb-5">
          <img
            class="rounded-lg mx-auto"
            src="~/assets/img/catch.webp"
            alt="Logistics"
          />
        </div>
        <div class="md:w-6/12 w-full md:mx-0 mx-auto md:order-1">
          <h1 class="md:text-5xl text-2xl mb-4 font-bold md:mb-6">
            Drop-off flexibility is just around the corner
          </h1>
          <p class="mb-10 md:text-xl text-lg">
            Out and about running errands? Drop off your packages at nearby
            retail locations. Choose from thousands of Logist Office, Logist
            Ship Center®, Logist Authorized ShipCenter®, Logist® Drop Box,*
            Walgreens, Dollar General, and grocery locations nationwide. Some
            are even open 24 hours. Consider consolidating your drop offs to
            help reduce multiple-trip emissions.
          </p>
          <pre
            class="primary-button w-inline-block w-7/12 cursor-pointer"
          ><button class="button-content">
                <div class="button-color">Get quote</div>
              </button>
            </pre>
        </div>
      </div>
    </section>

    <section class="my-20">
      <div
        class="md:flex items-center justify-between w-11/12 mx-auto gap-6 md:py-14 md:px-10"
      >
        <div class="md:w-6/12 w-full md:mb-0 mb-5 md:order-2">
          <img
            class="rounded-lg mx-auto"
            src="~/assets/img/logistics.webp"
            alt="Logistics"
          />
        </div>
        <div class="md:w-6/12 w-full md:mx-0 mx-auto">
          <h1 class="md:text-5xl text-2xl mb-4 font-bold md:mb-6">
            Let us do the packing for you
          </h1>
          <p class="mb-10 md:text-xl text-lg">
            Whether you’re short on time or need some assistance, our packing
            experts can help. From breakables to perishables, they can send your
            shipment safely on its way. They can also show you more sustainable
            packaging options. Packing pros are available at thousands of Logist
            Office locations.
          </p>
          <pre
            class="primary-button w-inline-block w-7/12 cursor-pointer"
          ><button class="button-content">
                <div class="button-color">Get quote</div>
              </button>
            </pre>
        </div>
      </div>
    </section>

    <section>
      <h1 class="capitalize text-4xl font-bold text-center pt-4 pb-12">
        Simplify your business shipping
      </h1>
      <div class="md:flex gap-8 w-11/12 mx-auto mb-20">
        <div class="md:w-4/12 sm:w-8/12 w-11/12 mx-auto mb-4 md:mb-0">
          <Card>
            <template #title>
              Get affordable international delivery in 2–5 days
            </template>
            <template #content>
              <img
                class="mx-auto h-40"
                src="~/assets/img/smile.jpeg"
                alt="Logistics"
              />
              <p class="my-4">
                If your shipment isn’t urgent, opt for Logist International
                Economy®. Ship your packages to more than 215 countries and
                territories. You can import items from more than 90 countries
                and territories, too.
              </p>
            </template>
          </Card>
        </div>
        <div class="md:w-4/12 sm:w-8/12 w-11/12 mx-auto mb-4 md:mb-0">
          <Card>
            <template #title>
              Ship to U.S. businesses for less the price</template
            >
            <template #content>
              <img
                class="mx-auto h-40 rounded-full"
                src="~/assets/img/story2.jpeg"
                alt="Logistics"
              />
              <p class="my-4">
                Get your shipment there in 1–5 business days with low-cost
                Logist Ground® delivery. It's faster to more locations than UPS
                Ground, and packages can be up to 150 lbs. Need to ship to a
                customer's residential address? Use Logist Home Delivery® for
                service.
              </p>
            </template>
          </Card>
        </div>
        <div class="md:w-4/12 sm:w-8/12 w-11/12 mx-auto mb-4 md:mb-0">
          <Card>
            <template #title> Save time by scheduling a pickup </template>
            <template #content>
              <img
                class="mx-auto h-40"
                src="~/assets/img/story.jpeg"
                alt="Logistics"
              />
              <p class="my-4">
                It’s simple to schedule a one-time pickup online. We’ll send a
                Logist team member to your home or business. If you ship on a
                regular basis, consider automated or recurring pickups.
              </p>
            </template>
          </Card>
        </div>
      </div>
    </section>

    <section class="my-20">
      <div
        class="md:flex items-center justify-center w-11/12 mx-auto gap-6 md:py-14 md:px-10"
      >
        <div class="md:w-5/12 w-full md:mb-0 mb-5">
          <img
            class="mx-auto w-6/12 rounded-full"
            src="~/assets/img/circle_dad.jpeg"
            alt="Logistics"
          />
          <h3
            class="md:text-2xl my-4 text-xl text-center"
            aria-label="Congratulate your favorite grad"
          >
            Surprise Dad with a special delivery
          </h3>
          <p class="md:text-lg text-base">
            Found the perfect gift? Use our Father’s Day Guide to make shipping
            it easy. Calculate shipping costs and compare Logist services. See
            your deadlines to have it delivered by June 18. And find package
            drop off locations near you.
          </p>
        </div>
        <div class="md:w-5/12 w-full md:mb-0 mb-5">
          <img
            class="mx-auto w-6/12 rounded-full"
            src="~/assets/img/circle_grad.jpeg"
            alt="Logistics"
          />
          <h3
            class="md:text-2xl my-4 text-xl text-center"
            aria-label="Congratulate your favorite grad"
          >
            Congratulate your favorite grad
          </h3>
          <p class="md:text-lg text-base">
            Wrap up a gift that acknowledges their accomplishment. Then, use
            low-cost Logist Home Delivery® to get it there in 1–5 days. If
            you’re short on time, choose Logist Express® same-day or overnight
            delivery.
          </p>
        </div>
      </div>
    </section>

    <div>
      <Contact />
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
const router = useRouter();
const trackingID = ref("");
const audioTracking = () => {
  let tracker = trackingID.value;
  router.push({ path: "/track", query: { id: tracker } });
};

definePageMeta({
  layout: "default",
  methods: {},
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
