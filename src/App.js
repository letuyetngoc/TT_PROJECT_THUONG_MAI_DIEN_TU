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
import Home from "./page/Home/Home";
import SaleRegistration from "./page/SaleRegistration/SaleRegistration";
import AdminTemmplate from "./template/AdminTemplate";
import ProductList from "./page/ProductList/ProductList";
import ProductDetail from "./page/ProductDetail/ProductDetail";
import CreateProduct from "./page/Admin/CreateProduct";
import MyComponent from "./component/MyComponent";
import CheckoutInfo from "./page/Order/CheckoutInfo";
import MyListOrder from "./page/Order/MyListOrder";

export let history = createBrowserHistory();

function App() {

  return (
    <GobalStyle>
      <Router history={history}>
        <Switch>
          <Route exact path='/myComponent' component={MyComponent} />

          <HomeTemplate exact path='/login' Component={Login} />
          <HomeTemplate exact path='/store' Component={Store} />
          <HomeTemplate exact path='/register' Component={Register} />
          <HomeTemplate exact path='/saleRegistration' Component={SaleRegistration} />
          <HomeTemplate exact path='/home' Component={Home} />
          <HomeTemplate exact path='/all-products' Component={ProductList} />
          <HomeTemplate exact path='/product-detail' Component={ProductDetail} />
          <HomeTemplate exact path='/checkout-info' Component={CheckoutInfo} />
          <HomeTemplate exact path='/my-orders' Component={MyListOrder} />

          <Route exact path='/admin' component={AdminTemmplate} />
          <AdminTemmplate exact path='/admin/create-product' Component={CreateProduct} />


          <Route exact path='/verify-account' component={GuideVerifyEmail} />
          <Route exact path='/verify/:token' component={VerifiEmail} />
          <HomeTemplate exact path='' Component={Home} />
        </Switch>
      </Router>
    </GobalStyle>
  )
}

export default App;
