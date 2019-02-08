<template>
<div>
  <div class="landing">
    <div class="header">
      <h1 class="header-title">Login</h1>
    </div>
  </div>
  <form class="form" action="index.html" method="post">
    <label for="username">Username</label>
    <input type="text" name="username" placeholder="Enter your username" v-model="username"><br>
    <label for="password">Password</label>
    <input type="password" name="password" placeholder="Enter your password">
    <input type="submit" value="Submit" @click="submit">
  </form>
</div>
</template>
<script>
/* global axios */
export default {
  name: 'login',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: '',
    }
  },
  methods: {
    submit(e) {
      e.preventDefault();
      axios.defaults.baseURL = 'http://localhost:3050';
      axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
      axios.post('/api/login').then(alert).catch(alert)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
