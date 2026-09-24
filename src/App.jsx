import "./App.css";
import ToDoList from "./ToDoList.jsx";
import AuthPage from "./AuthPage.jsx";
import Parse from "parse";
import AppID from "./keys.json";
import JSkey from "./keys.json";
import ParseServerURL from "./keys.json";
import { useAuthStore } from "./store/UseAuthStore.js";

Parse.initialize(AppID, JSkey);
Parse.serverURL = ParseServerURL;

function App() {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore.setState;

  function handleAuthenticated(loggedInUser) {
    setUser({ user: loggedInUser });
  }

  if (!user) {
    return <AuthPage onAuthenticated={handleAuthenticated} />;
  }

  return (
    <div className="main-inner">
      <ToDoList listTitle={"My Todo List"} />
    </div>
  );
}

export default App;
