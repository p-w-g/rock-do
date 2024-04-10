<template>
  <div class="q-pa-md">
    <q-list v-if="notesList.length" bordered separator>
      <q-slide-item
        v-for="note in notesList"
        v-bind:key="note.id"
        @left="onLeft"
        @right="onRight"
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
import { useQuasar } from "quasar";
import { onBeforeUnmount } from "vue";
import { storeToRefs } from "pinia";
import { useNotesStore } from "../store.ts";

export default {
  setup() {
    const $q = useQuasar();
    const { notesList } = storeToRefs(useNotesStore());

    let timer;

    function finalize(reset) {
      timer = setTimeout(() => {
        reset();
      }, 1000);
    }

    onBeforeUnmount(() => {
      clearTimeout(timer);
    });

    return {
      onLeft({ reset }) {
        // TODO: implement action
        finalize(reset);
      },

      onRight({ reset }) {
        // TODO: implement action
        finalize(reset);
      },

      notesList,
    };
  },
};
</script>
