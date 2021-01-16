<template>
  <div>
    <!-- List title -->
    <h3 class="mb-4 text-2xl font-bold">
      {{ title }}
    </h3>
    <!-- List entries -->
    <div class="flex flex-wrap -mx-1 overflow-hidden">
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
