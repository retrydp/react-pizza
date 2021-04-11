import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPizzas } from '../redux/actions/pizzas-action';
import { addPizzaToCart } from '../redux/actions/cart-action';
import { setCategory, setSortBy } from '../redux/actions/filters-action';

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components/';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'rating' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'name' },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [dispatch, category, sortBy]);

  const onSelectCategory = useCallback(
    (item) => {
      item !== category && dispatch(setCategory(item));
    },
    [dispatch, category],
  );

  const onSelectSortType = useCallback(
    (type) => {
      type !== sortBy && dispatch(setSortBy(type));
    },
    [dispatch, sortBy],
  );

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup activeSortType={sortBy} items={sortItems} onClickSortType={onSelectSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((el) => (
              <PizzaBlock
                addedCount={cartItems[el.id] && cartItems[el.id].length}
                onClickAddPizza={handleAddPizzaToCart}
                key={el.id}
                {...el}
              />
            ))
          : Array.from({ length: 12 }, (_, idx) => <PizzaLoadingBlock key={idx} />)}
      </div>
    </div>
  );
};

export default Home;
