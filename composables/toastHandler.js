import "vue-toast-notification/dist/theme-bootstrap.css";
import { useToast } from "vue-toast-notification";
// const { useToast } = initToast;

const toast = useToast();
export function toastHandler(message = 'Hello world', duration = 0){
    toast.success(message, {
        position: "top",
        duration: duration,
        dismissible: true,
    });
}