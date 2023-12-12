import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Sidebar from 'primevue/sidebar';
import Card from 'primevue/card';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';
import ConfirmDialog from 'primevue/confirmdialog';

import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';


import Dialog from 'primevue/dialog';


import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';  
import Row from 'primevue/row';


export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.use(ToastService);
    nuxtApp.vueApp.use(ConfirmationService);
    nuxtApp.vueApp.component("Button", Button);
    nuxtApp.vueApp.component("Sidebar", Sidebar);
    nuxtApp.vueApp.component("Card", Card);
    nuxtApp.vueApp.component("Toast", Toast);
    nuxtApp.vueApp.component("DataTable", DataTable);
    nuxtApp.vueApp.component("Column", Column);
    nuxtApp.vueApp.component("ColumnGroup", ColumnGroup);
    nuxtApp.vueApp.component("Row", Row);
    nuxtApp.vueApp.component("Dialog", Dialog);
    nuxtApp.vueApp.component("TabView", TabView);
    nuxtApp.vueApp.component("TabPanel", TabPanel);
    nuxtApp.vueApp.component("ConfirmDialog", ConfirmDialog);
    //other components that you need
});