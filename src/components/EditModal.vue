<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="editMode" persistent backdrop-filter="sepia(90%)">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Current note</div>
          <p>{{ chosenNote.description }}</p>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="newDescription"
            autofocus
            @keyup.enter="submitChange"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Update note" v-close-popup @click="submitChange" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref, defineModel } from "vue";
import { storeToRefs } from "pinia";
import { useNotesStore } from "../store.ts";

const { chosenNote } = storeToRefs(useNotesStore());
const noteStore = useNotesStore();

const editMode = defineModel();
const newDescription = ref("");

function submitChange() {
  const newNote = { ...chosenNote.value, description: newDescription.value };

  noteStore.updateNote(newNote);
  editMode.value = false;
}
</script>
