<template>
<div class="landing">
  <div class="main-content-title">
    <h1>Schoolab</h1>
    <p>Helps students with school using modern technologies.</p>
  </div>
  <img class="main-content-img-exam" src="../assets/exams.svg" alt="Exam takers">
  <img class="main-content-img-studying" src="../assets/studying.svg" alt="Person studying">

</div>
</div>
</template>

<style lang="scss">
@import './../scss/main.scss';
// COLORS
$white: #fff;
$dark-blue: #417DDD;
$light-blue: #93b5ec;
$bright-green: #47da84;
$blue-green: #69bebe;

html {
    height: 100%;
}

body {
    height: 100vh;
    background: rgb(65,125,221);
    background: linear-gradient(172deg, $dark-blue 50%, $bright-green 120%);
    font-family: 'Montserrat';
    overflow: hidden;
}

.main-content {
    height: 100vh;
    position: relative;
    &-title {
        position: relative;
        top: 15vh;
        text-align: center;
        h1 {
            font-size: 4rem;
            font-weight: 600;
            color: $white;
            line-height: 4.25rem;
        }
        p {
            font-size: 1.5rem;
            width: 30%;
            margin: 0 auto;
            color: $white;
        }
    }

    &-img {
        &-exam {
            position: absolute;
            left: 7vw;
            top: 26vh;

        }

        &-studying {
            right: 2vw;
            position: absolute;
            top: 44vh;
        }
    }


}
</style>
