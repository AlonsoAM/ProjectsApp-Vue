import {defineStore} from "pinia";
import {computed, ref} from "vue";
import type {Project} from "@/modules/projects/interfaces/project.interface";
import { v4 as uuidv4} from 'uuid'

const initialLoad = (): Project[] => {
    return [
        {
            id: uuidv4(),
            name: 'Project 1',
            tasks: [
                {
                    id: '1',
                    name: 'Task 1'
                },
                {
                    id: '2',
                    name: 'Task 2'
                }
            ]
        },
        {
            id: uuidv4(),
            name: 'Project 2',
            tasks: [
                {
                    id: '1',
                    name: 'Task 1'
                },
                {
                    id: '2',
                    name: 'Task 2'
                }

            ]
        },
    ]
}

export const useProjectStore = defineStore('projects', () => {

    const projects = ref<Project[]>(initialLoad())

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
        // projects,

        // Computed Properties (Getters)
        projectList: computed(() => [...projects.value]),

        // Methods (Actions)
        addProject
    }
})