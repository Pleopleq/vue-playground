import { createStore } from "vuex"

const store = createStore({
    state() {
        return {
            brawlerList: []
        }
    },

    mutations: {
        fetchBrawlers(state) {
            console.log(state)
        }
    },

    actions: {
        fetchBrawlers(context) {
            context.commit("fetchBrawlers")
        }
    }
})

export default store