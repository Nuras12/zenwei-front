<template>
  <section class="filter-section">
    <div class="container mx-auto px-3 grid grid-cols-6 gap-4">
      <div class="col-span-6 lg:col-span-4 flex flex-col gap-4">
        <div class="flex items-center gap-3">
          <div class="category-title">Стипендия</div>
          <BaseTag v-model="grantModel" :options="grant"></BaseTag>
        </div>

        <div class="flex items-center gap-3">
          <div class="category-title">Покрытие</div>
          <BaseTag v-model="coverageModel" :options="coverage"></BaseTag>
        </div>
      </div>

      <div class="col-span-6 lg:col-span-2 flex flex-col gap-3">
        <BaseInputSmall v-model="searchModel" :icon="SearchIcon" placeholder="Найти программу">
        </BaseInputSmall>
        <BaseInputSmall v-model="searchModel" :icon="SearchIcon" placeholder="Найти программу">
        </BaseInputSmall>
        <BaseInputSmall v-model="searchModel" :icon="SearchIcon" placeholder="Найти программу">
        </BaseInputSmall>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SearchIcon from '@/assets/icons/search.svg?component'

import BaseInputSmall from '../Base/BaseInputSmall.vue'
import BaseTag from '@/components/Base/BaseTag.vue'

import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const route = useRoute()

const grant = [
  { label: 'Полный', value: 'full' },
  { label: 'Частичный', value: 'partial' }
]
const grantModel = computed({
  get: () => {
    if (!route.query.grant) return null
    return String(route.query.grant)
  },
  set: (value) => {
    router.replace({ query: { ...route.query, grant: value } })
  }
})

const coverage = [
  { label: 'Обучение', value: 'scholarship' },
  { label: 'Жить на пособие', value: 'living' },
  { label: 'Размещение', value: 'location' },
  { label: 'Другое', value: 'other' }
]
const coverageModel = computed({
  get: () => {
    if (!route.query.coverage) return null
    return String(route.query.coverage)
  },
  set: (value) => {
    router.replace({ query: { ...route.query, coverage: value } })
  }
})

const searchModel = computed({
  get: () => {
    if (!route.query.search) return null
    return String(route.query.search)
  },
  set: (value) => {
    router.replace({ query: { ...route.query, search: value } })
  }
})
</script>

<style scoped lang="scss">
.filter-section {
  padding-top: 80px;
  padding-bottom: 40px;
  background: $bg-white;

  .category-title {
    color: $text-default;
    font-size: 16px;
    font-weight: 600;
    line-height: 28px;

    margin-left: 12px;
  }
}
</style>
