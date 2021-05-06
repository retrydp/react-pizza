import axios from 'axios';

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `http://localhost:4000/pizzas?${
        category !== null ? `category=${category}` : ''
      }&sorted=${sortBy}&order=desc`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
