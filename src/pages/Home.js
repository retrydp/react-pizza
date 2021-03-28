import React from 'react';
import { useSelector } from 'react-redux';

import { Categories, SortPopup, PizzaBlock } from '../components/';

const Home = () => {
  const { items } = useSelector(({ pizzas }) => ({ items: pizzas.items }));

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
        <SortPopup
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((el) => <PizzaBlock key={el.id} {...el} />)}
      </div>
    </div>
  );
};

export default Home;
