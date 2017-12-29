<template>
  <div id="app">
    <notifications position="top center"/>

    <router-view name="home-section"></router-view>
    <router-view name="vocabulary-section"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">

</style>
