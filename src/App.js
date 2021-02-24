import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Asteroids from "./components/asteroids";
import ErrorPage from "./components/error-page";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={ErrorPage} />
      <Route path="/asteroids" component={Asteroids} />
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>
);

export default App;
