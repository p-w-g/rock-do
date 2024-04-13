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

<script>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useNotesStore } from "../store.ts";
import EditModal from "./EditModal.vue";

export default {
  components: {
    EditModal,
  },
  setup() {
    const { notesList } = storeToRefs(useNotesStore());
    const notesStore = useNotesStore();

    const editMode = ref(false);

    return {
      notesList,
      notesStore,
      editMode,

      removeNote({ reset, id }) {
        reset();
        notesStore.removeNote(id);
      },

      editNote({ reset, id }) {
        reset();
        editMode.value = true;
      },
    };
  },
};
</script>
