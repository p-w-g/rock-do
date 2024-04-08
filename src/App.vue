<template>
  <q-layout view="lhh LpR lff">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title> Rock Notes </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <InputForm />
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>Get stuff done</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import InputForm from "./components/InputForm.vue";

export default {
  name: "LayoutDefault",

  components: {
    InputForm: InputForm,
  },
};
</script>
