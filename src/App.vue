<template>
  <div id="app">
    <TheHeader />
    <router-view/>
  </div>
</template>

<script>
import TheHeader from '@/components/base/TheHeader';

export default {
  components: {
    TheHeader
  },
}
</script>
<style lang="scss">
img {
  height: 240px;
  width: auto;
}
</style>
