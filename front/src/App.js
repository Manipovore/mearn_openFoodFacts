import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from './components/component_navigation';
import Footer from './components/component_footer';
import Products from "./pages/Products";
import Product from "./pages/Product";
import Packaging from "./pages/Packaging";
import Categories from './pages/Categories';
import Manufacturing from './pages/Manufacturing';
import Labels from './pages/Labels';
import Origins from './pages/Origins';
import Brands from './pages/Brands';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <div className="main-route-place jumbotron">
            <Route exact path="/" component={Home} />
            <Route exact path="/products/:id?" component={Products} />
            <Route exact path="/product/:code" component={Product} />
            <Route exact path="/packaging/:name/:id?" component={Packaging} />
            <Route path="/manufacturing_places/:name?" component={Manufacturing} />
            <Route path="/labels_fr/:name?" component={Labels} />
            <Route path="/origins/:name?" component={Origins} />
            <Route path="/brands/:name?" component={Brands} />
            <Route path="/categories/:name?" component={Categories} />
            <Route path="/other" component={Other} />
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}

class Other extends React.Component {
  render() {
    return (
      <div>
        <h2>Other</h2>
      </div>
    );
  }
}

export default App;
