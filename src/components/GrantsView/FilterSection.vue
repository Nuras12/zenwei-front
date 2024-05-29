<template>
  <section class="filter-section">
    <div class="container mx-auto px-3">
      <BaseTag v-model="grantModel" :options="grant"></BaseTag>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseTag from '@/components/Base/BaseTag.vue'
import { ref } from 'vue'

const grant = [
  { label: 'Полный', value: 'full' },
  { label: 'Частичный', value: 'partial' }
]
const grantModel = ref(null)
</script>

<style scoped lang="scss">
.filter-section {
  padding-top: 80px;
  padding-bottom: 40px;
  background: $bg-white;
}
</style>
