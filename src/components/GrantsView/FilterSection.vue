<template>
  <section class="filter-section">
    <div class="container mx-auto c-padding grid grid-cols-6 lg:flex lg:gap-4">
      <div class="col-span-6 lg:flex-none flex flex-col gap-4">
        <div class="flex items-center gap-3">
          <div class="category-title">Стипендия</div>
          <BaseTag v-model="grantModel" :options="grant"></BaseTag>
        </div>

        <div class="flex items-center gap-3">
          <div class="category-title">Покрытие</div>
          <BaseTag v-model="coverageModel" :options="coverage"></BaseTag>
        </div>

        <div class="flex items-center gap-3">
          <div class="category-title">Степень</div>
          <BaseTag v-model="degreeModel" :options="degree"></BaseTag>
        </div>

        <div class="flex items-center gap-3">
          <div class="category-title">Язык</div>
          <BaseTag v-model="languageModel" :options="language"></BaseTag>
        </div>

        <div class="flex items-center gap-3">
          <div class="category-title">Семестр</div>
          <BaseTag v-model="seasonModel" :options="season"></BaseTag>
        </div>
      </div>

      <div class="col-span-6 lg:flex-grow flex flex-col gap-3">
        <BaseSelect v-model="cityModel" :options="city" :icon="ArrowDown" placeholder="Выбрать город"></BaseSelect>

        <BaseSelect v-model="universityModel" :options="university" :icon="ArrowDown" placeholder="Выбрать город">
        </BaseSelect>

        <BaseInputSmall v-model="searchModel" :icon="SearchIcon" placeholder="Найти программу">
        </BaseInputSmall>
        <div class="button-container">
          <ButtonSearch :icon="SearchIcon" :onclick="onClick">Search</ButtonSearch>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SearchIcon from '@/assets/icons/search.svg?component'
import ArrowDown from '@/assets/icons/select-arrow-down.svg?component'

import BaseInputSmall from '../Base/BaseInputSmall.vue'
import ButtonSearch from '../Base/ButtonSearch.vue'
import BaseTag from '@/components/Base/BaseTag.vue'
import BaseSelect from '@/components/Base/BaseSelect.vue'

import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
// import {} from '../../api/filter-api'
import { Language } from '@/api/interfaces/language.enum'
import { Degree } from '@/api/interfaces/degree.enum'
import { City } from '@/api/interfaces/city.enum'
import { Season } from '@/api/interfaces/season.enum'
import * as api from '@/api/filter-api'

const router = useRouter()
const route = useRoute()

const computer = (name: string) => computed({
  get: () => {
    if (!route.query[name]) return null
    return String(route.query[name])
  },
  set: (value) => router.replace({ query: { ...route.query, [name]: value } })
})

const seasonModel = computer('season')
const cityModel = computer('city')
const universityModel = computer('university')
const languageModel = computer('language')
const searchModel = computer('search')
const degreeModel = computer('degree')
const coverageModel = computer('coverage')
const grantModel = computer('grant')

const grant = [
  { label: 'Полный', value: 'Full' },
  { label: 'Частичный', value: 'Partial' }
]

const coverage = [
  { label: 'Обучение', value: 'scholarship' },
  { label: 'Жить на пособие', value: 'living' },
  { label: 'Размещение', value: 'location' },
  { label: 'Другое', value: 'other' }
]

const degree = [
  { label: 'Без степени', value: Degree.Undergraduate },
  { label: 'Партнер', value: Degree.NonAcademic },
  { label: 'Бакалавр', value: Degree.Specialist },
  { label: 'Мастер', value: Degree.Master },
  { label: 'Доктор', value: Degree.PhD }
]

const city = [
  { label: 'Пекин', value: City.Beijing },
  { label: 'Далиан', value: City.Dalian },
]

const season = [
  { label: 'Осень', value: Season.Fall },
  { label: 'Весна', value: Season.Spring },
]

const university = [
  { label: 'Шандуньский', value: 'Шандуньский' },
  { label: 'Гарвардский', value: 'Гарвардский' },
]

const language = [
  { label: 'Китайский', value: Language.Chinese },
  { label: 'Английский', value: Language.English },
]


const onClick = async () => {
  const payload = {
    filter: {
      grant: route.query.grant ? String(route.query.grant) : null,
      cityName: route.query.city ? String(route.query.city) : null,
      programName: null,
      language: route.query.language ? String(route.query.language) : null,
      universityId: null,
      degree: route.query.degree ? String(route.query.degree) : null,
      season: route.query.season ? String(route.query.season) : null,
      scholarship: {
        accommodation: null,
        livingExpense: null
      }
    },
    sort: {
      sortField: null,
      sortOrder: null
    },
    pagination: {
      pageSize: 20,
      pageNumber: 0
    }
  }
  console.log('CCLICK', payload);
  const data = await api.getByFilter(payload)
  console.log(data);
  
}
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

.button-container {
  display: flex;
  justify-content: flex-end;
}
</style>
