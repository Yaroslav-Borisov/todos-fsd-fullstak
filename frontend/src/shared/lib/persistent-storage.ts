export const persistentStorage = {
    getItem: <T>(key: string): T | null => {
        const item = localStorage.getItem(key)
        return item ? JSON.parse(item) : null
    },
    saveItem: <T>(key: string, item: T | null) => {
        localStorage.setItem(key, JSON.stringify(item))
    },
}