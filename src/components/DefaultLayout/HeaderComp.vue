<template>
  <header class="header-comp" :class="{ 'variant-dark': variant === 'dark' }">
    <div class="container mx-auto px-3 py-3 flex items-center">
      <RouterLink to="/" class="logo-link">
        <LogoIcon></LogoIcon>
      </RouterLink>
      <nav class="flex items-center gap-10 ml-20">
        <RouterLink to="/registration" class="nav-link">Регистрация</RouterLink>
        <RouterLink to="/grants" class="nav-link">Стипендии</RouterLink>
      </nav>
      <UserPlaceholder class="ml-auto"></UserPlaceholder>
    </div>
  </header>
</template>

<script setup lang="ts">
import LogoIcon from '@/assets/images/logo-dark.svg?component'

import UserPlaceholder from '@/components/DefaultLayout/UserPlaceholder.vue'

import type { LayoutVariant } from '@/layouts/DefaultLayout.vue'

defineProps<{
  variant: LayoutVariant
}>()
</script>

<style scoped lang="scss">
.header-comp {
  background: $bg-white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);

  transition: 0.25s;

  z-index: 2;

  &.variant-dark {
    background: $text-black;
    box-shadow: none;

    .logo-link {
      color: $bg-white;
    }
    .nav-link {
      color: $bg-white;

      &:hover {
        color: $bg-white;
      }
      &.active {
        color: $bg-white;
      }
    }
  }

  .logo-link {
    color: $text-black;
  }

  .nav-link {
    color: $text-default;
    font-weight: 600;

    &:hover {
      color: $text-picked;
    }

    &.active {
      color: $text-picked;
    }
  }
}
</style>
