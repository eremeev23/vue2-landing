<template>
  <button class="ui-button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'UiButton'
}
</script>

<style lang="scss" scoped>
.ui-button {
  padding: .5rem 1rem;
  font-size: 12px;
  background-color: #fff;
  border-radius: 100px;
  font-weight: 600;
}
</style>
