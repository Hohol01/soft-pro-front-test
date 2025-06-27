import {defineStore} from 'pinia'
import type {Component} from 'vue'
import CardsList from "@/components/CardsList.vue";
import MapView from "@/pages/MapView.vue";

import {SideTabsType} from "@/types/side-tabs-type.ts";
import SettingsMain from "@/components/SettingsMain.vue";
import {markRaw} from "vue";

export interface Tab {
    id: string
    name: string
    url: string
    component?: Component
    sideNavType?: SideTabsType
}

const BaseTabs: Tab [] =
    [
        {
            id: 'main',
            name: 'Головна',
            url: '/',
            component: markRaw(CardsList)
        },
        {
            id: 'Map',
            name: 'Карта',
            url: '/map',
            component: markRaw(MapView)
        },
        {
            id: 'SettingsMain',
            name: 'Налаштуввання',
            url: '/',
            component: markRaw(SettingsMain)
        },
    ]

export const useTabsStore = defineStore('tabs', {
    state: () => ({
        tabs: BaseTabs as Tab[],
        activeTabId: '' as string,
    }),
    getters: {
        activeTab(state): Tab | undefined {
            return state.tabs.find(t => t.id === state.activeTabId)
        },
    },
    actions: {
        setTabs(newTabs: Tab[]) {
            this.tabs = newTabs
            console.log(this.tabs.find(t => t.id ===  this.activeTabId))
            if (newTabs.length > 0 && !newTabs.find(t => t.id ===  this.activeTabId)) {
                this.activeTabId = newTabs[0].id
            }
        },
        addTab(tab: Tab) {
            if (!this.tabs.find(t => t.id === tab.id)) {
                this.tabs.push(tab)
            }
            this.activeTabId = tab.id
        },
        removeTab(id: string) {
            this.tabs = this.tabs.filter(t => t.id !== id)
            if (this.activeTabId === id) {
                this.activeTabId = this.tabs[0]?.id ?? ''
            }
        },
        setActiveTab(id: string) {
            this.activeTabId = id
        },
        setBaseTabs() {
            this.setTabs(BaseTabs)
        }
    },

})
