import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomepageDark from "./pages/HomepageDark";
import Bloglist from "./pages/Bloglist";
import BlogDetails from "./pages/BlogDetails";
import ButcherPrivacy from './pages/butcher/Privacy';
import ButcherTerms from './pages/butcher/Terms';
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomepageDark />
        </Route>
        <Route path="/blogs" component={Bloglist} exact />
        <Route path="/blogs/blog-details/:id/:title" component={BlogDetails} />
        <Route path="/app/butcher/privacy" component={ButcherPrivacy} exact />
        <Route path="/app/butcher/terms" component={ButcherTerms} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
