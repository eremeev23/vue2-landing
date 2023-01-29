<template>
  <div class="skeleton-swiper">
    <div class="skeleton-element skeleton-block"></div>
    <div class="skeleton-element skeleton-block"></div>
    <div class="skeleton-element skeleton-block"></div>
  </div>
</template>

<script>
export default {
  name: 'SkeletonSwiper'
}
</script>

<style lang="scss" scoped>
.skeleton {
  &-swiper {
    margin-bottom: 20px;
    display: flex;
    gap: 30px;
  }

  &-block {
    width: 100%;
    height: 294px;

    @media screen and (max-width: 1439px) {
      height: 272px;

      &:nth-child(3) {
        display: none;
      }
    }

    @media screen and (max-width: 1280px) {
      height: 250px;
    }

    @media screen and (max-width: 1024px) {
      height: 187px;
    }

    @media screen and (max-width: 767px) {
      height: 143px;

      &:nth-child(2) {
        display: none;
      }
    }
  }
}
</style>
