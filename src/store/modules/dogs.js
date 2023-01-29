import axios from 'axios'

export const dogs = {
  state: {
    dogs: []
  },

  mutations: {
    SET_NEW_DOG (state, dog) {
      const fileFormat = dog.url.split('.').reverse()[0].toLowerCase();
      if (fileFormat !== 'mp4' && fileFormat !== 'gif' && fileFormat !== 'webm') {
        state.dogs = [...state.dogs, dog];
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
        console.log(err)
      }
    }
  }
}
