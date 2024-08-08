import { sessionRepository, useSessionStore } from "@/entities/session";
import { apiClient } from "@/shared/lib/api-client";

export const useSignOut = () => {
    const setSession = useSessionStore((s) => s.setSession);

    return () => {
        sessionRepository.removeSession()
        apiClient.removeToken()
        setSession(null)
    }
}