import { create } from "zustand"
import { Session } from "./session.type"

type SessionStore = {
    session: Session | null,
    setSession: (session: Session | null) => void
}

export const useSession = create<SessionStore>((set) => ({
    session: null,
    setSession: (session) => {
        set({ session })
    }
}))