<script setup lang="ts">

import BreadCrumbs from "@/modules/common/components/BreadCrumbs.vue";
import {useProjectStore} from "@/modules/projects/store/projects.store";
import {ref, watch} from "vue";
import type {Project} from "@/modules/projects/interfaces/project.interface";
import {useRouter} from "vue-router";

interface Props {
  id: string
}

const router = useRouter()

const props = defineProps<Props>()

const projecStore = useProjectStore()
const project = ref<Project | null>()

watch(() => props.id, (id) => {
  project.value = projecStore.projectList.find(project => project.id === id)
  if (project.value === undefined) {
    router.push('/projects')
  }
}, {immediate: true})

</script>

<template>
  <div class="w-full">
    <section class="m-2">
      <BreadCrumbs :name="project?.name ?? 'No name'"/>
    </section>
    <section class="m-2">
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
          <tr class>
            <th class="w-14">Completada</th>
            <th>Tarea</th>
            <th>Completada en</th>
          </tr>
          </thead>
          <tbody>
          <!-- row 1 -->
          <tr class="hover">
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
          </tr>
          <!-- row 2 -->
          <tr class="hover">
            <th></th>
            <td>
              <input type="text"
                     class="input input-primary w-full opacity-60 transition-all hover:opacity-100 focus:opacity-100"
                     placeholder="Nueva Tarea"/>
            </td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>

</template>
