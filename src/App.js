import React, { useEffect, useState } from 'react';
import { Route } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux';

import { setPizzas } from './redux/actions/pizzas-action';

import { Header } from './components/';
import { Home, Cart } from './pages/';

// function App() {
//   useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => setPizzas(data.pizzas));
//   }, []);

//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content"></div>
//       <Route path="/" exact render={() => <Home items={pizzas} />} />
//       <Route path="/cart" exact component={Cart} />
//     </div>
//   );
// }

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="wrapper">
        <Header />
        <div className="content"></div>
        <Route path="/" exact render={() => <Home items={this.props.items} />} />
        <Route path="/cart" exact component={Cart} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { items: state.pizzas.items };
};

const mapDispatchToProps = (dispatch) => {
  return { setPizzas: (items) => dispatch(setPizzas(items)) };
};
// const mapDispatchToProps = { setPizzas };
export default connect(mapStateToProps, mapDispatchToProps)(App);
