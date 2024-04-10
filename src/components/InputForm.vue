<template>
  <div class="q-pa-md">
    <q-form @submit="onSubmitNote" @reset="onResetNote" class="q-gutter-md">
      <q-input v-model.trim="description" label="Note" />
      <q-toggle v-model="anonymous" label="Anonymous note" />
      <div>
        <q-btn label="Add note" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<style></style>

<script>
import { ref } from "vue";
import { useNotesStore } from "../store.ts";

export default {
  name: "InputForm",

  setup() {
    const notesStore = useNotesStore();

    const description = ref("");
    const anonymous = ref(false);

    return {
      notesStore,
      description,
      anonymous,

      onResetNote() {
        description.value = null;
        anonymous.value = false;
      },

      onSubmitNote() {
        if (!note.value || !note.value.length) return;

        const note = {
          description: description.value,
          anonymous: anonymous.value,
        };
        notesStore.newNote(note);

        description.value = null;
        anonymous.value = false;
      },
    };
  },
};
</script>
