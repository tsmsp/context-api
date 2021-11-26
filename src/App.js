import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home/Home";
import Food from "./pages/Food/Food";
import Movie from "./pages/Movie/Movie";
import ContextComponent from "./store/ContextComponent";

export default function App() {
  return (
    <ContextComponent>
      <BrowserRouter>
        <Link style={{ textDecoration: 'none', color: 'blue' }} to="/">HOME</Link>
        <Link style={{ textDecoration: 'none', color: 'tomato' , marginLeft: '10px' }} to="/Food">FOOD</Link>
        <Link style={{ textDecoration: 'none', color: 'brown', marginLeft: '10px' }} to="/Movie">MOVIE</Link>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Food" exact>
            <Food />
          </Route>
          <Route path="/Movie" exact>
            <Movie />
          </Route>
        </Switch>
      </BrowserRouter>
    </ContextComponent>
  );
}
