import Vue from 'vue';
import axios from 'axios';

export const dogs = {
  state: {
    dogs: [],
    dogsError: null
  },

  mutations: {
    SET_NEW_DOG (state, dog) {
      const fileFormat = dog.url.split('.').reverse()[0].toLowerCase();
      if (fileFormat !== 'mp4' && fileFormat !== 'gif' && fileFormat !== 'webm') {
        state.dogs = [...state.dogs, dog];
      }
      // Saving dogs list in cookies
      if (state.dogs.length === 10) {
        Vue.prototype.$cookies.set('vue_dogs', JSON.stringify(state.dogs));
      }
    }
  },

  actions: {
    async DOGS_REQUEST ({ state, commit }) {
      try {
        while (state.dogs.length < 10) {
          await axios
            .get('https://random.dog/woof.json')
            .then(({ data }) => commit('SET_NEW_DOG', data))
        }
      } catch (err) {
        state.dogsError = 'There is no data';
      }
    }
  }
}
