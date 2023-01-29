<template>
  <ul class="products-list">
    <li
      class="products-list__item"
      v-for="product in products"
      :key="product.id"
    >
      <ProductCard :product="product" />
    </li>
  </ul>
</template>

<script>
import ProductCard from '@/components/products/ProductCard.vue'

export default {
  name: 'ProductsList',

  components: {
    ProductCard
  },

  props: {
    products: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
.products-list {
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  gap: 24px 30px;

  &__item {
    position: relative;
    max-width: 100%;
    transition: box-shadow .3s ease-in-out, transform .3s ease-in-out;

    &:hover {
      box-shadow: 6px 6px 0 0 $gray;
      transform: translate(-6px, -6px);
    }

    &::before {
      position: absolute;
      left: 17px;
      top: 17px;
      padding: 4px 12px 3px;
      font-size: 12px;
      color: #fff;
      text-transform: uppercase;
      font-weight: 600;
    }

    &:nth-child(1)::before {
      content: 'Top';
      background-color: teal;
    }

    &:nth-child(2)::before {
      content: 'Sale';
      background-color: coral;
    }

    &:nth-child(3)::before {
      content: 'Popular';
      background-color: slateblue;
    }
  }

  @media screen and (max-width: 1280px) {
    gap: 16px 30px;
  }

  @media screen and (max-width: 430px) {
    gap: 8px;
  }
}
</style>
