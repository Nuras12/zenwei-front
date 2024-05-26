<template>
  <div class="default-layout flex flex-col">
    <HeaderComp></HeaderComp>
    <main class="main">
      <div class="container mx-auto px-3 py-14">
        <slot></slot>
      </div>
    </main>
    <FooterComp></FooterComp>
  </div>
</template>

<script setup lang="ts">
import HeaderComp from '@/components/DefaultLayout/HeaderComp.vue'
import FooterComp from '@/components/DefaultLayout/FooterComp.vue'
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
