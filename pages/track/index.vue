<template>
  <section>
    <div class="my-36" v-if="audioTracking">
      <h1 class="text-center p-10 text-6xl">Loading...</h1>
    </div>

    <div
      v-if="showParcel"
      class="md:my-36 my-20 sm:mx-auto mx-auto w-11/12 shadow-lg p-3 rounded-lg"
    >
      <div class="lg:flex items-center">
       
        <div class="lg:w-5/12 w-full p-4 order-2">
          <p class="text-lg font-bold mb-8">Parcel Details</p>
          <div class="grid grid-cols-3 md:gap-10 gap-y-8 gap-x-2 grid-rows-2">
            <div class="text-center relative border border-[#ddddec] p-3 rounded-lg">
              <p class="text-center">Land</p>
              <span class="text-emerald-400 bg-white px-2 py-1 rounded-lg absolute top-[-20px] md:right-[-20px] right-0">Route</span>
            </div>
            <div class="text-center relative border border-[#ddddec] p-3 rounded-lg">
              <p class="text-center">20kg</p>
              <span class="text-emerald-400 bg-white px-2 py-1 rounded-lg absolute top-[-20px] md:right-[-20px] right-0">Weight</span>
            </div>
            <div class="text-center relative border border-[#ddddec] p-3 rounded-lg">
              <p class="text-center">20cm</p>
              <span class="text-emerald-400 bg-white px-2 py-1 rounded-lg absolute top-[-20px] md:right-[-20px] right-0">Height</span>
            </div>
            <div class="text-center relative border border-[#ddddec] p-3 rounded-lg">
              <p class="text-center">20cm</p>
              <span class="text-emerald-400 bg-white px-2 py-1 rounded-lg absolute top-[-20px] md:right-[-20px] right-0">Width</span>
            </div>
            <div class="text-center relative border border-[#ddddec] p-3 rounded-lg">
              <p class="text-center">20cm</p>
              <span class="text-emerald-400 bg-white px-2 py-1 rounded-lg absolute top-[-20px] md:right-[-20px] right-0">Length</span>
            </div>
          </div>

          <div class="my-3">
            <div class="relative border border-[#ddddec] p-3 rounded-lg my-3">
              <p class="">Television</p>
              <span class="text-emerald-400 bg-white px-2 py-1 rounded-lg absolute top-[-20px] md:right-[-20px] right-0">Type</span>
            </div>
            <div class="relative border border-[#ddddec] p-3 rounded-lg my-3">
              <p class="">Abuja</p>
              <span class="text-emerald-400 bg-white px-2 py-1 rounded-lg absolute top-[-20px] md:right-[-20px] right-0">From</span>
            </div>
            <div class="relative border border-[#ddddec] p-3 rounded-lg my-3">
              <p class="">Sokoto</p>
              <span class="text-emerald-400 bg-white px-2 py-1 rounded-lg absolute top-[-20px] md:right-[-20px] right-0">To</span>
            </div>
          </div>
        </div>
         <div
          class="flex flex-col justify-center h-[27rem] lg:w-7/12 w-full border-2 rounded-lg border-dashed border-[#ddddec] py-10 px-5"
        >
          <h1 class="text-3xl text-center">
            Your package is currently being readied for transport.
          </h1>
        </div>
      </div>
    </div>

    <div v-if="noParcel" class="md:w-8/12 w-11/12 mx-auto my-36">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 16 16"
        class="mx-auto text-red-600"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="m7.493.015l-.386.04c-1.873.187-3.76 1.153-5.036 2.579C.66 4.211-.057 6.168.009 8.253c.115 3.601 2.59 6.65 6.101 7.518a8.034 8.034 0 0 0 6.117-.98a8 8 0 0 0 3.544-4.904c.172-.701.212-1.058.212-1.887s-.04-1.186-.212-1.887C14.979 2.878 12.315.498 9 .064C8.716.027 7.683-.006 7.493.015m1.36 1.548a6.34 6.34 0 0 1 1.987.597c.698.34 1.18.686 1.747 1.253A5.956 5.956 0 0 1 13.84 5.16c.445.915.646 1.798.646 2.84a6.188 6.188 0 0 1-.66 2.867c-.172.351-.519.914-.681 1.105l-.055.065l-4.563-4.564L3.963 2.91l.065-.055c.191-.162.754-.509 1.105-.681a6.436 6.436 0 0 1 3.72-.611M7.48 8.534l4.56 4.561l-.067.053a7.66 7.66 0 0 1-1.106.68a6.76 6.76 0 0 1-1.987.616c-.424.065-1.336.065-1.76 0c-1.948-.296-3.592-1.359-4.627-2.993a7.502 7.502 0 0 1-.634-1.332a6.62 6.62 0 0 1-.189-3.584a6.767 6.767 0 0 1 1.096-2.388c.07-.095.133-.173.141-.173c.007 0 2.065 2.052 4.573 4.56"
        />
      </svg>

      <h1 class="text-4xl text-center py-10 px-2">
        The provided tracking ID does not match any parcel on our database.
        Please contact customer care.
      </h1>
    </div>

    <div class="mt-16">
      <Contact />
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";

const route = useRoute();

const audioTracking = ref(false);
const showParcel = ref(false);
const noParcel = ref(false);

onMounted(() => {
  const detail = route.query.id;
  function setValue() {
    audioTracking.value = false;
  }

  audioTracking.value = true;

  if (detail.length < 6) {
    setTimeout(() => {
      setValue();
      noParcel.value = true;
    }, 3000);
  } else {
    setTimeout(() => {
      setValue();
      showParcel.value = true;
    }, 3000);
  }
});
</script>

<style scoped>
input,
select,
textarea {
  background: #f4f7ff;
}
.section-colorful-title {
  font-family: "FontSpring Demo priego", sans-serif;
  color: #89bcff;
  font-size: 34px;
}
p {
  font-size: 18px;
}
.banner-inner {
  padding-top: 20px;
  padding-bottom: 20px;
}
.marker:nth-child(2) {
  display: none;
}
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
</style>
