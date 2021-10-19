import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Dashboard, SignUp, Tasks, Users } from "./pages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/sign-up" component={SignUp} />
          <Route path="/users" component={Users} />
          <Route path="/add-users" component={Users} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
