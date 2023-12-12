//Toast as a function.

export const toastHandler = (type, message, close = true) => {
    let toast = useNuxtApp().$toast
    toast[type](message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: close,
    });
};