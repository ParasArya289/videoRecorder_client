import "./Login.css";
export const Login = () => {
  const loginHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={loginHandler}>
        <label htmlFor="email">
          Email
          <input type="text" name="email" placeholder="Email" />
        </label>

        <label htmlFor="password">
          Password
          <input type="text" name="password" placeholder="Password" />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
