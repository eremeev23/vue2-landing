<template>
  <div class="product-card">
    <div class="product-card__image">
      <img :src="product.thumbnail" alt="" />
    </div>
    <div class="product-card__info">
      <p class="product-card__info-block">
        <span>Brand: </span>{{ product.brand }}
      </p>
      <p class="product-card__info-block">
        <span>Category: </span>{{ product.category }}
      </p>
      <p class="product-card__info-block">
        <span>Description: </span>{{ product.description }}
      </p>
      <p class="product-card__info-block" :class="{out: inStock === 0}" v-html="isInStock"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',

  data () {
    return {
      inStock: this.product.stock,
      interval: Math.ceil(Math.random() * 4),
      label: '',
    }
  },

  props: {
    product: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    isInStock () {
      if (this.inStock > 0) {
        return `<strong>In stock: </strong>${this.inStock}`;
      } else {
        return '<strong>Out of stock</strong>';
      }
    }
  },

  mounted () {
    const stockDecrease = setInterval(() => {
      if (this.inStock > 0) {
        this.inStock--;
      } else {
        clearInterval(stockDecrease)
      }
    }, this.interval * 1000);
  }
}
</script>

<style lang="scss" scoped>
.product-card {
  padding: 9px 9px 37px;
  display: flex;
  flex-direction: column;
  gap: 9px;
  border: 1px solid $gray;

  &__image {
    width: 100%;

    img {
      max-width: 100%;
      min-width: 100%;
      height: 206px;
      max-height: 206px;
      object-fit: cover;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 8px;

    &-block {
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      line-height: 20px;
      max-height: 40px;

      span {
        font-weight: 600;
      }

      &.out {
        color: red;
      }
    }
  }
}
</style>
