import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            brawlerList: [],
        };
    },

    mutations: {
        setBrawlers(state, brawlers) {
            state.brawlerList = brawlers;
        },
    },

    actions: {
        fetchBrawlers({ commit, dispatch }) {
            fetch("http://localhost:4000/brawlers")
                .then((response) => response.json())
                .then((data) => {
                    commit("setBrawlers", data);
                });
        },
    },
});

export default store;
