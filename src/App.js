import {Switch, Route} from "react-router-dom";
import Login from "./components/Login";
import AuthContextProvider from "./contexts/AuthContextProvider";
import Chats from "./components/Chats";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Switch>
          <Route path="/chats" component={Chats} />
          <Route path="/" component={Login} />
        </Switch>
      </AuthContextProvider>
    </div>
  );
}

export default App;
