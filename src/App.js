import GobalStyle from "./gobalStyle/GobalStyle";
import { Route, Router, Switch } from "react-router-dom";
//history
import { createBrowserHistory } from "history";
//page
import HomeTemplate from "./template/HomeTemplate";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import Store from "./page/Store/Store";

export let history = createBrowserHistory();

function App() {

  return (
    <GobalStyle>
      <Router history={history}>
        <Switch>
          {/* <Route exact path='' component={HomeTemplate} /> */}
          <HomeTemplate exact path='/login' Component={Login} />
          <HomeTemplate exact path='/register' Component={Register} />
          <HomeTemplate exact path='/store' Component={Store} />
        </Switch>
      </Router>
    </GobalStyle>
  )
}

export default App;
