<template>
<div id="app">
  <router-view></router-view>
  <router-view name="appHeader"></router-view>
  <router-view name="appLanding"></router-view>
  <router-view name="appFooter"></router-view>
</div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
@import './scss/main.scss';
</style>
