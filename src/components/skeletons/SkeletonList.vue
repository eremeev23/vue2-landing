<template>
  <div class="skeleton-list products-list">
    <div
      class="skeleton-list__item"
      v-for="i in 12"
      :key="i"
    >
      <div class="skeleton-list__item-img skeleton-element"></div>
      <div class="skeleton-list__item-row">
        <div class="skeleton-element skeleton-list__item-text"></div>
        <div class="skeleton-element skeleton-list__item-text"></div>
      </div>
      <div class="skeleton-list__item-row">
        <div class="skeleton-element skeleton-list__item-text"></div>
        <div class="skeleton-element skeleton-list__item-text"></div>
      </div>
      <div class="skeleton-list__item-row">
        <div class="skeleton-element skeleton-list__item-text"></div>
        <div class="skeleton-element skeleton-list__item-text"></div>
      </div>
      <div class="skeleton-list__item-row">
        <div class="skeleton-element skeleton-list__item-text"></div>
        <div class="skeleton-element skeleton-list__item-text"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkeletonList'
}
</script>

<style lang="scss" scoped>
.skeleton {
  &-list {
    &__item {
      height: 378px;
      padding: 9px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      border: 1px solid $gray;

      &-img {
        margin-bottom: 1px;
        width: 100%;
        height: 206px;
      }

      &-row {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 0 6px;
      }

      &-text {
        width: 100%;
        height: 22px;
        border-radius: 30px;
      }
    }
  }
}
</style>
