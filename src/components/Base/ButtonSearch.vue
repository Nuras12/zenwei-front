<template>
    <button type="button" class="base-button">
  
    <slot>
      <Component :is="icon" class="icon"></Component>
    </slot>
  </button>

</template>

<script setup lang="ts">
import {type  Component } from 'vue'

defineProps<{
  icon?: Component
}>()
</script>

<style scoped lang="scss">
.base-button {
  padding: 15px 32px;
  background: $accent-red;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  line-height: 100%;
  color: $bg-white;
  transition: 0.25s filter;
  &:hover {
    filter: saturate(1.5);
  }
  /* Обеспечить кнопку шириной по содержимому */
  display: inline-block;
}
</style>
