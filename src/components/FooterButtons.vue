<template>
  <q-footer reveal elevated class="bg-grey-8 text-white">
    <q-toolbar>
      <q-toolbar-title>
        <div class="q-pa-md q-gutter-sm" v-if="isLoggedIn">
          <q-btn
            class="glossy"
            color="primary"
            icon="delete_forever"
            label="Clear All"
            @click="clearAll"
          />
          <q-btn
            class="glossy"
            color="primary"
            icon="logout"
            label="Sign Out"
            @click="signout"
          />
        </div>
        <div class="q-pa-md q-gutter-sm" v-else>
          <q-btn
            class="glossy"
            color="primary"
            icon="login"
            label="Sign in with Google "
            @click="signingPopup"
          />
        </div>
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>
<script setup>
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNotesStore, useUserStore } from "../store.ts";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const notesStore = useNotesStore();
const { isLoggedIn } = storeToRefs(useUserStore());

function clearAll() {
  notesStore.clearAll();
}

async function signingPopup() {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider)
    .then((data) => {
      userStore.setUserData(data);
      userStore.toggleIsLoggedIn();
    })
    .catch((e) => console.error(e));
}

async function signout() {
  const auth = getAuth();
  await signOut(auth).then(() => userStore.signout());
}
</script>
