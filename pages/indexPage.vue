<template>
  <div class="page-index">
    <ul class="wrapper">
      <div class="sun">
        <div class="star">
          <div id="text-content">
            <h3 style="color:white">40%</h3>
            <a href="#">CPU</a>
          </div>
        </div>
      </div>
      <div class="mercury">
        <div class="planet">
          <div class="shadow">
            <div id="text-content">
              <h3 style="color:white">30%</h3>
              <a href="#">CPU</a>
            </div>
          </div>
        </div>
      </div>
      <div class="venus">
        <div class="planet">
          <div class="shadow">
            <div id="text-content">
              <h3 style="color:white">10%</h3>
              <a href="#">CPU</a>
            </div>
          </div>
        </div>
      </div>
      <div class="earth">
        <div class="planet">
          <div class="shadow">
            <div id="text-content">
              <h3 style="color:white">80%</h3>
              <a href="#">CPU</a>
            </div>
          </div>
        </div>
      </div>
      <div class="mars">
        <div class="planet">
          <div id="text-content">
            <h3 style="color:white">50%</h3>
            <a href="#">CPU</a>
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>
<script>
export default {
  name: "page-index",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.page-index {
  margin-left: 190px;
  width: 800px;
  height: 500px;
  float: left;

  @keyframes spinsun {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
  @keyframes shadow {
    0% {
      background-position: 130% 0%;
    }
    33% {
      background-position: 50% 0%;
    }
    55% {
      background-position: 0% 0%;
    }
    80% {
      background-position: -50% 0%;
    }
    100% {
      background-position: -50% 0%;
    }
  }
  @keyframes orbitmercury {
    0% {
      z-index: 2;
      transform: rotateY(0);
    }
    49% {
      z-index: 2;
    }
    50% {
      z-index: -2;
    }
    99% {
      z-index: -2;
    }
    100% {
      z-index: 2;
      transform: rotateY(360deg);
    }
  }
  @keyframes orbitvenus {
    0% {
      z-index: 3;
      transform: rotateY(0);
    }
    49% {
      z-index: 3;
    }
    50% {
      z-index: -3;
    }
    99% {
      z-index: -3;
    }
    100% {
      z-index: 3;
      transform: rotateY(360deg);
    }
  }
  @keyframes orbitearth {
    0% {
      z-index: 4;
      transform: rotateY(0);
    }
    49% {
      z-index: 4;
    }
    50% {
      z-index: -4;
    }
    99% {
      z-index: -4;
    }
    100% {
      z-index: 4;
      transform: rotateY(360deg);
    }
  }
  @keyframes orbitmars {
    0% {
      z-index: 5;
      transform: rotateY(0);
    }
    49% {
      z-index: 5;
    }
    50% {
      z-index: -5;
    }
    99% {
      z-index: -5;
    }
    100% {
      z-index: 5;
      transform: rotateY(360deg);
    }
  }
  // @keyframes orbitjupiter {
  //   0% { z-index:6; transform: rotateY(270); }
  //   49% { z-index:6; }
  //   50% { z-index:-6; }
  //   99% { z-index:-6; }
  //   100%   { z-index:6; transform: rotateY(360deg); }
  // }
  @keyframes orbitsaturn {
    0% {
      z-index: 7;
      transform: rotateY(270);
    }
    49% {
      z-index: 7;
    }
    50% {
      z-index: -7;
    }
    99% {
      z-index: -7;
    }
    100% {
      z-index: 7;
      transform: rotateY(360deg);
    }
  }
  /* Keep planet image flat */
  @keyframes anti-spin {
    from {
      transform: rotateY(0);
    }
    to {
      transform: rotateY(-360deg);
    }
  }
  @keyframes anti-spin-rings {
    from {
      transform: rotateY(0) rotateX(73deg);
    }
    to {
      transform: rotateY(-360deg) rotateX(73deg);
    }
  }

  /* scene wrapper */
  .wrapper {
    position: relative;
    margin: 0 auto;
    display: block;
    margin-top: 200px;
    perspective: 1000px;
    perspective-origin: 60% 50%;
    transform: rotate(-10deg);
  }
  .wrapper > div {
    position: relative;
    margin:-35px auto;
    transform-style: preserve-3d;
    height: 0px;
    #text-content {
      padding-top:15px;
      padding-bottom:0;
      padding-left: 15px;
    }
    a {
      text-decoration: none;
      font-size: 20px;
      color: wheat;
    }
  }
  .sun {
    width: 250px;
    position: absolute;
    top: 70px;
    z-index: 1;
    height: 125px !important;
  }
  .sun .star {
    width: 100px;
    height: 100px;
    background: url(../src/images/sun.png) no-repeat;
    background-size: cover;
    border-radius: 100px;
    margin: 0 auto;
    animation: spinsun 40s infinite linear;
    text-align: center;
  }
  .planet {
    background-size: cover;
    background-repeat: no-repeat;
    background-color: transparent;
    animation-iteration-count: infinite;
    overflow: hidden;
  }
  .shadow {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background: transparent url(../src/images/shadow.png) 0% 0% no-repeat;
    background-size: cover;
    border-radius: 100%;
  }
  .mercury {
    position: absolute;
    width: 400px;
    z-index: 2;
    animation: orbitmercury 12s infinite linear;
    top: -7.5px; /*half of planets height to keep orbits in line*/
  }
  .mercury .planet {
    width: 100px;
    height: 100px;
    background-image: url(../src/images/mercury.png);
    animation: anti-spin 12s infinite linear;
  }
  .mercury .shadow {
    animation: shadow 12s infinite linear;
  }
  .venus {
    position: absolute;
    width: 506px;
    z-index: 3;
    animation: orbitvenus 15s infinite linear;
    top: -19px;
  }
  .venus .planet {
    width: 100px;
    height: 100px;
    background-image: url(../src/images/venus.png);
    animation: anti-spin 15s infinite linear;
  }
  .venus .shadow {
    animation: shadow 15s infinite linear;
  }
  .earth {
    position: absolute;
    width: 610px;
    z-index: 4;
    animation: orbitearth 20s infinite linear;
    top: -20px;
  }
  .earth .planet {
    width: 100px;
    height: 100px;
    background-image: url(../src/images/earth.png?v=2);
    animation: anti-spin 20s infinite linear;
  }
  .earth .shadow {
    animation: shadow 20s infinite linear;
  }
  .mars {
    position: absolute;
    width: 706px;
    z-index: 5;
    animation: orbitmars 30s infinite linear;
    top: -11px;
  }
  .mars .planet {
    width: 100px;
    height: 100px;
    background-image: url(../src/images/mars.png);
    animation: anti-spin 30s infinite linear;
  }
  .mars .shadow {
    animation: shadow 30s infinite linear;
  }
}
</style>


