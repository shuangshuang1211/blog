<template>
  <div class="layout">
    <!-- <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
        <g-link class="nav__link" to="/help/">Help</g-link>
        <g-link class="nav__link" to="/post/">Post</g-link>
      </nav>
    </header> -->
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div class="container px-4 px-lg-5">
            <g-link class="navbar-brand" to="/">{{ $static.metadata.siteName }}</g-link>
            <button @click="showMenu" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              菜单
              <i class="fa fa-bars"></i>
            </button>
            <div :class="'collapse navbar-collapse ' + menuClass" id="navbarResponsive">
              <ul class="navbar-nav ms-auto py-4 py-lg-0">
                  <li v-for="title in titles" :key="title.id" class="nav-item ">
                    <g-link class="nav-link px-lg-3 py-3 py-lg-4" :to="title.path" ac="">
                      <i :class="title.class + ' nav-text'" ></i>&nbsp;
                      <span class="nav-text">{{ title.name }}</span>
                    </g-link>
                  </li>
              </ul>
            </div>
        </div>
    </nav>

    <slot/>
    <!-- Footer-->
    <footer class="border-top">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
                <ul class="list-inline text-center">
                    <li class="list-inline-item">
                        <a href="#!">
                            <span class="fa-stack fa-lg">
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#!">
                            <span class="fa-stack fa-lg">
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class="fa fa-facebook-f fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#!">
                            <span class="fa-stack fa-lg">
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                    </li>
                </ul>
                <div class="small text-center text-muted fst-italic">Copyright &copy; shuangshuang 2021</div>
            </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<script>
// import { heart } from '../assets/js/heart.js'

export default {
  name: 'Layout',
  data () {
    return {
      titles: [
        {
          id: 0,
          name: '首页',
          path: '/',
          class: 'fa fa-home'
        },
        {
          id: 1,
          name: '标签',
          path: '/tags',
          class: 'fa fa-tags'
        },
        {
          id: 2,
          name: '归档',
          path: '/archives',
          class: 'fa fa-archive'
        },
        {
          id: 3,
          name: '文章',
          path: '/post',
          class: 'fa fa-bookmark'
        },
        {
          id: 4,
          name: '关于',
          path: '/about',
          class: 'fa fa-odnoklassniki'
        },
        {
          id: 5,
          name: '帮助',
          path: '/help',
          class: 'fa fa-question'
        }
      ],
      menuClass: ''
    }
  },
  methods: {
    showMenu () {
      this.menuClass = 'show'
    }
  },
  mounted () {
    // heart(window, document);
  }
}
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}
.layout {
  width: '100%';
  height: '100%';
}
.nav-text {
  font-size: 1rem
}
/*
.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

  .nav__link {
    margin-left: 20px;
  }
  .nav-transparent .github-corner {
    display: none !important;
  }

    .github-corner {
        position: absolute;
        z-index: 10;
        top: 0;
        right: 0;
        border: 0;
        transform: scale(1.1);
    }

    .github-corner svg {
      color: #0f9d58;
      fill: #fff;
      height: 64px;
      width: 64px;
    }

    .github-corner:hover .octo-arm {
      animation: a 0.56s ease-in-out;
    }

    .github-corner .octo-arm {
      animation: none;
    }
    @keyframes a {
      0%,
      to {
        transform: rotate(0);
      }
      20%,
      60% {
        transform: rotate(-25deg);
      }
      40%,
      80% {
        transform: rotate(10deg);
      }
    } */
</style>
