<template>
  <div class="q-pa-md">
    <q-form @submit="onSubmitNote" @reset="onResetNote" class="q-gutter-md">
      <q-input v-model="note" label="Note" />
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

export default {
  name: "InputForm",
  setup() {
    const note = ref("");
    const anonymous = ref(false);

    return {
      note,
      anonymous,

      onResetNote() {
        note.value = null;
        anonymous.value = false;
      },

      onSubmitNote() {
        alert("implement");
      },
    };
  },
};
</script>
