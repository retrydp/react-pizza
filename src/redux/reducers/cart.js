const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (pizzas) => pizzas.reduce((sum, { price }) => sum + price, 0);
const getValues = (obj) =>
  Object.values(obj)
    .map(({ items }) => items)
    .flat();

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

      return {
        ...state,
        items: newItems,
        totalCount: getValues(newItems).length,
        totalPrice: getTotalPrice(getValues(newItems)),
      };
    }

    case 'CLEAR_CART':
      return initialState;

    case 'REMOVE_CART_ITEM':
      const { [action.payload]: _, ...rest } = state.items; // реализация без delete

      return {
        ...state,
        items: rest,
        totalPrice: getTotalPrice(getValues(rest)),
        totalCount: getValues(rest).length,
      };

    default:
      return state;
  }
};

export default cart;
