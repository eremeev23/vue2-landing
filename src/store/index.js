import Vue from 'vue';
import Vuex from 'vuex';
import { dogs } from './modules/dogs';
import { products } from './modules/products';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dogs,
    products
  }
})
