import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";

import HomeHeader from "./Components/homeHeader/HomeHeader";
import { HomeTemplate } from "./_Templates/HomeTemplate/HomeTemplate";
import HomeDesktop from "./_Pages/Home/HomeDesktop";

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      {/* <HomeHeader /> */}
      <Switch>
        <HomeTemplate exact path="/home" Component={HomeDesktop} />
        <Route exact path="/homeheader" component={HomeHeader} />
        <HomeTemplate exact path="/" Component={HomeDesktop} />
      </Switch>
    </Router>
  );
}

export default App;
