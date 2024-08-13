import {defineStore} from "pinia";
import {computed, ref} from "vue";
import type {Project} from "@/modules/projects/interfaces/project.interface";
import {v4 as uuidv4} from 'uuid'
import {useLocalStorage} from "@vueuse/core";

export const useProjectStore = defineStore('projects', () => {

    const projects = ref(useLocalStorage<Project[]>('projects', []))

    const addProject = (name: string) => {
        if (!name) return

        projects.value.push({
            id: uuidv4(),
            name,
            tasks: []
        })
    }


    return {
        // Properties
        projects,

        // Computed Properties (Getters)
        projectList: computed(() => [...projects.value]),
        noProjects: computed(() => projects.value.length === 0),

        // Methods (Actions)
        addProject
    }
})