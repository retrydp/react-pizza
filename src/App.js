import React, { useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router';
import { useDispatch } from 'react-redux';

import { setPizzas } from './redux/actions/pizzas-action';

import { Header } from './components/';
import { Home, Cart } from './pages/';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
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
