<template>
  <div class="p-4 overflow-hidden">
    <input
        v-model="store.searchQuery"
        type="text"
        placeholder="Пошук..."
        class="w-full mb-4 p-2 border rounded"
    />

    <div class="relative min-h-[300px]">
      <transition :name="slideDirection">
        <div
            :key="store.currentPage"
            class="grid grid-cols-1 md:grid-cols-2 gap-4 absolute inset-0"
        >
          <PropertyCard
              v-for="property in store.paginatedProperties"
              :key="property.id"
              :property="property"
          />
        </div>
      </transition>
    </div>

    <div class="mt-6">
      <Pagination
          :total="store.totalPages"
          v-model:page="store.currentPage"
          @update:page="handlePageChange"
      />
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { usePropertiesStore } from '@/stores/properties'
import PropertyCard from '@/components/PropertyCard.vue'
import Pagination from '@/components/Pagination.vue'

const store = usePropertiesStore()
const previousPage = ref(store.currentPage)
const slideDirection = ref<'slide-left' | 'slide-right'>('slide-left')

function handlePageChange(newPage: number) {
  slideDirection.value = newPage > store.currentPage ? 'slide-left' : 'slide-right'
  previousPage.value = store.currentPage
  store.currentPage = newPage
}
</script>

<style scoped>
.slide-left-enter-active,
.slide-right-enter-active,
.slide-left-leave-active,
.slide-right-leave-active {
  transition: all 0.3s ease;
  position: absolute;
  width: 100%;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
