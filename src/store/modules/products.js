import axios from 'axios';

export const products = {
  state: {
    products: [],
    productsError: null,
  },

  mutations: {
    SET_PRODUCTS (state, data) {
      state.products = data;
    }
  },

  actions: {
    async PRODUCTS_REQUEST ({ state, commit }) {
      state.products = [];

      try {
        await axios
          .get('https://dummyjson.com/products?limit=100')
          .then(({ data }) => {
            commit('SET_PRODUCTS', data.products);
            window.localStorage.setItem('products', JSON.stringify(data.products));
          })
      } catch (err) {
        state.productsError = 'There is no data';
      }
    }
  }
}
