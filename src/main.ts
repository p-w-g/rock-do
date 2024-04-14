import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from "quasar";
// TODO: figure out TSery behind user options
// @ts-ignore
import quasarUserOptions from "./quasar-user-options";
import { createPinia } from "pinia";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_CONFIG_apiKey,
  authDomain: process.env.VUE_APP_FIREBASE_CONFIG_authDomain,
  projectId: process.env.VUE_APP_FIREBASE_CONFIG_projectId,
  storageBucket: process.env.VUE_APP_FIREBASE_CONFIG_storageBucket,
  messagingSenderId: process.env.VUE_APP_FIREBASE_CONFIG_messagingSenderId,
  appId: process.env.VUE_APP_FIREBASE_CONFIG_appId,
};

initializeApp(firebaseConfig);

createApp(App).use(Quasar, quasarUserOptions).use(createPinia()).mount("#app");
