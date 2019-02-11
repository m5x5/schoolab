<template>
<div class="navigation">
  <button class="login-button">
    Login
  </button>
  <img class="logo" src="../../assets/logo.png" alt="">
  <button class="register-button">
    Register
  </button>
</div>
</template>

<style lang="scss">
$white: #fff;
$dark-blue: #417DDD;
$light-blue: #93b5ec;
$bright-green: #47da84;
$blue-green: #69bebe;

$circle-blue: #4ebdd8;
$circle-purple: #afa4e3;
$circle-red: #c86463;
$circle-yellow: #afc58b;
$circle-green: #47da84;

.navigation {
    width: 100%;
    height: 10rem;
    position: fixed;
    margin-top: 2rem;
    position: absolute;
    left: 50%;
    transform: translate(-50%);

    .logo {
        margin-right: 2rem;
        margin-left: 3rem;
    }

    .login-button {
        border: none;
        color: white;
        padding: 5px 40px;
        font-size: 1.5rem;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 24px;
        font-weight: 700;
        background-color: $dark-blue;
    }
    .register-button {
        border: none;
        color: white;
        padding: 5px 40px;
        font-size: 1.5rem;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 24px;
        font-weight: 700;
        background-color: $bright-green;

    }
}
</style>
