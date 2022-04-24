import { createStore } from 'vuex'

import listCourses from '@/assets/courses.json'

const store = createStore({
	state() {
		return {
			listCourses,
			filtered: listCourses,
		}
	},
	mutations: {
		filterCourses(state, word) {
			state.filtered = state.listCourses.filter((item) => item.title.toLowerCase().includes(word.toLowerCase()))
		},
	},
})

export default store
