<template>
  <header class="header-comp">
    <div class="container mx-auto px-3 py-3 flex items-center">
      <RouterLink to="/">
        <img src="@/assets/images/logo-dark.svg" alt="Zenwei Logo" class="h-8 mr-20" />
      </RouterLink>
      <nav class="flex items-center gap-10">
        <RouterLink to="#" class="nav-link">{{ $t('header.grants') }}</RouterLink>
        <!-- <RouterLink to="#" class="nav-link">Университеты</RouterLink>
        <RouterLink to="#" class="nav-link">Личный кабинет</RouterLink> -->
      </nav>
      <UserPlaceholder class="ml-auto"></UserPlaceholder>
    </div>
  </header>
</template>

<script setup lang="ts">
import UserPlaceholder from '@/components/DefaultLayout/UserPlaceholder.vue'
</script>

<style scoped lang="scss">
.header-comp {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);

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
