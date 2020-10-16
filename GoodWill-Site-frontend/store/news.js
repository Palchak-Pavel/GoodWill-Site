// Хранилище
export const state = () => ({
  news: []
})
// Мутации. изменяют состояние хранилища
export const mutations = {
  SET_NEWS(state, payload) {
    state.news = payload;
  }
}

// Запращивает инф-ю с свервера, затем меняет состояние хранилища ТОЛЬКО через мутации (commit(ИМЯ_МУТАЦИИ), данные)
export const actions = {
  async loadNews({commit}) {
    let {data} = await this.$axios.get('http://localhost:3004/news');
    commit('SET_NEWS', data);
  }
}

export const getters = {
  news(state) {
    return state.news
  },

  latestNews(state) {
    return state.news.slice(0, 6);
  }
}
