<template>
  <div class="grants-list-section">
    <div class="container mx-auto c-padding">
      <div class="title">Стипендии</div>
      <div class="content flex flex-col gap-3">
        <GrantCard v-for="(item, index) in grants" :key="index" v-bind="item"></GrantCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GrantIcon from '@/assets/images/grant-icon.png'

import GrantCard, { type GrantCardProps } from '@/components/GrantsView/GrantCard.vue'
import type { Course } from '../Common/CoursesTable.vue'

const courses: Course[] = [
  {
    program: 'Mechanical Engineering',
    lang: 'English',
    starting: 'Sep, 2024',

    coverage: {
      tuition: '42000',
      accommodation: 'NO',
      living: 'YES'
    },

    price: {
      tuition: '42000',
      accommodation: '300-2600',
      living: '0-2000'
    }
  },
  {
    program: 'Mechanical Engineering',
    lang: 'English',
    starting: 'Sep, 2024',

    coverage: {
      tuition: '42000',
      accommodation: 'NO',
      living: 'YES'
    },

    price: {
      tuition: '42000',
      accommodation: '300-2600',
      living: '0-2000'
    }
  }
]

const grants: GrantCardProps[] = [
  {
    title: 'Hanbin Institute of Technology, Shenzhen',
    location: 'Shenzen',
    href: '/',
    image: GrantIcon,
    options: courses
  },
  {
    title: 'Hanbin Institute of Technology, Shenzhen',
    location: 'Shenzen',
    href: '/',
    image: GrantIcon,
    options: courses
  }
]
</script>

<style scoped lang="scss">
.grants-list-section {
  padding: 60px 0;

  .title {
    font-size: 40px;
    font-weight: 600;
    line-height: 100%;
    margin-bottom: 96px;
  }
}
</style>
