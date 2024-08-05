import { sessionRepository } from '@/entities/session';
import { ROUTER_PATHS } from '@/shared/constants';
import { apiClient } from '@/shared/lib/api-client';
import { TextInput } from '@/shared/ui/text-input';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const SignIn = () => {
  const [formData, setFormData] = useState<{ username: string; password: string }>({
    username: '',
    password: '',
  });

  const signIn = async () => {
    const { data } = await apiClient.post<{ token: string }>(`/login`, formData);

    const session = {
      username: formData.username,
      token: data.token,
    };

    sessionRepository.saveSession(session);
  };

  return (
    <>
      <header className="app-header">
        <span className="logo">TODOS</span>
        <div className="aside">
          <div className="nav__links">
            <Link to={ROUTER_PATHS.SIGN_UP}>Sign Up</Link>
          </div>
        </div>
      </header>

      <main className="app-main">
        <section className="auth">
          <form
            className="auth__form"
            onSubmit={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            <TextInput
              placeholder={'username'}
              onChange={(e) => setFormData((prev) => ({ ...prev, username: e.target.value }))}
            />
            <TextInput
              placeholder={'password'}
              onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
            />
            <button className="button button--filled">Sign In</button>
          </form>
        </section>
      </main>
    </>
  );
};
