import { useSignIn } from '@/features/sign-in';
import { TextInput } from '@/shared/ui/text-input';
import { useState } from 'react';

export const SignIn = () => {
  const [formData, setFormData] = useState<{ username: string; password: string }>({
    username: '',
    password: '',
  });

  const signIn = useSignIn();

  return (
    <main className="app-main">
      <section className="auth">
        <form
          className="auth__form"
          onSubmit={(e) => {
            e.preventDefault();
            signIn(formData);
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
  );
};
