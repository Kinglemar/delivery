<template>
  <div class="h-[100vh] w-[100vw] bg-black flex flex-col justify-center items-center">
    <svg
      width="150px"
      height="179px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="d-spinner d-spinner__four"
        d="M144.421372,121.923755 C143.963266,123.384111 143.471366,124.821563 142.945674,126.236112 C138.856723,137.238783 133.098899,146.60351 125.672029,154.330576 C118.245158,162.057643 109.358082,167.978838 99.0105324,172.094341 C89.2149248,175.990321 78.4098994,178.04219 66.5951642,178.25 L0,178.25 L144.421372,121.923755 L144.421372,121.923755 Z"
      />
      <path
        class="d-spinner d-spinner__three"
        d="M149.033408,92.6053108 C148.756405,103.232477 147.219069,113.005232 144.421372,121.923755 L0,178.25 L139.531816,44.0158418 C140.776016,46.5834381 141.913968,49.2553065 142.945674,52.0314515 C146.681818,62.0847774 148.711047,73.2598899 149.033408,85.5570717 L149.033408,92.6053108 L149.033408,92.6053108 Z"
      />
      <path
        class="d-spinner d-spinner__two"
        d="M80.3248924,1.15770478 C86.9155266,2.16812827 93.1440524,3.83996395 99.0105324,6.17322306 C109.358082,10.2887257 118.245158,16.2099212 125.672029,23.9369874 C131.224984,29.7143944 135.844889,36.4073068 139.531816,44.0158418 L0,178.25 L80.3248924,1.15770478 L80.3248924,1.15770478 Z"
      />
      <path
        class="d-spinner d-spinner__one"
        d="M32.2942065,0 L64.5884131,0 C70.0451992,0 75.290683,0.385899921 80.3248924,1.15770478 L0,178.25 L0,0 L32.2942065,0 L32.2942065,0 Z"
      />
    </svg>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.d-spinner {
  $color-one: #2d6a4f;
  $color-two: #40916c;
  $color-three: #52b788;
  $color-four: #74c69d;
  animation-duration: 2.4s;
  animation-timing-function: cubic-bezier(0, 1, 0.3, 1);
  animation-direction: normal;
  animation-iteration-count: infinite;
  transform-origin: left bottom;
  &.d-spinner__one   { animation-name: dSpinnerOne; fill: $color-one; }
  &.d-spinner__two   { animation-name: dSpinnerTwo; fill: $color-two; }
  &.d-spinner__three { animation-name: dSpinnerThree; fill: $color-three; }
  &.d-spinner__four  { animation-name: dSpinnerFour; fill: $color-four; }




  @keyframes dSpinnerOne {
    0% {
      opacity: 0;
      fill: lighten($color-one, 20%);
      transform: rotateZ(-65deg) scale(0.6);
    }
    7% {
      opacity: 1;
      fill: lighten($color-one, 20%);
      transform: rotateZ(0) scale(1.0);
    }
    57% {
      animation-timing-function: cubic-bezier(0, 0, 0, 1);
      fill: $color-one;
    }
    74% {
      opacity: 1;
      transform: rotateZ(0) scale(1.0);
      animation-timing-function: cubic-bezier(0, 0, 1, 0);
    }
    83% {
      opacity: 0;
      transform: rotateZ(45deg) scale(0.61);
    }
    100% {
      opacity: 0;
      transform: rotateZ(45deg) scale(0.61);
    }
  }

  @keyframes dSpinnerTwo {
    0% {
      opacity: 0;
      transform: rotateZ(-65deg) scale(0.6);
    }
    3% {
      opacity: 0;
      fill: lighten($color-two, 20%);
      transform: rotateZ(-65deg) scale(0.6);
    }
    10% {
      opacity: 1;
      fill: lighten($color-two, 20%);
      transform: rotateZ(0) scale(1.0);
    }
    60% {
      animation-timing-function: cubic-bezier(0, 0, 0, 1);
      fill: $color-two;
    }
    71% {
      opacity: 1;
      transform: rotateZ(0) scale(1.0);
      animation-timing-function: cubic-bezier(0, 0, 1, 0);

    }
    79% {
      opacity: 0;
      transform: rotateZ(45deg) scale(0.61);
    }
    100% {
      opacity: 0;
      transform: rotateZ(45deg) scale(0.61);
    }
  }

  @keyframes dSpinnerThree {
    0% {
      opacity: 0;
      transform: rotateZ(-65deg) scale(0.6);
    }
    6% {
      opacity: 0;
      fill: lighten($color-three, 20%);
      transform: rotateZ(-65deg) scale(0.6);
    }
    13% {
      opacity: 1;
      fill: lighten($color-three, 20%);
      transform: rotateZ(0) scale(1.0);
    }
    63% {
      fill: $color-three;
      animation-timing-function: cubic-bezier(0, 0, 0, 1);

    }
    68% {
      opacity: 1;
      transform: rotateZ(0) scale(1.0);
      animation-timing-function: cubic-bezier(0, 0, 1, 0);

    }
    76% {
      opacity: 0;
      transform: rotateZ(45deg) scale(0.61);
    }
    100% {
      opacity: 0;
      transform: rotateZ(45deg) scale(0.61);
    }
  }

  @keyframes dSpinnerFour {
    0% {
      opacity: 0;
      transform: rotateZ(-65deg) scale(0.6);
    }
    9% {
      opacity: 0;
      fill: lighten($color-four, 20%);
      transform: rotateZ(-65deg) scale(0.6);
    }
    16% {
      opacity: 1;
      fill: lighten($color-four, 20%);
      transform: rotateZ(0) scale(1.0);
    }
    64% {
      fill: $color-four;
      animation-timing-function: cubic-bezier(0, 0, 0, 1);

    }
    65% {
      opacity: 1;
      transform: rotateZ(0) scale(1.0);
      animation-timing-function: cubic-bezier(0, 0, 1, 0);

    }
    73% {
      opacity: 0;
      transform: rotateZ(45deg) scale(0.61);
    }
    100% {
      opacity: 0;
      transform: rotateZ(45deg) scale(0.61);
    }
  }

}

.gradient-primary {
  background-color: #3B2F63;
  background-image: -webkit-radial-gradient(0% bottom,   rgba(118, 72, 160, 0.7) 0%, rgba(118, 72, 160, 0) 60%), -webkit-radial-gradient(90% bottom,   #523f8c 0%, rgba(82, 63, 140, 0) 40%), -webkit-radial-gradient(50% top,   rgba(84, 90, 182, 0.6) 0%, rgba(84, 90, 182, 0) 75%), -webkit-radial-gradient(right top,   #794aa2 0%, rgba(121, 74, 162, 0) 57%);
  background-image: radial-gradient(  at 0% bottom, rgba(118, 72, 160, 0.7) 0%, rgba(118, 72, 160, 0) 60%), radial-gradient(  at 90% bottom, #523f8c 0%, rgba(82, 63, 140, 0) 40%), radial-gradient(  at 50% top, rgba(84, 90, 182, 0.6) 0%, rgba(84, 90, 182, 0) 75%), radial-gradient(  at right top, #794aa2 0%, rgba(121, 74, 162, 0) 57%);
  background-size: auto, auto, 100% 1000px, 100% 1000px;
  background-repeat: no-repeat; }
</style>
