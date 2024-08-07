export const SignUp = () => {
  return (
    <>
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
