<template>
  <div class="navigation">
    <div class="navigation-content container d-flex justify-content-center">
      <div class="navigation-content-buttons d-flex align-items-center">
        <div class="buttons-bg">

        </div>
        <div class="buttons-circlebg">

        </div>
        <div class="buttons">

          <button class="login-button">
            Login
          </button>
          <img class="logo" src="../../assets/logo.png" alt="">
          <button class="register-button">
            Register
          </button>
        </div>
      </div>
    </div>
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
    &-background {
        width: 100%;
        position: absolute;
        z-index: 100;
    }

    &-content {
        height: 100%;
        margin: 0 auto;
        &-buttons {
            position: relative;

            .buttons {
                position: relative;
                z-index: 101;
                &-bg {
                    width: 107%;
                    height: 43%;
                    position: absolute;
                    z-index: 50;
                    left: -4%;
                    top: 2.5rem;
                    background: $light-blue;
                    border-radius: 50px;
                }

                &-circlebg {
                    width: 21%;
                    height: 67%;
                    position: absolute;
                    z-index: 50;
                    left: 50%;
                    transform: translateX(-60%);
                    top: 1.45rem;
                    background: $light-blue;
                    border-radius: 50px;
                }
            }
        }
    }

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
