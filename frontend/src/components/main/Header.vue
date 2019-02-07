<template>
<nav class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/flashcard">Flashcards</router-link>
</nav>
</template>

<style lang="scss">
.navbar {
  width: 100%;
  height: 10%;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  padding: 1rem 0;

  .row {
    width: 100%;
  }

  &-logo {
    width: 5rem;
    margin: 0 auto;
  }

  &-links {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    li {
      display: inline-block;
      list-style-type: none;
      margin-right: 1rem;

      a {
        text-decoration: none;
      }
    }

    &--left {}

    &--right {}
  }
}

</style>
