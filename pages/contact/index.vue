<script setup>
import { Countries } from "@/composables/countries";
import { toastHandler } from "@/composables/useToast"

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
const sendingMail = ref(false);
const requesting = ref(false);
const validEmail = ref(false);
const validContactEmail = ref(false);
const allowContactUs = ref(false);
const allowQuoteUs = ref(false);
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const dataObj = reactive({
  name: "",
  email: "",
  message: "",
});

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
watch(
  () => dataObj.email,
  async (newVal, oldVal) => {
    let answer = emailRegex.test(dataObj.email);
    validContactEmail.value = answer;
  }
);
watch(dataObj, async (newVal, oldVal) => {
  let { message, name } = newVal;
  if (
    message.length > 6 &&
    name.length > 2 &&
    validContactEmail.value == true
  ) {
    allowContactUs.value = true;
  } else {
    allowContactUs.value = false;
  }
});
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
    toastHandler("info", "Please fill all fields.", 3500);
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
        toastHandler("success",
          "Quote requested. We will send a quote to the provided email."
        );
        requesting.value = false;
      })
      .catch((err) => {
        toastHandler("error", "An error occurred", 4500);
        requesting.value = false;
      });
  }
};

const sendMail = async () => {
  const formatted = `
  <div>
    <strong><pre>Name: ${dataObj?.name}</pre></strong>
    <strong><pre>Email: ${dataObj?.email}</pre></strong>
    <strong><pre>Message: ${dataObj?.message}</pre></strong>
  </div>`;

  if (allowContactUs.value === false) {
    toastHandler("Please fill all fields.", 3500);
  } else {
    sendingMail.value = true;
    const { data: id } = await useFetch("/api/sendMail", {
      method: "post",
      body: {
        subject: "Enquiries",
        message: formatted,
      },
    })
      .then(() => {
        toastHandler("success", "Mail sent. We will review and revert.", 3500);
        sendingMail.value = false;
      })
      .catch((err) => {
        toastHandler("error", err.message, 3500);
        sendingMail.value = false;
      });
  }
};

const checked = (index) => {
  for (let z = 0; z < itemList.length; z++) {
    itemList[z].selected = false;
  }
  itemList[index].selected = true;
  qouteObj.value.means = itemList[index].name;
};
</script>
<template>
  <section>
    <div class="container mt-14 mb-8 mx-auto w-11/12">
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
            Contact Us
          </h1>
          <p
            style="
              transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
                rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              transform-style: preserve-3d;
            "
            class="banner-paragraph mt-5"
          >
            We are always a chat and email away to hear your Inquiries and
            complaints. Get in touch with us.
          </p>
        </div>
      </div>
    </div>

    <div class="w-11/12 mx-auto lg:flex gap-0 lg:mb-28 mb-10">
      <div class="lg:w-6/12 mx-auto w-full order-2">
        <img
          class="lg:h-[33rem] lg:mb-0 mb-4 mx-auto rounded-md"
          src="~/assets/large_img/menwithbox.jpg"
          alt=""
        />
      </div>
      <div class="lg:w-6/12 mx-auto w-full bg-white">
        <div class="border rounded-lg shadow-md p-4">
          <p class="font-bold py-3">Name</p>
          <div>
            <input
              v-model="dataObj.name"
              class="border outline-none outline-0 rounded-lg p-4 w-full"
              type="text"
            />
          </div>
          <p class="font-bold py-3">Email</p>
          <div class="relative">
            <input
              v-model="dataObj.email"
              class="border rounded-lg p-4 w-full outline-none outline-0"
              type="email"
            />
            <span
              v-if="!validContactEmail"
              class="absolute top-[-14px] right-0 px-2 rounded-md bg-mediumspringgreen text-white text-sm"
              >Please enter a valid email address</span
            >
            <span
              v-else
              class="absolute top-[-14px] right-0 px-2 rounded-md bg-green-500 text-white text-sm"
              >Valid</span
            >
          </div>
          <p class="font-bold py-3">Message</p>
          <div>
            <textarea
              v-model="dataObj.message"
              rows="5"
              class="border rounded-lg p-4 w-full outline-none outline-0"
              type="text"
            ></textarea>
          </div>
          <button
            @click="sendMail"
            class="mt-3 h-[4.5rem] w-full text-lg py-4 px-5 border rounded-lg bg-black text-white"
          >
            <span v-if="!sendingMail">Send message</span>
            <span class="flex justify-center gap-3 items-center" v-else
              ><Spinner /> <span>Sending mail</span></span
            >
          </button>
        </div>
      </div>
    </div>

    <div class="w-11/12 md:w-10/12 mx-auto lg:flex">
      <div class="lg:w-5/12 md:w-8/12 lg:mb-0 mb-8 w-11/12 mx-auto">
        <h1 class="md:text-7xl text-4xl font-bold">
          Find out the price right now
        </h1>
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
                class="absolute top-[-14px] right-0 px-2 rounded-md bg-mediumspringgreen text-white text-sm"
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
      <div class="lg:w-7/12 w-11/12 md:mx-0 mx-auto">
        <h1 class="md:text-5xl font-bold text-3xl mb-5">Contact Details</h1>

        <p class="md:w-10/12 w-full pb-3 text-xl">
          If you have any questions about what we offer for consumers or for
          business, you can always email us or call us via the below details.
          We’ll reply within 24 hours.
        </p>

        <div
          class="md:grid grid-cols-2 grid-rows-2 lg:gap-7 md:gap-5 justify-center my-5 mx-3"
        >
          <div
            class="border rounded-lg bg-white shadow-lg relative p-4 md:mb-0 mb-5"
          >
            <p class="text-lg">2101 Roger Sedam Dr, Cody, WY</p>
            <span
              class="border text-emerald-400 bg-white p-2 rounded-full absolute top-[-20px] right-[-20px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M240.3 396.8c3.3 5.1 9.1 8.5 15.7 8.5s12.4-3.4 15.8-8.5L382 226.6c14.8-22.9 23.4-48.1 23.4-77.3C405.3 64.9 339 0 256 0S106.7 64.9 106.7 149.3c0 29.2 8.6 54.4 23.4 77.3l110.2 170.2zM256 64c47.1 0 85.3 38.2 85.3 85.3s-38.2 85.3-85.3 85.3s-85.3-38.2-85.3-85.3S208.9 64 256 64zm109.4 259.5L256 469.3L146.6 323.5c-37.4 19.6-61.3 48.9-61.3 81.8C85.3 464.2 161.7 512 256 512s170.7-47.8 170.7-106.7c0-32.9-23.9-62.2-61.3-81.8z"
                />
              </svg>
            </span>
          </div>

          <div
            class="border rounded-lg bg-white shadow-lg relative p-4 md:mb-0 mb-5"
          >
            <p class="text-lg">support@logistfreight.com</p>
            <span
              class="border text-emerald-400 bg-white p-2 rounded-full absolute top-[-20px] right-[-20px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path
                    d="M3 7h3m-3 4h2m4.02-2.199l-.6 6A2 2 0 0 0 10.41 17h7.98a2 2 0 0 0 1.99-1.801l.6-6A2 2 0 0 0 18.99 7h-7.98a2 2 0 0 0-1.99 1.801z"
                  />
                  <path d="m9.8 7.5l2.982 3.28a3 3 0 0 0 4.238.202L20.3 8" />
                </g>
              </svg>
            </span>
          </div>

          <div
            class="flex border items-center justify-center gap-10 md:mb-0 mb-5 rounded-lg bg-white shadow-lg relative p-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 256 256"
            >
              <path
                fill="#1877F2"
                d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
              />
              <path
                fill="#FFF"
                d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 256 209"
            >
              <path
                fill="#55acee"
                d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435c0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 128 128"
            >
              <path
                fill="#0076b2"
                d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3z"
              />
              <path
                fill="#fff"
                d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
              />
            </svg>
            <span
              class="bg-white border text-emerald-400 p-2 rounded-full absolute top-[-20px] right-[-20px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M7 18v-1a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v1M1 18v-1a3 3 0 0 1 3-3v0m19 4v-1a3 3 0 0 0-3-3v0m-8-2a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm-8 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm16 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"
                />
              </svg>
            </span>
          </div>
        </div>
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
          class="text-emerald-400 px-2 py-1 rounded-lg absolute top-[-20px] md:right-[-20px] right-0"
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
