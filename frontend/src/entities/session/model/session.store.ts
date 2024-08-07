import { create } from "zustand"
import { Session } from "./session.type"
import { devtools } from "zustand/middleware"

type SessionStore = {
    session: Session | null,
    setSession: (session: Session | null) => void
}

export const useSessionStore = create(devtools<SessionStore>((set) => ({
    session: null,
    setSession: (session) => {
        set({ session })
    }
})))