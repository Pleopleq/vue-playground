import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            brawlerList: [],
            brawler: {}
        };
    },

    mutations: {
        setBrawlers(state, brawlers) {
            state.brawlerList = brawlers;
        },

        setSingleBrawler(state, brawler) {
            state.brawler = brawler
        },

        resetState(state) {
            state.brawler = {}
        }
    },

    actions: {
        fetchBrawlers({ commit, dispatch }) {
            fetch("http://localhost:4000/brawlers")
                .then((response) => response.json())
                .then((data) => {
                    commit("setBrawlers", data);
                });
        },

        fetchSingleBrawler({ commit, dispatch }, id) {
            fetch(`http://localhost:4000/brawler/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    commit("setSingleBrawler", data);
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    },
});

export default store;
