import "./App.css";
import ToDoList from "./ToDoList.jsx";
import AuthPage from "./AuthPage.jsx";
import { useAuthStore } from "./store/UseAuthStore.js";

function App() {
  const user = useAuthStore((state) => state.user);
  const logOut = useAuthStore((state) => state.logOut);

  if (!user) {
    return <AuthPage />;
  }

  return (
    <div className="main-inner">
      <button type="button" onClick={logOut}>
        Log out ({user.get("username")})
      </button>
      <ToDoList listTitle={"My Todo List"} />
    </div>
  );
}

export default App;
