<template>
  <component :is="tabs.activeTab?.component" />
</template>


<script setup lang="ts">
import {useTabsStore} from "@/stores/tabsStore.ts";
import {useRoute} from "vue-router";
import {markRaw, watch} from "vue";
import SettingsMain from "@/components/SettingsMain.vue";
import {storeToRefs} from "pinia";
import CardsList from "@/components/CardsList.vue";
import SettingsCommon from "@/components/SettingsCommon.vue";
const tabs = useTabsStore()

const route = useRoute()


const tabPresets = {
  SettingsMain: [
    {id: 'SettingsMain', name: 'Налаштування', url: '/', component:markRaw(SettingsMain)},
    {id: 'SettingsCommon', name: 'Дод налаштування', url: '/', component:markRaw(SettingsCommon)},

    {id: 'back', name: 'Назад', url: '/', component:markRaw(CardsList)}
  ],
  SettingsCommon:[
    {id: 'SettingsMain', name: 'Налаштування', url: '/', component:markRaw(SettingsMain)},
    {id: 'SettingsCommon', name: 'Дод налаштування', url: '/', component:markRaw(SettingsCommon)},

    {id: 'back', name: 'Назад', url: '/', component:markRaw(CardsList)}
  ]
}
const { activeTabId } = storeToRefs(tabs)

watch(activeTabId, (newId, oldId) => {
  console.log('🟡 activeTabId змінено:', oldId, '→', newId)
  const preset = tabPresets[newId as keyof typeof tabPresets]
  console.log(preset)
  console.log(newId)
  if (preset) {
    tabs.setTabs(preset)
  } else {
    tabs.setBaseTabs()
  }
},
{
  immediate: true,

})
</script>
