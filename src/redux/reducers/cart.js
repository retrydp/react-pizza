const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (pizzas) => pizzas.reduce((sum, { price }) => sum + price, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const allPizzas = Object.values(newItems)
        .map(({ items }) => items)
        .flat();
      const totalPrice = getTotalPrice(allPizzas);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice: totalPrice,
      };
    }

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
};

export default cart;
