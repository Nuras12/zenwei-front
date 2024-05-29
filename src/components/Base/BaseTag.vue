<template>
  <div class="base-tag">
    <button
      v-for="item in options"
      :key="item.value"
      class="button"
      :class="{ active: item.value === model }"
      @click="model = item.value"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<script setup lang="ts" generic="T extends string">
defineProps<{
  options: {
    label: string
    value: T
  }[]
}>()

const model = defineModel<T | null>('modelValue', { required: true })
</script>

<style scoped lang="scss">
.base-tag {
  @apply flex gap-2;

  .button {
    padding: 2px 20px;
    border: 1px solid $border-grey;
    border-radius: 8px;

    color: $text-black;
    font-size: 16px;
    line-height: 28px;

    &.active {
      font-weight: 600;

      color: $bg-white;
      background: $accent-red;
    }
  }
}
</style>
