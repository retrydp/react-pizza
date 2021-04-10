import React, { useEffect } from 'react';
import { Route } from 'react-router';
import { useDispatch } from 'react-redux';

import { fetchPizzas } from './redux/actions/pizzas-action';

import { Header } from './components/';
import { Home, Cart } from './pages/';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content"></div>
      <Route path="/" exact component={Home} />
      <Route path="/cart" exact component={Cart} />
    </div>
  );
};

export default App;
