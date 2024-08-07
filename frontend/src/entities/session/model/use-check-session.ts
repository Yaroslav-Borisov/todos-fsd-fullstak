import { useSessionStore } from "./session.store";

export const useCheckSession = () => {
    const session = useSessionStore((s) => s.session);

    return !!session
}