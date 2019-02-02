// Must Have Folder
import Header from './components/main/Header.vue';
import Footer from './components/main/Footer.vue';

import LandingPage from './components/Home.vue';
import LoginPage from './components/Login.vue';
import HelpPage from './components/Home.vue';
import BlogPage from './components/Home.vue';
import ParentsPage from './components/Home.vue';

export const routes = [{
	path: '/',
	components: {
		appHeader: Header,
		appLanding: LandingPage,
		appFooter: Footer
	}
}, {
	path: '/login',
	components: {
		appHeader: Header,
		appLanding: LoginPage,
		appFooter: Footer
	}
}, {
	path: '/help',
	components: {
		appHeader: Header,
		appLanding: HelpPage,
		appFooter: Footer
	}
}, {
	path: '/blog',
	components: {
		appHeader: Header,
		appLanding: BlogPage,
		appFooter: Footer
	}
}];
