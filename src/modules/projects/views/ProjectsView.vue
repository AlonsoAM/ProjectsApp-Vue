<script setup lang="ts">

import FabButton from "@/modules/common/components/FabButton.vue";
import AddCircle from "@/modules/common/icons/AddCircle.vue";
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

  <fab-button @click="()=>console.log('click')
  ">
    <add-circle></add-circle>
  </fab-button>

</template>

<style scoped>

</style>