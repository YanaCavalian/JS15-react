import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./pages/ProductList/ProductList/ProductList";
import ProductDetail from "./pages/ProductList/ProductDetail/ProductDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/product/:productId" component={ProductDetail} />
      </Switch>
    </Router>
  );
}

export default App;
