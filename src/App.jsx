import "./App.css";
import ToDoList from "./ToDoList.jsx";
import AuthPage from "./AuthPage.jsx";
import { useAuthStore } from "./store/UseAuthStore.js";

function App() {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <AuthPage />;
  }

  return (
    <div className="main-inner">
      <ToDoList listTitle={"My Todo List"} />
    </div>
  );
}

export default App;
