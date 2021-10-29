<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead header7-box" ref="header">
      <!-- :style="`background-image: url(${img})`" -->
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1></h1>
              <span class="subheading"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div>
      <div class="row container justify-content-between">
        <PostCard
          v-for="post in $page.allPosts.edges"
          :key="post.node.id"
          :post="post.node"
          :classProp="'col-xxl-6 col-3'"
        />
      </div>
      <!-- <ul>
        <li v-for="edge in $page.allPost.edges" :key="edge.node.id">
          <g-link :to="`/post/${edge.node.id}`">path: {{ edge.node.path }} - {{ edge.node.id }} - {{ edge.node.title }}</g-link>
        </li>
      </ul> -->
    </div>
  </Layout>
</template>
<page-query>
  query {
    allPosts: allStrapiPost {
      edges {
        node {
          id
          content
          title
          created_at
          cover {
            name
            url
          }
        }
      }
  }
}
</page-query>

<script>
import PostCard from '../components/PostCard'

export default {
  name: 'Post',
  metaInfo () {
    return {
      title: 'PostTiltle'
    }
  },
  components: {
    // Header
    PostCard
  }
}
</script>

<style>
 header.header7-box {
    background-image: url(../../static/images/featureimages/0.jpg);
  }
</style>