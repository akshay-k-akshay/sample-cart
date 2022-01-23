import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/dashboard/addProduct" component={AddProduct} />
      <Route exact path="/dashboard/editProduct/:id" component={EditProduct} />
    </Switch>
  );
}

export default App;
