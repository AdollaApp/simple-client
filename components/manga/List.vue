<template>
  <div>
    <!-- List title -->
    <h2
      class="mb-4 text-4xl font-bold text-center border-b border-gray-200 pb-2"
    >
      {{ title }}
    </h2>
    <!-- List entries -->
    <div>
      <manga-card
        v-for="manga in items"
        :key="manga.data.slug"
        :manga="manga"
      />
    </div>
  </div>
</template>

<script>
// Import components
import MangaCard from '~/components/manga/Card'

export default {
  components: {
    MangaCard
  },
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
