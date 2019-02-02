<template>
<div>
  <div class="landing">
    <div class="header">
      <h1 class="header-title">Login</h1>
    </div>
  </div>
  <form class="form" action="index.html" method="post">
    <label for="username">Username</label>
    <input type="text" name="username" placeholder="Enter your username"><br>
    <label for="password">Password</label>
    <input type="password" name="password" placeholder="Enter your password">
  </form>
</div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
