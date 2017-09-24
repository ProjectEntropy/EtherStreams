import Vue from 'vue'
import Router from 'vue-router'
import VideoList from '@/components/VideoList'

import EthVideo from '@/components/EthVideo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VideoList',
      component: VideoList
    },
    {
      path: '/watch/:magnet',
      name: 'watch',
      component: EthVideo,
      props: true
    }
  ]
})
