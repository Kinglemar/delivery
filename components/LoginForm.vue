<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import axios from "axios";
const router = useRouter();
const form = ref({
  email: "",
  password: "",
});
const requesting = ref(false);

const store = useUserStore();
const { updateUser, setToken } = store;

async function loginAdmin() {
  try {
    requesting.value = true;
    axios
      .post("https://sj-ifez.onrender.com/v1/auth/access", form.value)
      .then((res) => {
        console.log(res.data);
        updateUser(res.data.user);
        setToken(res.data.tokens);
        router.push("/admin/panel");
        requesting.value = false;
      });
  } catch (error) {
    requesting.value = false;
  }
}
</script>
<template>
  <div class="w-full flex flex-col items-center">
    <div class="w-full mb-2">
      <input
        v-model="form.email"
        placeholder="email"
        class="w-full h-12 p-4 mb-1 shrink-0 border rounded-lg border-solid border-[#E0E0E0]"
      />
    </div>
    <div class="w-full mb-2">
      <input
        v-model="form.password"
        placeholder="password"
        class="w-full h-12 p-4 mb-1 shrink-0 border rounded-lg border-solid border-[#E0E0E0]"
      />
    </div>
    <div class="w-full mb-2">
      <button
        @click="loginAdmin"
        class="w-full mt-2 text-white bg-gray-200 px-10 py-3 rounded-[5px]"
      >
        <p v-if="requesting">Requesting...</p>
        <p v-else>Login</p>
      </button>
    </div>
  </div>
</template>
~/composables/axiosinstance