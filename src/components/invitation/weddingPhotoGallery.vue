<template>
  <div class="wedding-photo-gallery">
    <div class="wedding-photo-gallery-title">
      <h2>Nuestra historia en fotos</h2>
    </div>
    <ul v-for="list in 6" :key="list">
      <li v-for="item in 9" :key="item"></li>
    </ul>
  </div>
</template>

<style lang="scss">
.wedding-photo-gallery {
  display: flex;
  flex-direction: column;

  perspective: 700px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  .wedding-photo-gallery-title {
    padding: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2em;
    box-sizing: border-box;
  }
}

ul {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0.1em;
  perspective-origin: center center;
  transform-style: preserve-3d;
  transform: rotateX(40deg);
  transition: all 0.4s;
}

ul:hover {
  transform: translateZ(100px) rotateX(0deg);
  z-index: 999;
}

ul:hover li {
  filter: grayscale(0);
}

li {
  position: absolute;
  left: 0;
  top: 0;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  transition:
    transform 0.3s,
    filter 1s;
  background: coral;
  border: none;
  filter: grayscale(0.9);
}
/*
Setup individual planes final poistion(by left top) and initial position(by transform)
*/
li:first-of-type {
  transform: none;
}
li:nth-of-type(2) {
  left: 100%;
  transform-origin: left center;
  transform: rotateY(180deg);
}
li:nth-of-type(3) {
  top: 100%;
  transform-origin: center top;
  transform: rotateX(-180deg);
}
li:nth-of-type(4) {
  left: -100%;
  transform-origin: right center;
  transform: rotateY(-180deg);
}
li:nth-of-type(5) {
  top: -100%;
  transform-origin: center bottom;
  transform: rotateX(180deg);
}
li:nth-of-type(6) {
  top: 100%;
  left: 100%;
  transform-origin: center top;
  transform: rotateX(-180deg);
}
li:nth-of-type(7) {
  top: 100%;
  left: -100%;
  transform-origin: right center;
  transform: rotateY(-180deg);
}
li:nth-of-type(8) {
  top: -100%;
  left: -100%;
  transform-origin: center bottom;
  transform: rotateX(180deg);
}
li:nth-of-type(9) {
  top: -100%;
  left: 100%;
  transform-origin: left center;
  transform: rotateY(180deg);
}
/*
Setup transition-delay, for mouseout state 
*/
li:nth-of-type(2),
li:nth-of-type(3),
li:nth-of-type(4),
li:nth-of-type(5) {
  transition-delay: 0.03s;
}
li:nth-of-type(6),
li:nth-of-type(7),
li:nth-of-type(8),
li:nth-of-type(9) {
  transition-delay: 0s;
}
ul:hover :nth-of-type(2),
ul:hover :nth-of-type(3),
ul:hover :nth-of-type(4),
ul:hover :nth-of-type(5) {
  transition-delay: 0s;
}
ul:hover :nth-of-type(6),
ul:hover :nth-of-type(7),
ul:hover :nth-of-type(8),
ul:hover :nth-of-type(9) {
  transition-delay: 0.2s;
}
/*
Setup planes final state
*/
ul:hover :nth-of-type(2),
ul:hover :nth-of-type(4),
ul:hover :nth-of-type(7),
ul:hover :nth-of-type(9) {
  transform: rotateY(0);
}
ul:hover :nth-of-type(3),
ul:hover :nth-of-type(5),
ul:hover :nth-of-type(6),
ul:hover :nth-of-type(8) {
  transform: rotateX(0);
}
/* 
Set background position
*/
ul li {
  background-size: 300% 300%;
}
li:nth-of-type(1) {
  background-position: center center;
}
li:nth-of-type(2) {
  background-position: right center;
}
li:nth-of-type(3) {
  background-position: center bottom;
}
li:nth-of-type(4) {
  background-position: left center;
}
li:nth-of-type(5) {
  background-position: center top;
}
li:nth-of-type(6) {
  background-position: right bottom;
}
li:nth-of-type(7) {
  background-position: left bottom;
}
li:nth-of-type(8) {
  background-position: left top;
}
li:nth-of-type(9) {
  background-position: right top;
}
/*
Set background image source
*/
ul:nth-of-type(1) li {
  background-image: url('/src/assets/preboda/preboda_90.jpg');
}
ul:nth-of-type(1) {
  width: 120px;
  height: 80px;
}
ul:nth-of-type(2) li {
  background-image: url('/src/assets/preboda/preboda_103.jpg');
}
ul:nth-of-type(2) {
  width: 90px;
  height: 130px;
}
ul:nth-of-type(3) li {
  background-image: url('/src/assets/preboda/preboda_121.jpg');
}
ul:nth-of-type(3) {
  width: 130px;
  height: 90px;
}
ul:nth-of-type(4) li {
  background-image: url('/src/assets/preboda/preboda_154.jpg');
}
ul:nth-of-type(4) {
  width: 120px;
  height: 80px;
}
ul:nth-of-type(5) li {
  background-image: url('/src/assets/preboda/preboda_214.jpg');
}
ul:nth-of-type(5) {
  width: 64px;
  height: 84px;
}
ul:nth-of-type(6) li {
  background-image: url('/src/assets/preboda/preboda_221.jpg');
}
ul:nth-of-type(6) {
  width: 100px;
  height: 66px;
}
/* 
Hide debug label 
*/
li {
  text-indent: 999px;
  overflow: hidden;
}
</style>
