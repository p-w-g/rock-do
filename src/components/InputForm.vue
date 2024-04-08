<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <q-form @submit="onSubmitNote" @reset="onResetNote" class="q-gutter-md">
        <q-input v-model="note" label="Note" />
        <q-toggle v-model="accept" label="Anonymous note" />
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
      <q-form
        @submit="onSubmitCategory"
        @reset="onResetCategory"
        class="q-gutter-md"
      >
        <q-input v-model="category" label="Category" />
        <q-select
          v-model="selected"
          :options="existingCategories"
          label="Delete existing category"
        />
        <div>
          <q-btn label="Add category" type="submit" color="primary" />
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
  </q-page>
</template>

<style></style>

<script>
import { ref } from "vue";

export default {
  name: "InputForm",
  setup() {
    const note = ref("");
    const category = ref("");
    const accept = ref(false);
    const selected = ref(null);
    const existingCategories = ref([
      "TODO",
      "IMPLEMENT",
      "PERSISTENCE",
      "AND",
      "FETCH",
      "PREEXISTING",
      "CATEGORIES",
    ]);

    return {
      note,
      category,
      accept,
      selected,
      existingCategories,

      onResetNote() {
        note.value = null;
        accept.value = false;
      },
      onResetCategory() {
        category.value = null;
      },

      onSubmitNote() {
        alert("implement");
      },
      onSubmitCategory() {
        alert("implement");
      },
    };
  },
};
</script>
