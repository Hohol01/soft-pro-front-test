<template>
  <div class="p-4 overflow-hidden">
    <input
        v-model="store.searchQuery"
        type="text"
        placeholder="Пошук за назвою або локацією..."
        class="w-full mb-4 p-2 border border-gray-300 rounded"
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
      <div v-if="store.totalPages===0">
        Об'єктів не знайдено
      </div>
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

const slideDirection = ref<'slide-left' | 'slide-right'>('slide-left')
const previousPage = ref(store.currentPage)

function handlePageChange(newPage: number) {
  slideDirection.value = newPage > previousPage.value ? 'slide-left' : 'slide-right'
  previousPage.value = newPage
}
</script>