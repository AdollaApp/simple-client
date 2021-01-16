export const state = () => ({
  url: null
})

export const mutations = {
  setUrl (state, url) {
    state.url = url
  }
}
