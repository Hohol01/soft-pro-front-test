<template>
  <div ref="mapContainer" style="height: 500px;"></div>
</template>

<script setup lang="ts">
import {onMounted, ref, watch} from 'vue'
import {useRouter} from 'vue-router'
import maplibregl, {type LngLatLike, Map, Marker} from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

import type {Property} from "@/types/property.ts";

const mapContainer = ref<HTMLElement | null>(null)
let map: Map;
let markers: Marker[] = []

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
  map = new maplibregl.Map({
    container: mapContainer.value as HTMLElement,
    style: 'https://demotiles.maplibre.org/style.json',
    center: props.center as LngLatLike,
    zoom: props.zoomLevel
  })


  addMarkers()
})

function addMarkers() {
  // Видалити старі
  markers.forEach(marker => marker.remove())
  markers = []

  props.properties.forEach(property => {
    const marker = new maplibregl.Marker()
        .setLngLat(property.geometry.coordinates as [number, number])
        .setPopup(new maplibregl.Popup({offset: 25}).setText(property.name))
        .addTo(map)

    marker.getElement().addEventListener('click', () => {
      router.push(`/property/${property.id}`)
    })

    markers.push(marker)
  })

}

watch(() => props.properties, () => {
  if (map) {
    addMarkers()
  }
}, {deep: true})
</script>

<style scoped>
@import "maplibre-gl/dist/maplibre-gl.css";
</style>
