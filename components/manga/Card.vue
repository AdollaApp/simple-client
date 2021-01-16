<template>
  <div class="my-2 px-1 w-full overflow-hidden md:w-1/2 lg:w-1/4 xl:w-1/6">
    <!-- Image div -->
    <div
      class="rounded-md w-full overflow-hidden relative poster-padding border border-gray-200"
    >
      <img
        :src="manga.constant.posterUrl"
        class="w-full h-full bg-gray-300 object-cover border-0 absolute top-0 left-0"
      >
    </div>
    <!-- {{ manga }} -->
    <div class="flex h-24 mt-2 items-center space-x-2">
      <!-- Continue reading -->
      <div class="flex h-full items-center">
        <button class="p-2 bg-gray-200 rounded-md">
          <book-open-icon class="w-5 h-5" />
        </button>
      </div>
      <!-- Title -->
      <h4 class="text-2xl font-bold do-clamp leading-5">
        {{ manga.constant.title }}
      </h4>
    </div>
  </div>
</template>

<style scoped>
.poster-padding {
  padding-bottom: 150%;
}
.do-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

<script>
// Import icons
import BookOpenIcon from '~/assets/icons/book-open.svg?inline'

export default {
  components: {
    BookOpenIcon
  },
  props: {
    manga: {
      type: Object,
      required: true
    }
  },
  computed: {
    getChapterLabel () {
      const id = this.manga.progress.chapterId
      const relevantChapter = this.manga.data.chapters.find(
        v => v.hrefString === id
      )
      return relevantChapter.label
    }
  }
}
</script>
