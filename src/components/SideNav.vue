<template>

  <div class="bg-white dark:bg-slate-800 border-r
  border-slate-200 dark:border-slate-700
  shadow-lg transition-all duration-300 ease-in-out flex flex-col
  w-64">


    <Header/>


    <nav class="flex-1 p-2 overflow-y-auto bg-white ">
      <div>
        <button v-for="tab in tabs.tabs"
                @click='goTo(tab)'
                :key="tab.id"
                :class="[
  'w-full flex items-center space-x-3 px-3 py-2.5 mb-1 rounded-lg text-left transition-all duration-200 group border-0',
  'bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-800 dark:bg-transparent',
  isActiveTab(tab)
    ? '!bg-blue-100 !text-blue-800 !font-bold'
    : ''
]"

        >
          <span class="font-medium flex-1">
           {{ tab.name }}
          </span>
        </button>
      </div>
    </nav>
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/Header.vue'
import MapView from "@/pages/MapView.vue";
import {type Tab, useTabsStore} from "@/stores/tabsStore.ts";
import router from "@/router";
import {useRoute} from "vue-router";


const tabs = useTabsStore();
const route = useRoute()

function goTo(tab: { id: string, url: string }) {
  console.log(tab)
  tabs.setActiveTab(tab.id)
  router.push(tab.url)
}

function isActiveTab(tab: Tab): boolean {
  // Если URL совпадает и он уникален среди всех табов
  const sameUrlTabs = tabs.tabs.filter(t => t.url === tab.url)
  if (sameUrlTabs.length === 1 && tab.url === route.path) {
    return true
  }
  // Иначе — сравниваем по ID
  return tabs.activeTabId === tab.id
}

</script>