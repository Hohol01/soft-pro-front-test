<template>
  <router-link
          :to="`/property/${property.id}`"
          class="block border p-4 rounded shadow hover:bg-gray-300 transition"
  >
    <h2 class="text-lg font-semibold">{{ property.name }}</h2>
    <p class="text-sm text-gray-600">{{ property.location }}</p>
    <p class="text-blue-600 font-bold mt-2">{{ property.price }} $</p>
  </router-link>
</template>

<script setup lang="ts">
import type {Property} from "@/types/property.ts";

defineProps<{ property: Property }>()
</script>
