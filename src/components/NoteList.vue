<template>
  <EditModal v-model="editMode" />
  <div class="q-pa-md">
    <q-list v-if="notesList.length" bordered separator>
      <q-slide-item
        v-for="note in notesList"
        v-bind:key="note.id"
        :id="note.id"
        @left="(e) => removeNote({ reset: e.reset, id: note.id })"
        @right="(e) => editNote({ reset: e.reset, id: note.id })"
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

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useNotesStore } from "../store.ts";
import EditModal from "./EditModal.vue";

const { notesList } = storeToRefs(useNotesStore());
const notesStore = useNotesStore();

const editMode = ref(false);

function removeNote({ reset, id }) {
  reset();
  notesStore.removeNote(id);
}

function editNote({ reset, id }) {
  notesStore.choseNote(id);
  reset();
  editMode.value = true;
}
</script>
