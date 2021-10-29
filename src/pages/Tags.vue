<template>
  <Layout>
    <header class="masthead header3-box" ref="header">
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
    <ContentBox>
      <div class="card title-box">
        <div class="tag-title center-align">
          <i class="fa fa-tags"></i>&nbsp;&nbsp;文章标签
        </div>
        <div class="tag-chips" >
          <g-link v-for="edge in $page.allTags.edges" :key="edge.node.id" :to="'/tags' + edge.node.name" >
            <span class="chip center-align waves-effect waves-light chip-default" :style="'background-color:' + (edge.node.color || '#F9EBEA') + ';'">
              {{ edge.node.name }} &nbsp;<span class="">{{ edge.node.posts.length }}</span>
            </span>
          </g-link>
        </div>
      </div>
      <div class="sub-content-box container">
        <div class="row container justify-content-between">
          <PostCard
            v-for="post in $page.allPosts.edges"
            :key="post.node.id"
            :post="post.node"
            :classProp="'col-xxl-6 col-4'"
          />

        </div>

      </div>
    </ContentBox>
    <canvas width="1359" height="1336" style="opacity: 0.6; position: fixed; top: 0px; left: 0px; z-index: -1; width: 100%; height: 100%; pointer-events: none;"></canvas>
  </Layout>
</template>

<page-query>
  query {
    allTags: allStrapiTag {
      edges {
        node {
          id
          name
          color
          posts {
            id
            title
          }
        }
      }
    }
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
  metaInfo: {
    title: 'Tags'
  },
  name: 'Tags',
  components: {
    // Header
    PostCard
  }
}
</script>

<style>
  header.header3-box {
    background-image: url(../../static/images/banner/3.jpg);
  }
  .card {
    border-radius: 10px;
    box-shadow: 0 15px 35px rgb(50 50 93 / 10%), 0 5px 15px rgb(0 0 0 / 7%) !important;
  }
  .title-box {
    width: 70%;
    min-height: 300px;
    margin-top: -40px;
    padding: 32px;
  }
  .center-align {
    text-align: center;
  }
  .tag-chips {
    margin: 1rem auto 0.5rem;
    max-width: 850px;
    text-align: center;
  }
  .chip {
    margin: 10px 10px;
    padding: 19px 14px;
    display: inline-flex;
    line-height: 0;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 3px 5px rgb(0 0 0 / 12%);
    z-index: 0;
  }
  .sub-content-box {
    width: 70%;
    min-height: 900px;
    padding: 32px;
    display: flex;
    flex-flow: row wrap;
  }
  /* .post-card {
    flex: 1;
    height: 300px;
    color: aliceblue;
    margin: 8px;
    padding: 0px;
  }
  .post-img {
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 0px 0px;
  }
  .img-container {
    width: 100%;
    height: 80%;
    position: relative;
  }
  .post-title {
    font-weight: 300;
    font-size: 24px;
    position: absolute;
    color: #fff;
    bottom: 0;
    left: 0;
    max-width: 100%;
    padding: 24px;
  }
  .card-action {
    height: 20%;
    position: relative;
  }
  .post-info {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    color: cadetblue;
    width: 100%;
  } */
</style>
