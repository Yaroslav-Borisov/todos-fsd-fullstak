import { ROUTER_PATHS } from '@/shared/constants';
import { Link } from 'react-router-dom';

export const SignUp = () => {
  return (
    <>
      <header className="app-header">
        <span className="logo">TODOS</span>
        <div className="aside">
          <div className="nav__links">
            <Link to={ROUTER_PATHS.SIGN_IN}>Sign In</Link>
          </div>
        </div>
      </header>

      <main className="app-main">
        <section className="auth">
          <form className="auth__form">
            <div className="text-input text-input--focus">
              <input className="input" placeholder="username" />
            </div>
            <div className="text-input">
              <input className="input" placeholder="password" />
            </div>
            <button className="button button--filled">Sign Up</button>
          </form>
        </section>
      </main>
    </>
  );
};
