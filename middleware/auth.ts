import { useUserStore } from "@/stores/user";
const store = useUserStore();
const { token } = storeToRefs(store);
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === "/admin/panel" && !token) {
    return navigateTo("/");
  }
});
