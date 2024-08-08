import { sessionRepository, useSessionStore } from "@/entities/session";
import { apiClient } from "@/shared/lib/api-client";

type SignUpData = {
    username: string,
    password: string
}

export const useSignUp = () => {
    const setSession = useSessionStore((s) => s.setSession);

    return async (signUpData: SignUpData) => {
        const { data } = await apiClient.post<{ token: string }>(`/register`, signUpData);

        const session = {
            username: signUpData.username,
            token: data.token,
        };

        sessionRepository.saveSession(session);
        setSession(session);
        apiClient.setToken(data.token)

        await apiClient.get('/api/todos')
    };
}