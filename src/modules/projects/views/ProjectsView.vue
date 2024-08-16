<script setup lang="ts">

import FabButton from "@/modules/common/components/FabButton.vue";
import AddCircle from "@/modules/common/icons/AddCircle.vue";
import InputModal from "@/modules/common/components/InputModal.vue";
import {ref} from "vue";
import CustomModal from "@/modules/common/components/CustomModal.vue";
import ModalIcon from "@/modules/common/icons/ModalIcon.vue";
import {useProjectStore} from "@/modules/projects/store/projects.store";

const modalOpen = ref(false)
const customModalOpen = ref(false)

const projectStore = useProjectStore()

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
      <tr v-for="(project, index) in projectStore.projectsWithCompletion" :key="project.id" class="hover">
        <th>{{ index + 1 }}</th>
        <td>{{ project.name }}</td>
        <td>{{ project.tasks.length }}</td>
        <td>
          <progress class="progress progress-primary w-56" :value="project.completion" max="100"></progress>
        </td>
      </tr>
      </tbody>
    </table>

  </div>

  <input-modal :open="modalOpen"
               placeholder="Ingrese el nombre del proyecto"
               titulo="Nuevo Proyecto"
               subtitulo="Dale un nombre único a tu proyecto."
               @close="modalOpen = false"
               @value="projectStore.addProject"></input-modal>

  <custom-modal :open="customModalOpen">
    <template v-slot:header>
      <h1>Header</h1>
    </template>
    <template v-slot:body>
      <p> Eiusmaiorum diam utamur per reprimique nisi posuere vehicula malorum mnesarchum tortor viderer vivendo iaculis
        liber volumus epicuri molestiae laudem. Loremrepudiandae class sadipscing an tractatos atomorum magna mutat
        dignissim efficitur porttitor donec persius solum animal semper decore. Quonostrum habitasse parturient.
        Mollisaudire per theophrastus habitant. Enimhas indoctum definitiones pertinacia porttitor. Appetereaccumsan
        semper suavitate senectus augue wisi liber regione appetere eius maecenas natoque nostra principes senserit
        montes iriure integer. </p>
    </template>
    <template v-slot:footer>
      <div class="flex justify-end mt-5">
        <button class="btn mr-4" @click="customModalOpen = false">Close</button>
        <button class="btn btn-primary" @click="customModalOpen = false">Aceptar</button>
      </div>
    </template>
  </custom-modal>

  <fab-button @click="modalOpen = true">
    <add-circle></add-circle>
  </fab-button>

  <fab-button @click="customModalOpen = true" position="bottom-left">
    <modal-icon></modal-icon>
  </fab-button>

</template>

<style scoped>

</style>