<template>
  <div class="q-pa-md">
    <q-form @submit="register" @reset="resetForm" class="q-gutter-md">
      <q-input v-model.trim="email" label="Email" />
      <q-input v-model.trim="password" label="Password" />
      <q-btn label="Register with password" type="submit" color="primary" />
      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      <q-btn label="Sign in" color="secondary" @click="signin" />
    </q-form>

    <p v-if="loginError">{{ loginError }}</p>
  </div>
</template>
<script setup>
import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useUserStore } from "../store.ts";

const userStore = useUserStore();

const email = ref("");
const password = ref("");
const loginError = ref("");

function register() {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      loginError.value = "";
      email.value = null;
      password.value = false;

      userStore.setUserData(data);
      userStore.toggleIsLoggedIn();
    })
    .catch((e) => (loginError.value = e));
}

function signin() {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      loginError.value = "";
      email.value = null;
      password.value = false;

      userStore.setUserData(data);
      userStore.toggleIsLoggedIn();
    })
    .catch((e) => (loginError.value = e));
}

function resetForm() {
  email.value = null;
  password.value = false;
}
</script>
