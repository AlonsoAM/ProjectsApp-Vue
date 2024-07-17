import {defineStore} from "pinia";
import {ref} from "vue";
import type {Project} from "@/modules/projects/interfaces/project.interface";

const initialLoad = (): Project[] => {
    return [
        {
            id: '1',
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
            id: '2',
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

    return {
        projects
    }
})