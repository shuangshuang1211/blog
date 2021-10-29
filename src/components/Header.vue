<template>
  <header class="masthead header-box" ref="header">
      <!-- :style="`background-image: url(${img})`" -->
    <div class="container position-relative px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="site-heading">
            <h1>ShuangShuang</h1>
            <span class="subheading">学海无涯苦作舟</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
// import Typed from 'typed.js';

export default {
  name: 'Header',
  props: {
    img: String,
  },
  mounted () {
  },
}
</script>

<style>
  /* .subheading  {
  } */
  header.header-box {
    background-image: url(../../static/images/banner/5.jpg);
  }
</style>