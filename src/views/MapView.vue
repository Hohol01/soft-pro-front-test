<template>
  <div class="w-full h-full" style="height: 500px;">
    <MapViewMap :properties="store.filteredProperties" />
  </div>
</template>

<script setup lang="ts">
import MapViewMap from '@/components/MapViewMap.vue'
import {usePropertiesStore} from "@/stores/properties.ts";
const store = usePropertiesStore()
</script>
