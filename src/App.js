import React, { useEffect, useState } from 'react';
import { Route } from 'react-router';

import { Header } from './components/';
import { Home, Cart } from './pages/';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((responce) => responce.json())
      .then(({ pizzas }) => setPizzas(pizzas));
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
