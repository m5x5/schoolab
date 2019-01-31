// Must Have Folder
import Header from './components/main/Header.vue';
import Footer from './components/main/Footer.vue';

import LandingPage from './components/home.vue';
import LoginPage from './components/home.vue';
import HelpPage from './components/home.vue';
import BlogPage from './components/home.vue';
import ParentsPage from './components/home.vue';

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
}, {
	path: '/parents',
	components: {
		appHeader: Header,
		appLanding: ParentsPage,
		appFooter: Footer
	}
}];
