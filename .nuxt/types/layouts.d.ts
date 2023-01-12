import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/phuad/Desktop/Dev/Js/Vue/oculus/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}