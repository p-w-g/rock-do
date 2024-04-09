import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from "quasar";
// TODO: figure out TSery behind user options
// @ts-ignore
import quasarUserOptions from "./quasar-user-options";

createApp(App).use(Quasar, quasarUserOptions).mount("#app");
