<template>
  <Layout>
    <header class="masthead header7-box" ref="header">
      <!-- :style="`background-image: url(${img})`" -->
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>慎思 慎行</h1>
              <span class="subheading">学海无涯苦作舟</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="">
      <div class="title post-content"><h1 >{{ $page.post.title }}</h1></div>
      <div class="content-box" v-html="this.body" >
    </div>
    </div>
  </Layout>
</template>
<page-query>
  query ($id: ID!) {
    post: strapiPost (id: $id) {
      id
      content
      created_at
      title
      cover {
        name
        url
      }
    }
  }
</page-query>
<script>
import MarkdownIt from 'markdown-it'

export default {
  name: 'PostContent',
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  },
  computed: {
    body: function () {
      const md = new MarkdownIt()
      return md.render(this.$page.post.content || '')
    }
  }
}
</script>

<style>
  header.header7-box {
    background-image: url(../../static/images/featureimages/0.jpg);
  }
  .post-content {
    padding: 16px;
    display: flex;
    justify-content: center;
  }
  .title {
    width: 100%;
  }
  .content-box {
    width: 80%;
    padding-left: 150px;
    /* text-align: center; */
  }
</style>