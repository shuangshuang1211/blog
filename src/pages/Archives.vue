<template>
  <Layout>
    <header class="masthead header4-box" ref="header">
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
    <!-- content -->
    <ContentBox>
      功能正在努力完善中。。。
    </ContentBox>
  </Layout>
</template>

<script>
// import Header from '../components/Header'

export default {
  metaInfo: {
    title: 'Archives'
  },
  name: 'Archives',
  components: {
    // Header
  }
}
</script>

<style>
  header.header4-box {
    background-image: url(../../static/images/banner/4.jpg);
  }
</style>
