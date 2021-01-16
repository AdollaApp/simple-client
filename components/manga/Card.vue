<template>
  <div class="my-16 space-y-6 md:flex items-center md:space-x-6 md:space-y-0">
    <!-- Image div -->
    <div
      class="min-w-64 w-64 rounded-md overflow-hidden relative border border-gray-200"
    >
      <div class="w-full poster-padding">
        <img
          :src="manga.constant.posterUrl"
          class="w-full h-full bg-gray-300 object-cover border-0 absolute top-0 left-0"
        >
      </div>
    </div>
    <div class="h-full">
      <div>
        <!-- Title -->
        <h4
          class="text-2xl font-bold leading-5 border-b border-gray-200 mb-6 pb-3"
        >
          {{ manga.constant.title }}
        </h4>
        <!-- New badge -->
        <div class="flex space-x-3">
          <div
            v-if="manga.progress && manga.progress.new"
            class="px-1 rounded-md bg-blue-300 text-blue-700 inline-block font-bold"
          >
            NEW!
          </div>
          <div
            v-if="manga.progress && manga.constant.nsfw"
            class="px-1 rounded-md bg-red-300 text-red-700 inline-block font-bold"
          >
            NSFW
          </div>
        </div>
        <!-- Descriptions -->
        <p
          v-for="par in manga.constant.descriptionParagraphs"
          :key="par"
          class="w-full my-3"
        >
          {{ par }}
        </p>
        <!-- Continue reading -->
        <div v-if="manga.progress" class="flex h-full items-center">
          <button
            class="p-2 bg-gray-200 rounded-md space-x-3 flex items-center mr-6"
          >
            <book-open-icon class="w-5 h-5" />
            <span>{{ getChapterLabel }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.poster-padding {
  padding-bottom: 150%;
}
.min-w-64 {
  min-width: 16rem;
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
      const id = this.manga?.progress?.chapterId
      const relevantChapter = this.manga.data.chapters.find(
        v => v.hrefString === id
      )
      return relevantChapter?.label ?? 'Onbekend'
    }
  }
}
</script>
