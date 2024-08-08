import { Link, Outlet, useLocation } from 'react-router-dom';
import { Profile } from './profile';
import { ROUTER_PATHS } from '@/shared/constants';
import { useCheckSession } from '@/entities/session/model/use-check-session';

export const RootLayout = () => {
  const location = useLocation();
  const isSessionExists = useCheckSession();
  //   const lastSession = sessionRepository.getSession();

  return (
    <>
      <header className="app-header">
        <span className="logo">TODOS</span>
        <div className="aside">
          {isSessionExists ? (
            <Profile />
          ) : (
            <div className="nav__links">
              {location.pathname === ROUTER_PATHS.SIGN_UP ? (
                <Link to={ROUTER_PATHS.SIGN_IN}>Sign In</Link>
              ) : (
                <Link to={ROUTER_PATHS.SIGN_UP}>Sign Up</Link>
              )}
            </div>
          )}
        </div>
      </header>
      <Outlet />
    </>
  );
};
