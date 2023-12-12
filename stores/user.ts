// @ts-check
import { defineStore, acceptHMRUpdate } from "pinia";

export const useUserStore = defineStore(
  "Shipment",
  () => {
    const user = ref(null);

    const token = ref({
      access: {
        token: null,
        expires: null,
      },
      refresh: {
        token: null,
        expires: null,
      },
    });

    function updateUser(user: any) {
      user.value = user;
    }
    function setToken(token: any) {
      token.value = token;
    }
    // const getToken = computed(() => token?.value.access.token);

    return { user, token, setToken, updateUser };
  },
  {
    persist: {
      key: "Shipment",
    },
  }
);

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
