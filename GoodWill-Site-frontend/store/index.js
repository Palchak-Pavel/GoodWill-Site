export const actions= {
  async nuxtServerInit({dispatch}, context){
    await dispatch('news/loadNews')
  }
}
