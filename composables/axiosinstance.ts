import axios from "axios";
import { useUserStore } from "@/stores/user";

export default function useAxios() {
  const { $pinia } = useNuxtApp();
  const { token } = useUserStore();

  axios.defaults.baseURL = "https://sj-ifez.onrender.com/v1";
  axios.defaults.headers.get.Authorization = `Bearer ${token.access.token}`;
  axios.defaults.headers.delete.Authorization = `Bearer ${token.access.token}`;
  axios.defaults.headers.put.Authorization = `Bearer ${token.access.token}`;
  return axios;
}

// export default axios;

// export default {

// }
