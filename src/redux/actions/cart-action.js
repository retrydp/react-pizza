export const addPizzaToCart = (pizzaObj) => ({
  type: 'ADD_PIZZA_CART',
  payload: pizzaObj,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

export const removeCartItem = (id) => ({
  type: 'REMOVE_CART_ITEM',
  payload: id,
});

export const addCount = (id) => ({
  type: 'ADD_CART_ITEM',
  payload: id,
});

export const reduceCount = (id) => ({
  type: 'REDUCE_CART_ITEM',
  payload: id,
});
