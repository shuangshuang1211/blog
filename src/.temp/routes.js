const c1 = () => import(/* webpackChunkName: "page--src--templates--post-content-vue" */ "/Users/test/learn/myGitHub/vue_prj/blog/src/templates/PostContent.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--tags-vue" */ "/Users/test/learn/myGitHub/vue_prj/blog/src/pages/Tags.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--post-vue" */ "/Users/test/learn/myGitHub/vue_prj/blog/src/pages/Post.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--help-vue" */ "/Users/test/learn/myGitHub/vue_prj/blog/src/pages/Help.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--categories-vue" */ "/Users/test/learn/myGitHub/vue_prj/blog/src/pages/Categories.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/test/learn/myGitHub/vue_prj/blog/src/pages/About.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--archives-vue" */ "/Users/test/learn/myGitHub/vue_prj/blog/src/pages/Archives.vue")
const c8 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/test/learn/myGitHub/vue_prj/blog/node_modules/gridsome/app/pages/404.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/test/learn/myGitHub/vue_prj/blog/src/pages/Index.vue")

export default [
  {
    path: "/post/:id/",
    component: c1
  },
  {
    path: "/tags/",
    component: c2
  },
  {
    path: "/post/",
    component: c3
  },
  {
    path: "/help/",
    component: c4
  },
  {
    path: "/categories/",
    component: c5
  },
  {
    path: "/about/",
    component: c6
  },
  {
    path: "/archives/",
    component: c7
  },
  {
    name: "404",
    path: "/404/",
    component: c8
  },
  {
    name: "home",
    path: "/",
    component: c9
  },
  {
    name: "*",
    path: "*",
    component: c8
  }
]
