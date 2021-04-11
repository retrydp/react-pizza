const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };

      return {
        ...state,
        items: newItems,
        totalCount: Object.values(newItems).reduce((acc, { length }) => acc + length, 0),
        totalPrice: Object.values(newItems).reduce(
          (prev, curr) => prev + curr.reduce((acc, { price }) => acc + price, 0),
          0,
        ),
      };
    }
    default:
      return state;
  }
};

export default cart;
