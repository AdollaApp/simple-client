<template>
  <container>
    <div v-if="$fetchState.pending">
      Loading...
    </div>
    <div v-else>
      <manga-list title="Reading" :items="data.reading || []" />
      <manga-list title="Popular" :items="data.popular || []" />
    </div>
  </container>
</template>

<script>
// Import vueX
import { mapMutations } from 'vuex'

// Import components
import Container from '~/components/layout/Container'
import MangaList from '~/components/manga/List'

export default {
  components: {
    Container,
    MangaList
  },
  async fetch () {
    // Generate base URL
    const url = `https://${this.$store.state.localStorage.url}`
    const baseUrl = `${url}/json`

    // Get Adolla data
    const { data } = await this.$axios(baseUrl)

    for (const key of Object.keys(data.data)) {
      if (Array.isArray(data.data[key])) {
        data.data[key] = data.data[key].filter(Boolean).filter(v => v.success)
      }
    }

    this.data = data.data
  },
  data () {
    return {
      data: {}
    }
  },
  computed: {
    loaded () {
      const isLoaded = this.$store.state.localStorage.status
      if (isLoaded) {
        // Store Adolla URL
        if (!this.$store.state.localStorage.url) {
          let newUrl
          while (!newUrl) {
            newUrl = prompt('Enter Adolla URL.')
          }
          this.setUrl(newUrl)
        }
      }
      return isLoaded
    }
  },
  methods: {
    ...mapMutations({
      setUrl: 'localStorage/setUrl'
    })
  }
}
</script>
