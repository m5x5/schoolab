<template>
<div class="landing">
  <div class="main-content-title">
    <h1>Schoolab</h1>
    <p>Helps students to understand and organize school.</p>
  </div>
  <img class="main-content-img-exam" src="../assets/exams.svg" alt="Exam takers">
  <img class="main-content-img-studying" src="../assets/studying.svg" alt="Person studying">
  <div class="main-content-actionbar">
    <div class="main-content-actionbar--circle main-content-actionbar--circle--purple">
      <span>ICON</span>
    </div>
    <div class="main-content-actionbar--circle main-content-actionbar--circle--yellow">
      <span>ICON</span>
    </div>
    <div class="main-content-actionbar--circle main-content-actionbar--circle--red">
      <span>ICON</span>
    </div>
    <div class="main-content-actionbar--circle main-content-actionbar--circle--blue">
      <span>ICON</span>
    </div>
    <div class="main-content-actionbar--circle main-content-actionbar--circle--green">
      <span>ICON</span>
    </div>
    <div class="main-content-actionbar--circle main-content-actionbar--circle--blue">
      <span>ICON</span>
    </div>
    <div class="main-content-actionbar--circle main-content-actionbar--circle--red">
      <span>ICON</span>
    </div>
    <div class="main-content-actionbar--circle main-content-actionbar--circle--yellow">
      <span>ICON</span>
    </div>
    <div class="main-content-actionbar--circle main-content-actionbar--circle--purple">
      <span>ICON</span>
    </div>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
// COLORS
$white: #fff;
$dark-blue: #417DDD;
$light-blue: #47BCDA;
$bright-green: #47da84;
$blue-green: #47DA84;

$circle-blue: #47BCDA;
$circle-purple: #D778FF;
$circle-red: #DD4141;
$circle-yellow: #DDD841;
$circle-green: #47DA84;

html {
    height: 100%;
}

body {
    height: 100vh;
    background: rgb(65,125,221);
    background: linear-gradient(188deg, rgba(65,125,221,1) 0%, rgba(69,185,163,1) 100%);
    font-family: 'Montserrat';
    overflow: hidden;
}

.main-content {
    height: 100vh;
    position: relative;
    &-title {
        position: relative;
        top: 38%;
        text-align: center;
        h1 {
            font-size: 4rem;
            font-weight: 600;
            color: $white;
        }
        p {
            font-size: 1.5rem;
            width: 25%;
            margin: 0 auto;
            color: $white;
        }
    }

    &-img {
        &-exam {
            position: absolute;
            left: 10%;
            top: 20%;

        }

        &-studying {
            right: 10%;
            position: absolute;
            top: 40%;
        }
    }

    &-actionbar {
        position: absolute;
        bottom: 7.5vh;
        background-color: $white;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 100px;
        display: flex;
        justify-content: center;
        flex-direction: row;

        &--circle {
            width: 55px;
            height: 55px;
            background-color: red;
            position: relative;
            border-radius: 100px;
            margin: 10px;

            span {
                position: relative;
                display: block;
                top: 50%;
                transform: translateY(-50%);
                font-weight: 500;
                color: white;
            }

            &--center {
                width: 7rem;
                height: 7rem;
            }

            &--red {
                background-color: $circle-red;
            }
            &--blue {
                background-color: $circle-blue;
            }
            &--yellow {
                background-color: $circle-yellow;
            }
            &--green {
                background-color: $circle-green;
            }
            &--purple {
                background-color: $circle-purple;
            }
        }
    }
}
</style>
