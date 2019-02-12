<template>
  <div class="actionbar">
    <div class="actionbar--circle actionbar--circle--1">
      <span class="mdi mdi-settings-outline"></span>
    </div>
    <div class="actionbar--circle actionbar--circle--2">
      <span class="mdi mdi-table"></span>
    </div>
    <div class="actionbar--circle actionbar--circle--3">
      <span class="mdi mdi-cards-outline"></span>
    </div>
    <div class="actionbar--circle actionbar--circle--4">
      <span class="mdi mdi-help"></span>
    </div>
    <div class="actionbar--circle actionbar--circle--5">
      <span class="mdi mdi-home-outline"></span>
    </div>
    <div class="actionbar--circle actionbar--circle--6">
      <span class="mdi mdi-school"></span>
    </div>
    <div class="actionbar--circle actionbar--circle--7">
      <span class="mdi mdi-account-outline"></span>
    </div>
    <div class="actionbar--circle actionbar--circle--8">
      <span class="mdi mdi-help"></span>
    </div>
    <div class="actionbar--circle actionbar--circle--9">
      <span class="mdi mdi-help"></span>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
$circle-1: #417DDD;
$circle-2: #428CCF;
$circle-3: #4397C4;
$circle-4: #43A2BA;
$circle-5: #44ADAE;
$circle-6: #44B8A4;
$circle-7: #46C29B;
$circle-8: #46CD90;
$circle-9: #47DA84;

$normal-shadow: 3px 3px 6px 0 hsla(0, 0, 0,0.16);

$white: #fff;

.actionbar {
    position: absolute;
    bottom: 6.5vh;
    background-color: $white;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 100px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    height: 4.5rem;
    box-shadow: $normal-shadow;


    &--circle {
        width: 55px;
        height: 55px;
        position: relative;
        border-radius: 100px;
        margin: 10px;
        box-shadow: $normal-shadow;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .mdi {
          font-size: 2rem;
        }
        span {color: white;}

        &--center {
            width: 7rem;
            height: 7rem;
        }

        &--1 {
            background-color: $circle-1;
        }
        &--2 {
            background-color: $circle-2;
        }
        &--3 {
            background-color: $circle-3;
        }
        &--4 {
            background-color: $circle-4;
        }
        &--5 {
            background-color: $circle-5;
        }
        &--6 {
            background-color: $circle-6;
        }
        &--7 {
            background-color: $circle-7;
        }
        &--8 {
            background-color: $circle-8;
        }
        &--9 {
            background-color: $circle-9;
        }
        &--current {
          border: 1.5rem solid white;
          margin-top: -0.75rem;
        }
    }
}
</style>
