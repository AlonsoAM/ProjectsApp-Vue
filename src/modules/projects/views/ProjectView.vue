<script setup lang="ts">

import {useRouter} from "vue-router";
import BreadCrumbs from "@/modules/common/components/BreadCrumbs.vue";
import {useProjectStore} from "@/modules/projects/store/projects.store";
import {ref, watch} from "vue";
import type {Project} from "@/modules/projects/interfaces/project.interface";

const route = useRouter()

interface Props {
  id: string
}

const props = defineProps<Props>()

const projecStore = useProjectStore()
const project = ref<Project | null>()

watch(() => props.id, (id) => {
  project.value = projecStore.projectList.find(project => project.id === id)
}, {immediate: true})

</script>

<template>
  <BreadCrumbs :name="project?.name ?? 'No name'"/>
</template>
