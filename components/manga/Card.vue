<template>
  <div>
    <!-- Image div -->
    <div
      class="rounded-md overflow-hidden relative poster-padding border border-gray-200"
    >
      <img
        :src="manga.constant.posterUrl"
        class="w-full h-full bg-gray-300 object-cover border-0 absolute top-0 left-0"
      >
    </div>
    <!-- {{ manga }} -->
    <div>
      <h4 class="text-xl font-semibold mt-3">
        {{ manga.constant.title }}
      </h4>
    </div>
  </div>
</template>

<style scoped>
.poster-padding {
  padding-bottom: 150%;
}
</style>

<script>
export default {
  props: {
    manga: {
      type: Object,
      required: true
    }
  }
}
</script>
