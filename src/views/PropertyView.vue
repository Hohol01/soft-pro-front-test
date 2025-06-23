<template>
  <div v-if="property" class="p-6 max-w-3xl mx-auto">
    <MapViewMap :properties=[property] :zoomLevel="4" :center="property.geometry.coordinates as [number, number]">

    </MapViewMap>
    <h1 class="text-2xl font-bold mb-4">{{ property.name }}</h1>
    <p class="text-gray-600 mb-2"><strong>Локація:</strong> {{ property.location }}</p>
    <p class="text-gray-800 mb-4">{{ property.description }}</p>
    <p class="text-xl font-semibold text-blue-600">{{ property.price }} $</p>
  </div>

  <div v-else class="p-6 text-center text-gray-500">
    Об'єкт не знайдено.
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { usePropertiesStore } from '@/stores/properties'
import MapViewMap from '@/components/MapViewMap.vue'

const route = useRoute()
const store = usePropertiesStore()

const propertyId = route.params.id as string

const property = computed(() =>
        store.properties.find(p => p.id === propertyId)
)


</script>
