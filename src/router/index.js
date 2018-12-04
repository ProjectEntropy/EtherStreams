import Vue from 'vue'
import Router from 'vue-router'
import Stream from '@/components/Stream'
import Streams from '@/components/Streams'
import EthVideo from '@/components/EthVideo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Streams',
      component: Streams
    },
    {
      path: '/watch/:magnet',
      name: 'watch',
      component: EthVideo,
      props: true
    },
    {
      path: '/profile/:address',
      name: 'profile',
      component: EthVideo,
      props: true
    },
    {
      path: '/stream/:address',
      name: 'stream',
      component: Stream,
      props: true
    }

  ]
})
