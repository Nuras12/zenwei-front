<template>
  <div class="default-layout flex flex-col">
    <HeaderComp :variant="variant"></HeaderComp>
    <main class="main">
      <slot></slot>
    </main>
    <FooterComp :variant="variant"></FooterComp>
  </div>
</template>

<script setup lang="ts">
import HeaderComp from '@/components/DefaultLayout/HeaderComp.vue'
import FooterComp from '@/components/DefaultLayout/FooterComp.vue'

import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

export type LayoutVariant = 'light' | 'dark'
const variant = ref<LayoutVariant>('light')

const route = useRoute()
watch(
  () => route.meta.layout as LayoutVariant | undefined,
  (value) => {
    if (!value) {
      variant.value = 'light'
      return
    }

    variant.value = value
  }
)
</script>

<style scoped lang="scss">
.default-layout {
  min-height: 100vh;

  .main {
    @apply flex-grow;
    background: $bg-primary;
  }
}
</style>
