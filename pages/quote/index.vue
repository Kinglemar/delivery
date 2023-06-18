<template>
  <section>
    <div class="container mt-14 mb-10 mx-auto w-11/12">
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
            Find out the price
          </h1>
          <h1
            style="
              transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
                rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              transform-style: preserve-3d;
            "
            class="banner-title md:text-8xl text-6xl"
          >
            right now
          </h1>
        </div>
      </div>
    </div>

    <div class="w-11/12 md:w-10/12 mx-auto lg:flex gap-7">
      <div class="lg:w-5/12 md:w-8/12 lg:mb-0 mb-8 w-11/12 mx-auto order-2">
        <img
          class="lg:h-[36.7rem] mx-auto rounded-md"
          src="~/assets/large_img/shipcargo.jpg"
          alt=""
        />
      </div>

      <div class="bg-white lg:w-7/12 md:10/12 w-full md:mx-auto">
        <div class="border rounded-lg shadow-md p-4">
          <div>
            <p class="font-bold pb-3" for="">Shipping method</p>
            <ul class="border rounded-lg grid md:grid-cols-3 items-center">
              <li
                v-for="(item, index) in itemList"
                :key="index"
                @click="checked(index)"
                :class="item.selected ? 'bg-black text-white' : 'text-black'"
                class="text-center w-[95%] mx-auto cursor-pointer rounded-lg m-2 py-4 px-16 border-lg"
              >
                {{ item.name }}
              </li>
            </ul>
          </div>

          <div class="flex items-center gap-3 mt-3">
            <div class="w-6/12">
              <p class="font-bold pb-3">Type of goods</p>
              <div>
                <input
                  v-model="qouteObj.type"
                  placeholder="Type"
                  class="border rounded-lg p-4 w-full outline-none outline-0"
                  type="text"
                />
              </div>
            </div>

            <div class="w-6/12">
              <p class="font-bold pb-3">Weight</p>
              <div class="relative">
                <input
                  v-model="qouteObj.wei"
                  placeholder="0"
                  class="border rounded-lg p-4 w-full outline-none outline-0"
                  type="text"
                />
                <span
                  class="absolute top-[13px] right-2 bg-[#ddddec] px-2 py-1 rounded-lg"
                  >lbs</span
                >
              </div>
            </div>
          </div>

          <div class="mt-3">
            <p class="font-bold">Dimensions (Optional)</p>
            <div class="md:flex items-center gap-3 mt-3">
              <div class="md:w-4/12 md:mb-0 mb-3 relative">
                <input
                  v-model="qouteObj.hei"
                  placeholder="Height"
                  class="border rounded-lg p-4 w-full outline-none outline-0"
                  type="text"
                />
                <span
                  class="absolute top-[13px] right-2 bg-[#ddddec] px-3 py-1 rounded-lg"
                  >ft</span
                >
              </div>

              <div class="md:w-4/12 md:mb-0 mb-3 relative">
                <input
                  placeholder="Width"
                  v-model="qouteObj.width"
                  class="border rounded-lg p-4 w-full outline-none outline-0"
                  type="text"
                />
                <span
                  class="absolute top-[13px] right-2 bg-[#ddddec] px-3 py-1 rounded-lg"
                  >ft</span
                >
              </div>
              <div class="md:w-4/12 md:mb-0 mb-3 relative">
                <input
                  v-model="qouteObj.len"
                  placeholder="Length"
                  class="border rounded-lg p-4 w-full outline-none outline-0"
                  type="text"
                />
                <span
                  class="absolute top-[13px] right-2 bg-[#ddddec] px-3 py-1 rounded-lg"
                  >ft</span
                >
              </div>
            </div>
          </div>

          <div class="md:flex items-center gap-3 mt-3">
            <div class="md:w-6/12 w-full md:mb-0 mb-3">
              <p class="font-bold pb-3">From</p>
              <div>
                <select
                  class="border rounded-t-lg p-4 w-full"
                  v-model="fromCountry"
                >
                  <option value="" disabled selected>Select country</option>
                  <option
                    v-for="(item, index) in Countries"
                    :key="index"
                    :value="item.name"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
              <div class="w-full">
                <input
                  v-model="qouteObj.from"
                  placeholder="Address"
                  class="border rounded-b-lg p-4 w-full"
                  type="text"
                />
              </div>
            </div>

            <div class="md:w-6/12 w-full">
              <p class="font-bold pb-3">To</p>
              <div>
                <select
                  class="border rounded-t-lg p-4 w-full"
                  v-model="toCountry"
                  name=""
                  id=""
                >
                  <option value="" disabled selected>Select country</option>
                  <option
                    v-for="(item, index) in Countries"
                    :key="index"
                    :value="item.name"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
              <div class="w-full">
                <input
                  v-model="qouteObj.to"
                  placeholder="Address"
                  class="border rounded-b-lg p-4 w-full"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div class="w-full mt-3">
            <p class="font-bold pb-3">Your email</p>
            <div class="relative">
              <input
                v-model="qouteObj.email"
                placeholder="Address"
                class="border rounded-lg p-4 w-full"
                type="text"
              />
              <span
                v-if="!validEmail"
                class="absolute top-[-14px] right-0 px-2 rounded-md bg-yellow-500 text-white text-sm"
                >Please enter a valid email address</span
              >
              <span
                v-else
                class="absolute top-[-14px] right-0 px-2 rounded-md bg-green-500 text-white text-sm"
                >Valid</span
              >
            </div>
          </div>
          <button
            @click.prevent="requestQuote"
            class="mt-3 h-[4.6rem] w-full text-lg py-4 px-5 border rounded-lg bg-black text-white"
          >
            <span v-if="!requesting">Place order</span>
            <span class="flex justify-center gap-3 items-center" v-else
              ><Spinner /> <span>Requesting quote</span></span
            >
          </button>
        </div>
      </div>
    </div>

    <div class="md:w-10/12 w-11/12 lg:flex gap-10 mx-auto md:mt-32 mt-20">
      <div class="lg:w-7/12 w-full md:mx-0 mx-auto">
        <img
          class="md:mb-0 mb-4 mx-auto rounded-md"
          src="~/assets/large_img/boxandmen.jpg"
          alt=""
        />
      </div>
      <div
        class="min-h-[20rem] bg-white relative lg:w-5/12 lg:p-8 p-3 lg:mx-0 flex flex-col justify-center mx-auto rounded-lg border shadow-lg"
      >
        <h1
          class="md:text-5xl text-3xl leading-loose text-center font-mono section-colorful-title mx-2"
        >
          THANK YOU FOR CHOOSING US
        </h1>
        <span
          class="text-emerald-400 px-2 py-1 rounded-lg absolute top-[-20px] right-0 md:right-[-20px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m23 12l-2.44-2.78l.34-3.68l-3.61-.82l-1.89-3.18L12 3L8.6 1.54L6.71 4.72l-3.61.81l.34 3.68L1 12l2.44 2.78l-.34 3.69l3.61.82l1.89 3.18L12 21l3.4 1.46l1.89-3.18l3.61-.82l-.34-3.68L23 12m-13 5l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8Z"
            />
          </svg>
        </span>
      </div>
    </div>

    <div class="mt-16">
      <Contact />
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import { Countries } from "@/composables/countries";
import { toastHandler } from "@/composables/toastHandler";
let options = [
  {
    name: "Land",
    selected: true,
  },
  {
    name: "Air",
    selected: false,
  },
  {
    name: "Sea",
    selected: false,
  },
];

const itemList = reactive(options);
const fromCountry = ref("");
const toCountry = ref("");
const requesting = ref(false);
const validEmail = ref(false);
const allowQuoteUs = ref(false);
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const qouteObj = reactive({
  email: "",
  means: "Land",
  width: "",
  wei: "",
  type: "",
  hei: "",
  len: "",
  from: "",
  to: "",
});

//Watchers

watch(
  () => qouteObj.email,
  async (newVal, oldVal) => {
    let answer = emailRegex.test(qouteObj.email);
    validEmail.value = answer;
  }
);

watch(qouteObj, async (newVal, oldVal) => {
  let { wei, type, from, to } = newVal;
  if (
    wei.length != 0 &&
    type.length != 0 &&
    from.length != 0 &&
    to.length != 0 &&
    validEmail.value == true
  ) {
    allowQuoteUs.value = true;
  } else {
    allowQuoteUs.value = false;
  }
});

const requestQuote = async () => {
  const formatted = `
  <div>
    <strong><pre>Means: ${qouteObj?.means}</pre></strong>
    <strong><pre>Email: ${qouteObj?.email}</pre></strong>
    <strong><pre>Type of package: ${qouteObj?.type}</pre></strong>
    <strong><pre>Weight: ${qouteObj?.wei}</pre></strong>
    <strong><pre>Width: ${qouteObj?.width}</pre></strong>
    <strong> <pre>Height: ${qouteObj?.hei}</pre></strong>
    <strong> <pre>Length: ${qouteObj?.len}</pre></strong>
    <strong> <pre>From: ${
      qouteObj?.from + ", " + fromCountry.value
    }</pre></strong>
    <strong> <pre>To: ${qouteObj?.to + ", " + toCountry.value}</pre></strong>
  </div>`;

  if (allowQuoteUs.value === false) {
    toastHandler("Please fill all fields.", 3500);
  } else {
    requesting.value = true;
    const { data: id } = await useFetch("/api/sendMail", {
      method: "post",
      body: {
        subject: "Requesting quote",
        message: formatted,
      },
    })
      .then(() => {
        toastHandler(
          "Quote requested. We will send a quote to the provided email."
        );
        requesting.value = false;
      })
      .catch((err) => {
        toastHandler(err.message, 4500);
        requesting.value = false;
      });
  }
};

const checked = (index) => {
  console.log("Clicked");
  for (let z = 0; z < itemList.length; z++) {
    itemList[z].selected = false;
  }
  itemList[index].selected = true;
  qouteObj.value.means = itemList[index].name;
};
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
