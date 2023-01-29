import axios from 'axios';

export const products = {
  state: {
    products: []
  },

  mutations: {
    SET_PRODUCTS (state, data) {
      state.products = data.products;
    }
  },

  actions: {
    async PRODUCTS_REQUEST ({ state, commit }) {
      state.products = [];

      try {
        await axios
          .get('https://dummyjson.com/products?limit=100')
          .then(({ data }) => commit('SET_PRODUCTS', data))
      } catch (err) {
        console.log(err)
      }
    }
  }
}
