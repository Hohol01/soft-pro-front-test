<template>
  <div ref="mapContainer" style="height: 500px;"></div>
</template>

<script setup lang="ts">
import {onMounted, ref, watch} from 'vue'
import {useRouter} from 'vue-router'
import maplibregl, {Map, Marker} from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

import {usePropertiesStore} from '@/stores/properties'
import type {Property} from "@/types/property.ts";

const mapContainer = ref<HTMLElement | null>(null)
const map = ref<Map | null>(null)
const markers = ref<Marker[]>([])

const store = usePropertiesStore()
const router = useRouter()

const props = withDefaults(
  defineProps<{
    properties: Property[],
    center?: [number, number],
    zoomLevel?: number
  }>(),
  {
    center: () => [30.5234, 50.4501], //kiev
    zoomLevel: 1
  }
)

onMounted(() => {
  map.value = new maplibregl.Map({
    container: mapContainer.value as HTMLElement,
    style: 'https://demotiles.maplibre.org/style.json',
    center: props.center,
    zoom: props.zoomLevel
  })


  addMarkers()
})

function addMarkers() {
  // Видалити старі
  markers.value.forEach(m => m.remove())
  markers.value = []

  props.properties.forEach(property => {
    const marker = new maplibregl.Marker()
        .setLngLat(property.geometry.coordinates)
        .setPopup(new maplibregl.Popup({offset: 25}).setText(property.name))
        .addTo(map.value)

    marker.getElement().addEventListener('click', () => {
      router.push(`/property/${property.id}`)
    })

    markers.value.push(marker)
  })
}

watch(() => props.properties, () => {
  if (map.value) {
    addMarkers()
  }
}, {deep: true})
</script>

<style scoped>
@import "maplibre-gl/dist/maplibre-gl.css";
</style>
