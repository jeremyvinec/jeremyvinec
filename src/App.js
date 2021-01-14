import React from "react";
import { BrowserRouter, Switch, Route, HashRouter as Router, } from "react-router-dom";
import HomepageDark from "./pages/HomepageDark";
import Bloglist from "./pages/Bloglist";
import BlogDetails from "./pages/BlogDetails";
import ButcherPrivacy from './pages/butcher/Privacy';
import ButcherTerms from './pages/butcher/Terms';
import NutritiveTerms from './pages/nutritive/Terms';
import NutritivePrivacy from './pages/nutritive/Privacy';
import NutritiveData from './pages/nutritive/Data';
import Coffee from "./pages/coffee/Coffee";
import "./App.scss";

function App() {
  return (
    <Router>
      <Route path="/" exact>
          <HomepageDark/>
        </Route>
        <Route exact path="/:help/buymeacoffee">
          <Coffee/>
        </Route>
        <Route exact path="/:app/butcher/privacy">
          <ButcherPrivacy/>
        </Route>
        <Route exact path="/:app/butcher/terms" >
          <ButcherTerms/>
        </Route>
        <Route exact path="/:app/nutritive/privacy" >
          <NutritivePrivacy/>
        </Route>
        <Route exact path="/:app/nutritive/terms">
          <NutritiveTerms/>
        </Route>
        <Route exact path="/:app/nutritive/data">
          <NutritiveData/>
        </Route>
    </Router>
  );
}

export default App;
