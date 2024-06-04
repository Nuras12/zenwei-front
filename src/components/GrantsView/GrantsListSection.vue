<template>
  <div class="grants-list-section">
    <div class="container mx-auto px-3">
      <div class="title">Стипендии</div>
      <div class="content flex flex-col gap-3">
        <GrantCard></GrantCard>
        <GrantCard></GrantCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GrantCard from '@/components/GrantsView/GrantCard.vue'
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
