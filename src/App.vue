<template>
    <div class="flex h-screen bg-gray-50 text-gray-900 overflow-hidden">
      <BaseLeftNav></BaseLeftNav>
      <main class="flex-1 flex flex-col overflow-hidden">
        <div class="flex-1 overflow-y-auto ">
          <router-view/>
        </div>
      </main>
    </div>



</template>

<script setup lang="ts">
import BaseLeftNav from "@/components/SideNav.vue";
</script>
