import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import Singers from './components/Singers.vue'
import Songs from './components/Songs.vue'
import AddSinger from './components/AddSinger.vue'
import AddSong from './components/AddSong.vue'


Vue.use(BootstrapVue);
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

const routes = [
	{ path: '/', component: Singers},
	{ path: '/songs/:singer_id', component: Songs},
	{ path: '/add-singer', component: AddSinger},
	{ path: '/add-song/:singer_id', component: AddSong},
];

const router = new VueRouter({
	routes,
	mode: 'history'
});

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
