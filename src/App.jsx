import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductList from "./pages/ProductList/ProductList/ProductList";
import ProductDetail from "./pages/ProductList/ProductDetail/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/product/:productId" component={ProductDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
