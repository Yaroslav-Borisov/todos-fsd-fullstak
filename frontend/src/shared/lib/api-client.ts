import axios, { AxiosInstance } from "axios";

type ApiClient = AxiosInstance & {
    setToken: (token: string) => void
    removeToken: () => void
}

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
}) as ApiClient

apiClient.setToken = function (token: string) {
    this.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

apiClient.removeToken = function () {
    delete this.defaults.headers.common['Authorization']
}