<template>
  <div class="q-pa-md">
    <q-form @submit="register" @reset="resetForm" class="q-gutter-md">
      <q-input v-model.trim="email" label="Email" />
      <q-input v-model.trim="password" label="Password" />
      <div>
        <q-btn label="Register with password" type="submit" color="primary" />
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
<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");

function register() {
  // todo
}
function resetForm() {
  // todo
}
</script>
