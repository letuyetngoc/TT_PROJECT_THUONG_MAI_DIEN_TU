import GobalStyle from "./gobalStyle/GobalStyle";
import { Route, Router, Switch } from "react-router-dom";
//history
import { createBrowserHistory } from "history";
//page
import HomeTemplate from "./template/HomeTemplate";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import Store from "./page/Store/Store";
import VerifiEmail from "./page/VerifyEmail/VerifyEmail";
import GuideVerifyEmail from "./page/VerifyEmail/GuideVerifyEmail";
import { Checkbox, CheckboxComponent } from "./component/Checkbox";
import Dropdown from "./component/Dropdown";
import Home from "./page/Home/Home";

export let history = createBrowserHistory();

function App() {

  return (
    <GobalStyle>
      <Router history={history}>
        <Switch>
          {/* <Route exact path='' component={HomeTemplate} /> */}
          <HomeTemplate exact path='/login' Component={Login} />
          <HomeTemplate exact path='/store' Component={Store} />
          <HomeTemplate exact path='/register' Component={Register} />
          <HomeTemplate exact path='/home' Component={Home} />
          <Route exact path='/verify-account' component={GuideVerifyEmail} />
          <Route exact path='/verify/:token' component={VerifiEmail} />
          <HomeTemplate exact path='' Component={Home} />
        </Switch>
      </Router>
    </GobalStyle>
  )
}

export default App;
