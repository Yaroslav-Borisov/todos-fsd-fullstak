import { useSignUp } from '@/features/sign-up';
import { TextInput } from '@/shared/ui/text-input';
import { useState } from 'react';

export const SignUp = () => {
  const [formData, setFormData] = useState<{ username: string; password: string }>({
    username: '',
    password: '',
  });

  const signUp = useSignUp();

  return (
    <>
      <main className="app-main">
        <section className="auth">
          <form
            className="auth__form"
            onSubmit={(e) => {
              e.preventDefault();
              signUp(formData);
              setFormData({ username: '', password: '' });
            }}
          >
            <TextInput
              placeholder={'username'}
              value={formData.username}
              onChange={(e) => setFormData((prev) => ({ ...prev, username: e.target.value }))}
            />
            <TextInput
              placeholder={'password'}
              value={formData.password}
              onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
            />
            <button className="button button--filled">Sign Up</button>
          </form>
        </section>
      </main>
    </>
  );
};
