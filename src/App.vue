<template>
  <q-layout view="lhh LpR lff">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title> Rock Notes </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page>
        <InputForm />
        <NoteList />
      </q-page>
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn
            class="glossy"
            color="primary"
            icon="delete_forever"
            label="Clear All"
            @click="clearAll"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import InputForm from "./components/InputForm.vue";
import NoteList from "./components/NoteList.vue";
import { useNotesStore } from "./store.ts";

export default {
  name: "LayoutDefault",

  components: {
    InputForm,
    NoteList,
  },
  setup() {
    const notesStore = useNotesStore();

    return {
      clearAll() {
        notesStore.clearAll();
      },
    };
  },
};
</script>
