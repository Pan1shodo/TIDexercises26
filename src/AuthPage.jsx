import { useState } from "react";
import { useAuthStore } from "./store/UseAuthStore.js";

export default function AuthPage() {
  const { login, signUp, error, clearError } = useAuthStore();
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await (isSignUp ? signUp : login)(username, password);
    } catch {
      // the store already put the message in `error`
    }
  }

  function toggleMode() {
    clearError();
    setIsSignUp(!isSignUp);
  }

  return (
    <div className="todo-body">
      <h1>{isSignUp ? "Sign up" : "Log in"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          autoComplete="username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoComplete={isSignUp ? "new-password" : "current-password"}
        />
        <button disabled={!username.trim() || !password}>
          {isSignUp ? "Sign up" : "Log in"}
        </button>
      </form>
      {error && <p role="alert">{error}</p>}
      <button type="button" onClick={toggleMode}>
        {isSignUp ? "Have an account? Log in" : "No account? Sign up"}
      </button>
    </div>
  );
}
