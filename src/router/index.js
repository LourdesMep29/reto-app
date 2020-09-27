import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Playlist from '../components/Playlist.vue';
import Player from '../components/Player.vue';
import Songbook from "../components/Songbook.vue";
import SearchSong from '../components/SearchSong.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/playlist',
      name: 'Playlist',
      component: Playlist,
    },
    {
      path: '/player',
      name: 'player',
      component: Player,
    },
    {
      path: '/songbook',
      name: 'Songbook',
      component: Songbook, 
    },
    {
      path: '/search',
      name: 'SearchSong',
      component: SearchSong,
    },

  ],
});

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
