import { defineStore } from 'pinia'
import type { GlobalThemeOverrides } from 'naive-ui'

export const useContractTheme = defineStore('contract-theme', {
    state: (): GlobalThemeOverrides => ({
        common: {
            primaryColor: '#306acc',
            primaryColorHover: '#306acc',
        }
    }),
    actions: {

    }
})