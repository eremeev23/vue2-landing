<template>
  <header class="header">
    <nav class="header__nav nav container">
      <router-link to="/">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="20" rx="4" fill="white"/>
          <path d="M5 17V3H10.5034C11.5569 3 12.4559 3.18913 13.2006 3.56738C13.9498 3.94108 14.5197 4.47201 14.9102 5.16016C15.3053 5.84375 15.5028 6.64811 15.5028 7.57324C15.5028 8.50293 15.303 9.30273 14.9034 9.97266C14.5038 10.638 13.9249 11.1484 13.1666 11.5039C12.4128 11.8594 11.5001 12.0371 10.4285 12.0371H6.74365V9.6582H9.9517C10.5148 9.6582 10.9825 9.58073 11.3548 9.42578C11.7271 9.27083 12.0041 9.03841 12.1858 8.72852C12.3719 8.41862 12.465 8.03353 12.465 7.57324C12.465 7.1084 12.3719 6.71647 12.1858 6.39746C12.0041 6.07845 11.7249 5.83691 11.348 5.67285C10.9756 5.50423 10.5057 5.41992 9.93808 5.41992H7.94923V17H5ZM12.5331 10.6289L16 17H12.7443L9.35232 10.6289H12.5331Z" fill="#111111"/>
        </svg>
      </router-link>
      <ui-button @click.native="PRODUCTS_REQUEST">
        Update Products
      </ui-button>
    </nav>
  </header>
</template>

<script>
import UiButton from '@/components/ui/UiButton.vue';
import { mapActions } from 'vuex'

export default {
  name: 'TheHeader',

  components: {
    UiButton
  },

  methods: {
    ...mapActions(['PRODUCTS_REQUEST']),
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background-color: $blue;

  &__nav {
    padding: 14px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
