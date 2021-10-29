<template>
  <Layout>
    <div class="bg-cover">
      <div class="head-content">
        <div class="text-typed">
      </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Typed from 'typed.js';

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  name: 'Home',
  mounted () {
    var typed = new Typed(".text-typed", {
      strings: ['从来没有真正的绝境, 只有心灵的迷途','Never really desperate, only the lost of the soul'],
      startDelay: 300,
      typeSpeed: 100,
      loop: true,
      backSpeed: 50,
      showCursor: true
  });
  },
}
</script>

<style>
 .bg-cover {
    width: 100%;
    height: 100vh;
    min-height: 400px;
    position: relative;
    top: 0;
    left: 0;
    background-image: url(../../static/images/banner/0.jpg);
    z-index: 1;
    opacity: 1;
    visibility: visible;
    /* position: relative; */
    display: flex;
    align-items: center;
    padding: 0;
    border: 0;
    overflow: hidden;
    background-position: center center;
    background-size: cover;
    /* transform: translateX(0px) translateX(-3592px) translateZ(0px); */
 }
 .bg-cover:after{
    content: "";
    width: inherit;
    height: inherit;
    position: absolute;
    left: 0;
    top: 0;
    background: inherit;
    filter: blur(4px);
    z-index: 2;
}
.head-content {
  width: 100%;
  height: 300px;
  z-index: 100;
  color: white;
}
.text-typed {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
}
</style>
