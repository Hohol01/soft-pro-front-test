<template>
  <div class="p-4">
    <input
            v-model="store.searchQuery"
            type="text"
            placeholder="Пошук за назвою або локацією..."
            class="w-full mb-4 p-2 border border-gray-300 rounded"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <PropertyCard
              v-for="property in store.paginatedProperties"
              :key="property.id"
              :property="property"
      />
      <div v-if="store.totalPages===0">
        Об'єктів не знайдено
      </div>
    </div>

    <Pagination
            :total="store.totalPages"
            v-model:page="store.currentPage"
    />
  </div>
</template>

<script setup lang="ts">
import { usePropertiesStore } from '@/stores/properties'
import PropertyCard from '@/components/PropertyCard.vue'
import Pagination from '@/components/Pagination.vue'

const store = usePropertiesStore()
</script>
