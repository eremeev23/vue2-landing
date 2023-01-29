<template>
  <main class="main-page">
    <div class="container">
      <section class="main-page__banner">
        <SwiperBanner
          v-if="dogs?.length === 10"
          :slides="dogs"
        />
        <SkeletonSwiper v-else />
      </section>
      <section class="main-page__products">
        <ProductsList
          v-if="products?.length"
          :products="products"
        />
        <SkeletonList v-else />
      </section>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';
import SwiperBanner from '@/components/swipers/SwiperBanner.vue';
import SkeletonSwiper from '@/components/skeletons/SkeletonSwiper.vue';
import SkeletonList from '@/components/skeletons/SkeletonList.vue';
import ProductsList from '@/components/products/ProductsList.vue'

export default {
  name: 'HomeView',

  components: {
    SwiperBanner,
    SkeletonSwiper,
    SkeletonList,
    ProductsList,
  },

  computed: {
    ...mapState({
      dogs: state => state.dogs.dogs,
      products: state => state.products.products
    })
  },

  methods: {
    ...mapActions(['DOGS_REQUEST', 'PRODUCTS_REQUEST']),
    ...mapMutations(['SET_NEW_DOG', 'SET_PRODUCTS'])
  },

  created () {
    // DOGS AND COOKIES
    const localDogs = this.$cookies.get('vue_dogs');
    if (!localDogs) {
      this.DOGS_REQUEST();
    } else {
      for (let i = 0; i < 10; i++) {
        this.SET_NEW_DOG(localDogs[i]);
      }
    }
    // PRODUCTS AND LOCAL STORAGE
    const localProducts = JSON.parse(window.localStorage.getItem('products'));
    if (!localProducts) {
      this.PRODUCTS_REQUEST();
    } else {
      this.SET_PRODUCTS(localProducts);
    }
  },
}
</script>

<style lang="scss" scoped>
.main-page {
  padding: 1rem 0 1.5rem;

  .container {
    display: flex;
    flex-direction: column;
    gap: 29px;
  }

  &__products {
    max-width: 100%;
  }
}
</style>
