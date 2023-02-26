import { createStore } from "vuex"

const store = createStore({
    state() {
        return {
            brawlerList: []
        }
    },

    mutations: {
        fetchBrawlers() {
            const API_KEY = import.meta.env.VITE_API_KEY;

            fetch('https://api.brawlstars.com/v1/brawlers', {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + API_KEY,
                }
            })
                .then(response => response.json())
                .then(data => console.log(data));
        }
    },

    actions: {
        fetchBrawlers(context) {
            context.commit("fetchBrawlers")
        }
    }
})

export default store