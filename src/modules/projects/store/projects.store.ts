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

    const addTaskToProject = (projectId: string, taskName: string) => {

        if (!taskName) return

        const project = projects.value.find(project => project.id === projectId)
        if (!project) return

        project.tasks.push({
            id: uuidv4(),
            name: taskName
        })
    }

    const toggleTask = (projectId: string, taskId: string) => {
        const project = projects.value.find(project => project.id === projectId)
        if (!project) return
        const task = project.tasks.find(task => task.id === taskId)
        if (!task) return
        task.completedAt = task.completedAt ? undefined : new Date()
    }


    return {
        // Properties
        projects,

        // Computed Properties (Getters)
        projectList: computed(() => [...projects.value]),
        noProjects: computed(() => projects.value.length === 0),
        projectsWithCompletion: computed(() => {
            return projects.value.map(project => {
                const completedTasks = project.tasks.filter(task => task.completedAt).length
                const totalTasks = project.tasks.length
                return {
                    ...project,
                    completion: totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100)
                }
            })
        }),

        // Methods (Actions)
        addProject,
        addTaskToProject,
        toggleTask
    }
})