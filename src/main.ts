import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from "quasar";
// TODO: figure out TSery behind user options
// @ts-ignore
import quasarUserOptions from "./quasar-user-options";
import { createPinia } from "pinia";

createApp(App).use(Quasar, quasarUserOptions).use(createPinia()).mount("#app");
