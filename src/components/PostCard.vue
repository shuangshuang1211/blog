<template>
  <div
    :class="'card post-card ' + classProp"
  >
    <!-- :style="`background-image: url(http://113.31.117.233:1337${post.node.cover.url})`" -->
    <div class="img-container">
      <g-image :src="post.cover.url" class="post-img"></g-image>
      <g-link class="text-white post-title" :to="'/post/' + post.id">{{ post.title }}</g-link>
    </div>
    <div class="card-action">
      <div class="post-info">
          <span class="">
              <i class="fa fa-clock fa-fw"></i>
              {{ post.created_at | date('MMM DD, YYYY') }}
          </span>
          <span class="publish-author">
              <i class="fa fa-bookmark fa-fw icon-category"></i>
              <a href="/categories/%E8%BD%AF%E4%BB%B6%E8%AE%BE%E8%AE%A1/" class="post-category">
              软件设计
              </a>
          </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: ['post', 'classProp']
}
</script>

<style>

  .card {
    border-radius: 10px;
    box-shadow: 0 15px 35px rgb(50 50 93 / 10%), 0 5px 15px rgb(0 0 0 / 7%) !important;
  }
  .post-card {
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
  }
</style>