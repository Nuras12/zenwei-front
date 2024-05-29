<template>
  <input v-model="model" type="text" class="base-input" />
</template>

<script setup lang="ts">
const model = defineModel<string | null>('modelValue', { required: true })
</script>

<style scoped lang="scss">
.base-input {
  padding: 10px 12px;

  min-width: 150px;
  width: 100%;

  background: $bg-primary;
  outline-color: $gray-zenwei;

  font-size: 16px;

  border-radius: 8px;

  &::placeholder {
    color: $gray-zenwei;
    opacity: 1;
  }

  &::-ms-input-placeholder {
    /* Edge 12 -18 */
    color: $gray-zenwei;
  }
}
</style>
