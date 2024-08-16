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

const projectStore = useProjectStore()
const project = ref<Project | null>()
const newTask = ref('')

watch(() => props.id, (id) => {
  project.value = projectStore.projectList.find(project => project.id === id)
  if (project.value === undefined) {
    router.push('/projects')
  }
}, {immediate: true})

const addTaskToProject = () => {
  if (newTask.value.trim() === '') {
    return
  }
  if (!project.value) return
  projectStore.addTaskToProject(project.value.id, newTask.value)
  newTask.value = ''
}


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
          <tr v-for="task in project?.tasks" :key="task.id" class="hover">
            <th>
              <label>
                <input type="checkbox" class="checkbox checkbox-primary"
                       @change="projectStore.toggleTask(project!.id, task.id)" :checked="!!task.completedAt"/>
              </label>
            </th>
            <td>{{ task.name }}</td>
            <td>{{task.completedAt}}</td>
          </tr>
          <!-- row 2 -->
          <tr class="hover">
            <th></th>
            <td>
              <input type="text"
                     class="input input-primary w-full opacity-60 transition-all hover:opacity-100 focus:opacity-100"
                     placeholder="Nueva Tarea"
                     v-model="newTask"
                     @keyup.enter="addTaskToProject"/>
            </td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>

</template>
