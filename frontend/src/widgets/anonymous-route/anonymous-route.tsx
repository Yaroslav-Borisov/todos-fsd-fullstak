import { useSessionStore } from '@/entities/session';
import { ROUTER_PATHS } from '@/shared/constants';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

export const AnonymousRoute = ({ children }: { children: ReactNode }) => {
  const session = useSessionStore((s) => s.session);

  if (session) {
    return <Navigate to={ROUTER_PATHS.TASKS} replace />;
  }

  return children;
};
