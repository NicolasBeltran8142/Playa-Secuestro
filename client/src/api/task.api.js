import axios from 'axios'

const tasksApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/tasks/api/v1/tasks/'
})

export const getAllTask = () => tasksApi.get('/')

export const getTask = (id) => tasksApi.get('/' + id + '/')

export const createTask = async (taskFormData) => {
    // taskFormData ya es un FormData que viene de TaskFormPage
    await tasksApi.post("/", taskFormData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
}

export const deleteTask = (id) => tasksApi.delete('/' + id + '/')

export const updateTask = async (id, taskFormData) => {
    // taskFormData ya es un FormData que viene de TaskFormPage
    await tasksApi.patch(`/${id}/`, taskFormData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
}
