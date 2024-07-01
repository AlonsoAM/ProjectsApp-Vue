<script setup lang="ts">

import FabButton from "@/modules/common/components/FabButton.vue";
import AddCircle from "@/modules/common/icons/AddCircle.vue";
import InputModal from "@/modules/common/components/InputModal.vue";
import {ref} from "vue";

const modalOpen = ref(false)
const onNewValue = (value: string) => {
  console.log('onNewValue', value)
}

</script>

<template>

  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
      <tr>
        <th></th>
        <th>Proyecto</th>
        <th>Tareas</th>
        <th>Avance</th>
      </tr>
      </thead>
      <tbody>
      <!-- row 1 -->
      <tr class="hover">
        <th>1</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      </tbody>
    </table>

  </div>

  <input-modal :open="modalOpen"
               placeholder="Ingrese el nombre del proyecto"
               titulo="Nuevo Proyecto"
               subtitulo="Dale un nombre único a tu proyecto."
               @close="modalOpen = false"
               @value="onNewValue"></input-modal>

  <fab-button @click="modalOpen = true">
    <add-circle></add-circle>
  </fab-button>

</template>

<style scoped>

</style>