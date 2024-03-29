import { createStore } from 'vuex'

import listCourses from '@/assets/courses.json'

const store = createStore({
	state() {
		return {
			listCourses,
			filtered: listCourses,
			favCoursesID: [1, 4, 5],
			recentCoursesID: [6, 2],
			userCoursesID: [],
			cart: [],
		}
	},
	mutations: {
		filterCourses(state, word) {
			state.filtered = state.listCourses.filter(
				(item) =>
					item.title.toLowerCase().includes(word.toLowerCase()) ||
					item.teacher.toLowerCase().includes(word.toLowerCase())
			)
		},
		addCourseToCart(state, courseID) {
			if (!state.cart.includes(courseID)) state.cart.push(courseID)
		},
		deleteItemFromCart(state, courseID) {
			state.cart.splice(state.cart.indexOf(courseID), 1)
		},
		changeFavStatus(state, courseID) {
			let index = state.favCoursesID.indexOf(courseID)
			if (index > -1) {
				state.favCoursesID.splice(index, 1)
			} else {
				state.favCoursesID.push(courseID)
			}
		},
	},
	getters: {
		courses(state) {
			return state.listCourses
		},
		filteredCourses(state) {
			return state.filtered
		},
		favCourses(state) {
			let fav = []
			state.favCoursesID.forEach((id) => {
				fav.push(state.listCourses.find((course) => course.id == id))
			})
			return fav
		},
		recentCourses(state) {
			let recent = []
			state.recentCoursesID.forEach((id) => {
				recent.push(state.listCourses.find((course) => course.id == id))
			})
			return recent
		},
		userCourses(state) {
			let user = []
			state.userCoursesID.forEach((id) => {
				user.push(state.listCourses.find((course) => course.id == id))
			})
			return user
		},
	},
})

export default store
