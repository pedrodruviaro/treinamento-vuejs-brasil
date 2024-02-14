<script setup>
import { defineAsyncComponent } from 'vue'

defineProps({
  name: {
    type: String,
    required: true
  }
})

const iconsToRender = {
  Loading: defineAsyncComponent(() => import('./Loading.vue'))
}
</script>

<template>
  <Component :is="iconsToRender[name]" v-bind="$props" />
</template>
