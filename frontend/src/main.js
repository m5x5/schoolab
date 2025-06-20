import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import {
	routes
} from './routes';
Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: routes
});

onload = () => {
	new Vue({
		render: h => h(App),
		router: router
	}).$mount('#app');
};
