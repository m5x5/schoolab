<template>
<div class="navigation">
  <div class="container">
    <button class="login-button">
      Login
    </button>
    <img class="logo" src="../../assets/logo.png" alt="">
    <button class="register-button">
      Register
    </button>
  </div>
</div>
</template>

<style lang="scss" scoped>
$bright-green: #47da84;
$dark-blue: #417DDD;
$normal-shadow: 3px 3px 6px 0 hsla(0, 0, 0,0.16);
button {
  font-family: 'Montserrat', sans-serif;
}

button:active, button:hover {
  outline:none;
}
.navigation {
    width: 100%;
    height: 5rem;
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .container {
        background-color: white;
        border-radius: 2.5rem;
        height: 4.75rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 1rem 0 1rem;
        box-shadow: $normal-shadow;
    }

    .logo {
        background-color: white;
        border: solid white 1rem;
        border-radius: 100vmax;
    }

    .login-button {
        border: none;
        color: white;
        padding: 10px 20px;
        font-size: 1.6rem;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        margin: 2px 10px 2px 4px;
        cursor: pointer;
        border-radius: 48px;
        font-weight: 600;
        background-color: $dark-blue;
        width: 9.5rem;
        box-shadow: $normal-shadow;
    }

    .register-button {
      border: none;
      color: white;
      padding: 10px 10px;
      font-size: 1.6rem;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      margin: 2px 4px 2px 10px;
      cursor: pointer;
      border-radius: 48px;
      font-weight: 600;
      width: 9.5rem;
      box-shadow: $normal-shadow;
      background-color: $bright-green;
    }
}
</style>
