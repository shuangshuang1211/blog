// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
// import '@fortawesome/fontawesome-free/css/all.min.css'

import './assets/css/index.css'
import './assets/css/styles.css'
import './assets/js/heart.js'

import dayjs from 'dayjs'

import DefaultLayout from '~/layouts/Default.vue'
import ContentBox from '~/layouts/ContentBox.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('ContentBox', ContentBox)
  Vue.filter('date', (value, format = 'YYYY-MM-DD HH:mm:ss') => {
    return dayjs(value).format(format)
  })
}
