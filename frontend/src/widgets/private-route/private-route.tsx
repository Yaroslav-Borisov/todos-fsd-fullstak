import { useSessionStore } from '@/entities/session';
import { ROUTER_PATHS } from '@/shared/constants';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const session = useSessionStore((s) => s.session);

  if (session) {
    return children;
  }

  return <Navigate to={ROUTER_PATHS.SIGN_IN} replace />;
};
