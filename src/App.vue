<template>
  <q-layout view="lhh LpR lff">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title> Rock Notes </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page>
        <template v-if="isLoggedIn">
          <InputForm />
          <NoteList />
        </template>
        <template v-else>
          <q-page>
            <div class="q-pa-md">
              <p>You need to be logged in to work with notes</p>
            </div>
          </q-page>
        </template>
      </q-page>
    </q-page-container>
    <FooterButtons />
  </q-layout>
</template>

<script setup>
import InputForm from "./components/InputForm.vue";
import NoteList from "./components/NoteList.vue";
import FooterButtons from "./components/FooterButtons.vue";

import { useUserStore } from "./store.ts";
import { storeToRefs } from "pinia";

const { isLoggedIn } = storeToRefs(useUserStore());
</script>
