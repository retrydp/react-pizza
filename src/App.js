import React, { useEffect, useState } from 'react';
import { Route } from 'react-router';
import axios from 'axios';

import { Header } from './components/';
import { Home, Cart } from './pages/';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => setPizzas(data.pizzas));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content"></div>
      <Route path="/" exact render={() => <Home items={pizzas} />} />
      <Route path="/cart" exact component={Cart} />
    </div>
  );
}

export default App;
