import { persistentStorage } from "@/shared/lib/persistent-storage"
import { Session } from "./session.type"

const SESSION_STORAGE_KEY = 'session_strorage'

export const sessionRepository = {
    getSession: (): Session | null => {
        return persistentStorage.getItem(SESSION_STORAGE_KEY)
    },
    saveSession: (session: Session | null) => {
        return persistentStorage.saveItem(SESSION_STORAGE_KEY, session)
    },
    removeSession: () => {
        return persistentStorage.saveItem(SESSION_STORAGE_KEY, null)
    },
}