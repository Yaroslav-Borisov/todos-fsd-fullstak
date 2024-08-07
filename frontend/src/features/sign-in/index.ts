import { sessionRepository, useSessionStore } from "@/entities/session";
import { apiClient } from "@/shared/lib/api-client";

type SignInData = {
    username: string,
    password: string
}

export const useSignIn = () => {
    const setSession = useSessionStore((s) => s.setSession);

    return async (signInData: SignInData) => {
        const { data } = await apiClient.post<{ token: string }>(`/login`, signInData);

        const session = {
            username: signInData.username,
            token: data.token,
        };

        sessionRepository.saveSession(session);
        setSession(session);
        apiClient.setToken(data.token)

        await apiClient.get('/api/todos')
    };
}