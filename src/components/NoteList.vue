<template>
  <div class="q-pa-md">
    <q-list v-if="notesList.length" bordered separator>
      <q-slide-item
        v-for="note in notesList"
        v-bind:key="note.id"
        :id="note.id"
        @left="(e) => removeNote({ reset: e.reset, id: note.id })"
        @right="editNote"
      >
        <template v-slot:left>
          <q-icon name="done" />
        </template>
        <template v-slot:right>
          <q-icon name="mode_edit" />
        </template>
        <q-item>
          <q-item-section>{{ note.description }}</q-item-section>
        </q-item>
      </q-slide-item>
    </q-list>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useNotesStore } from "../store.ts";

export default {
  setup() {
    const { notesList } = storeToRefs(useNotesStore());
    const notesStore = useNotesStore();

    return {
      removeNote({ reset, id }) {
        reset;
        notesStore.removeNote(id);
      },

      editNote({ reset }) {
        // TODO: implement action
        reset;
      },

      notesList,
      notesStore,
    };
  },
};
</script>
