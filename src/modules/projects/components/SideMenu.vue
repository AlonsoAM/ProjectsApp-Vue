<script setup lang="ts">
import {useProjectStore} from "@/modules/projects/store/projects.store";

const projectStore = useProjectStore()


</script>

<template>
  <aside class="bg-base-200 w-72 min-h-screen">
    <h2 class="text-lg font-bold mx-4">Proyectos</h2>
    <p v-if="projectStore.noProjects" class="text-sm text-gray-500 mx-4">No hay proyectos</p>
    <!--   Menu   -->
    <ul v-else class="menu rounded-box w-56">
      <li v-for="project in projectStore.projectList" :key="project.id">
        <template v-if="project.tasks.length > 0">
          <details>
            <summary>
              <router-link :to="`/project/${project.id}`">
                {{ project.name }}
              </router-link>
            </summary>
            <ul>
              <li v-for="task in project.tasks" :key="task.id">
                <router-link :to="`/project/${project.id}`">{{ task.name }}</router-link>
              </li>
            </ul>
          </details>
        </template>
        <template v-else>
          <router-link :to="`/project/${project.id}`">
            {{ project.name }}
          </router-link>
        </template>
      </li>
    </ul>
  </aside>

</template>

<style scoped>

</style>