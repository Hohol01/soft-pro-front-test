<script setup lang="ts">
const props = defineProps<{
  total: number
  page: number
}>()

const emit = defineEmits<{
  (e: 'update:page', value: number): void
}>()

function updatePage(page: number) {
  emit('update:page', page)
}
</script>

<template>
  <div class="flex justify-center mt-6 space-x-2">
    <button
            v-for="pageNum in total"
            :key="pageNum"
            @click="updatePage(pageNum)"
            :class="[
        'px-3 py-1 rounded',
        page === pageNum ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
      ]"
    >
      {{ pageNum }}
    </button>
  </div>
</template>

