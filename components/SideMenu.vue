<template>
  <aside
    class="pt-12 lg:w-[10rem] fixed bottom-0 w-[4.3rem] overflow-x-hidden bg-blue-08 h-screen"
  >
    <svg
      class="fill-white mx-auto mt-3"
      xmlns="http://www.w3.org/2000/svg"
      height="32"
      width="40"
      viewBox="0 0 640 512"
    >
      <path
        d="M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5 .8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z"
      />
    </svg>
    <div class="flex flex-col justify-between item-center h-[80vh] mt-5">
      <div class="w-full flex flex-col gap-3 justify-between items-center">
        <Nuxt-link
          to="/admin/panel"
          activeClass="bg-blue-01 text-white"
          class="sm:px-8 px-6 w-full relative inline-flex items-center gap-3 overflow-hidden py-3 bg-blue-200"
        >
          <svg
            class="flex-shrink-0 mt-1 text-inherit"
            xmlns="http://www.w3.org/2000/svg"
            height="22"
            width="22"
            viewBox="0 0 576 512"
            fill="#fff"
          >
            <path
              d="M294.2 277.7c18 5 34.7 13.4 49.5 24.7l161.5-53.8c8.4-2.8 12.9-11.9 10.1-20.2L454.9 47.2c-2.8-8.4-11.9-12.9-20.2-10.1l-61.1 20.4 33.1 99.4L346 177l-33.1-99.4-61.6 20.5c-8.4 2.8-12.9 11.9-10.1 20.2l53 159.4zm281 48.7L565 296c-2.8-8.4-11.9-12.9-20.2-10.1l-213.5 71.2c-17.2-22-43.6-36.4-73.5-37L158.4 21.9C154 8.8 141.8 0 128 0H16C7.2 0 0 7.2 0 16v32c0 8.8 7.2 16 16 16h88.9l92.2 276.7c-26.1 20.4-41.7 53.6-36 90.5 6.1 39.4 37.9 72.3 77.3 79.2 60.2 10.7 112.3-34.8 113.4-92.6l213.3-71.2c8.3-2.8 12.9-11.8 10.1-20.2zM256 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
            />
          </svg>
          <p
            class="sm:block text-white hidden text-sm not-italic font-normal leading-[normal]"
          >
            Shipments
          </p>
        </Nuxt-link>
      </div>

      <pre>{{  }}</pre>

      <div
        class="shrink-0 bg-[#DAEDFF] p-3 rounded-[10px] lg:inline-flex items-center gap-3 sm:w-11/12 mx-auto"
      >
        <div>
          <p
            class="text-[#1F6BB1] capitalize  sm:text-[14px] text-[12px] not-italic font-bold leading-[normal] mb-1"
          >
            {{ user?.username }}
          </p>
          <button
            @click="logoutAdmin"
            class="text-[#1F6BB1] flex-shrink-0 md:text-[12px] text-[10px] not-italic font-normal leading-[normal] sm:inline-flex gap-2"
          >
            <p v-if="requesting">Requesting...</p>
            <span v-else class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M7.18296 1.25C8.73456 1.25 10 2.49375 10 4.025V7.01875H6.18459C5.91116 7.01875 5.69495 7.23125 5.69495 7.5C5.69495 7.7625 5.91116 7.98125 6.18459 7.98125H10V10.9688C10 12.5 8.73456 13.75 7.17024 13.75H4.0734C2.51544 13.75 1.25 12.5063 1.25 10.975V4.03125C1.25 2.49375 2.5218 1.25 4.07976 1.25H7.18296ZM11.5876 5.34387C11.7751 5.15013 12.0814 5.15013 12.2689 5.33763L14.0939 7.15637C14.1876 7.25012 14.2376 7.36888 14.2376 7.50012C14.2376 7.62513 14.1876 7.75012 14.0939 7.83763L12.2689 9.65637C12.1751 9.75012 12.0501 9.80013 11.9314 9.80013C11.8064 9.80013 11.6814 9.75012 11.5876 9.65637C11.4001 9.46887 11.4001 9.16262 11.5876 8.97512L12.5876 7.98137L10 7.98125V7.01875L12.5876 7.01888L11.5876 6.02513C11.4001 5.83763 11.4001 5.53137 11.5876 5.34387Z"
                  fill="#1F6BB1"
                />
              </svg>
              <span>Logout</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import axios from "axios";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
const router = useRouter();

const store = useUserStore();
const { token, user } = storeToRefs(store);
const requesting = ref(false);

async function logoutAdmin() {
  try {
    requesting.value = true;
    axios
      .post(`/auth/sign-off`, { refreshToken: token.value.refresh.token })
      .then(async (res) => {
        requesting.value = false;
        toastHandler("success", "Logged out successfully");
        await router.push("/admin");
      })
      .catch((err) => {
        requesting.value = false;
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
}
</script>

<style lang="scss" scoped></style>
