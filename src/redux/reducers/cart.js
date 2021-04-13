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
  const construct = (items, obj, stateValue = state) => {
    return items
      ? {
          ...stateValue,
          items,
          totalCount: getValues(items).length,
          totalPrice: getTotalPrice(getValues(items)),
        }
      : {
          ...stateValue,
          totalCount: getValues(obj).length,
          totalPrice: getTotalPrice(getValues(obj)),
        };
  };

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

      return construct(newItems);
    }

    case 'CLEAR_CART':
      return initialState;

    case 'REMOVE_CART_ITEM':
      const { [action.payload]: _, ...rest } = state.items; // реализация без delete

      return construct(rest);

    case 'ADD_CART_ITEM': {
      const newItems = [...state.items[action.payload].items, state.items[action.payload].items[0]];
      const newState = {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: newItems,
            totalPrice: getTotalPrice(newItems),
          },
        },
        totalPrice: getTotalPrice(newItems),
        totalCount: getValues(newItems).length,
      };

      return construct(null, newState.items, newState);
    }

    case 'REDUCE_CART_ITEM': {
      const oldItems = state.items[action.payload].items;
      const newItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
      const newState = {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: newItems,
            totalPrice: getTotalPrice(newItems),
          },
        },
        totalPrice: getTotalPrice(newItems),
        totalCount: getValues(newItems).length,
      };

      return construct(null, newState.items, newState);
    }

    default:
      return state;
  }
};

export default cart;
