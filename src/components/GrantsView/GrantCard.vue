<template>
  <div class="grant-card" :class="{ expanded }">
    <div class="header flex items-center gap-5">
      <img :src="GrantIcon" class="logo-image" />

      <div>
        <div class="title mb-2">Hanbin Institute of Technology, Shenzhen</div>
        <div class="flex items-center gap-1">
          <div class="location-icon">
            <LocationIcon></LocationIcon>
          </div>
          <div class="subtitle">Shenzen</div>
        </div>
      </div>

      <div class="ml-auto flex items-center gap-10">
        <RouterLink to="/" class="link"> Learn more </RouterLink>
        <button class="arrow-icon" @click="expanded = !expanded">
          <ArrowDownIcon></ArrowDownIcon>
        </button>
      </div>
    </div>

    <div class="collapse">
      <CoursesTable v-if="expanded" :options="courses"></CoursesTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import GrantIcon from '@/assets/images/grant-icon.png'
import LocationIcon from '@/assets/icons/location.svg?component'
import ArrowDownIcon from '@/assets/icons/arrow-down.svg?component'
import CoursesTable, { type Course } from '@/components/Common/CoursesTable.vue'
import { ref } from 'vue'

const expanded = ref(false)

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
</script>

<style scoped lang="scss">
.grant-card {
  padding: 20px 28px;
  background: $bg-white;
  border-radius: 12px;

  &.expanded {
    .collapse {
      max-height: 9999px;
      height: fit-content;
    }

    .arrow-icon {
      transform: rotate(180deg);
    }

    .header {
      margin-bottom: 28px;
    }
  }

  .collapse {
    max-height: 0;
    transition: 0.25s;
    width: 100%;
    visibility: visible;
    overflow: hidden;
  }

  .arrow-icon {
    color: $gray-zenwei;
    height: 40px;
    width: 40px;

    transition: 0.25s;
  }

  .link {
    font-size: 16px;
    font-weight: 500;
    line-height: 28px;
    text-decoration: underline;
    color: $text-link;
  }
  .logo-image {
    height: 44px;
  }
  .title {
    font-size: 16px;
    color: $black-alatau;
    font-weight: 600;
    line-height: 100%;
  }
  .location-icon {
    color: $accent-red;
    height: 18px;
    width: 18px;
  }
  .subtitle {
    font-size: 16px;
    font-weight: 500;
    line-height: 100%;
    color: $gray-zenwei;
  }
  .header {
    margin-bottom: 0;
    transition: 0.25s;
  }
}
</style>
