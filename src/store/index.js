import Vue from 'vue';
import Vuex from 'vuex';

import listCourses from '../assets/courses.json';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		listCourses,
		listCoursesCart: [],
		filterListCourses: listCourses,
	},
	mutations: {
		addCourseToCart(state, course) {
			//obtener los ids existentes y guardarlos en un nuevo array(Ids)
			let Ids = state.listCoursesCart.map((courseCart) => courseCart.id);
			//Comprueba si el array Ids contiene el que se quiere agregar
			if (Ids.includes(course.id)) {
				console.log('repetido');
			} else {
				//Agrega el curso al carrito
				state.listCoursesCart.push(course);
			}
		},
		deleteCourseFromCart(state, course) {
			state.listCoursesCart = state.listCoursesCart.filter(
				(item) => item.id !== course.id
			);
		},
		filter(state, word) {
			state.filterListCourses = state.listCourses.filter((item) =>
				item.title.toLowerCase().includes(word.toLowerCase())
			);
		},
		changeFavStatus(state, course){
			course.fav_status = String(! JSON.parse(course.fav_status));
		}
	},
	actions: {
		addCourseToCartAction(context, course) {
			context.commit('addCourseToCart', course);
		},
		deleteCourseFromCartAction(context, course) {
			context.commit('deleteCourseFromCart', course);
		},
		filterAction(context, word) {
			context.commit('filter', word);
		},
		changeFavStatusAction(context, course) {
			context.commit('changeFavStatus', course);
		},

	},
	getters: {
		courses(state) {
			return state.listCourses;
		},
		cart(state) {
			return state.listCoursesCart;
		},
		cartCount(state) {
			return state.listCoursesCart.length;
		},
		coursesFiltered(state) {
			return state.filterListCourses;
		},
	},
});
