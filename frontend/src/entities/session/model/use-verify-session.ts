import { apiClient } from "@/shared/lib/api-client";
import { sessionRepository } from "./session.repository";
import { useSessionStore } from "./session.store";

export const useVerifySession = () => {
    const session = sessionRepository.getSession();
    const setSession = useSessionStore((s) => s.setSession);

    const verifySession = async () => {
        apiClient.setToken(session!.token);
        try {
            await apiClient.post(`/verify`);
            setSession(session);
        } catch (error) {
            sessionRepository.removeSession();
            apiClient.removeToken();
        }
    };

    if (session) {
        verifySession();
    }
}