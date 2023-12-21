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

    function updateUser(userBody: any) {
      user.value = userBody;
    }
    function setToken(tokenBody: any) {
      token.value = tokenBody;
    }
    function signOut() {
      token.value = {
        access: {
          token: null,
          expires: null,
        },
        refresh: {
          token: null,
          expires: null,
        },
      };
      user.value = null;
    }
    // const getToken = computed(() => token.value.access.token);

    return { user, token, setToken, updateUser, signOut };
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
