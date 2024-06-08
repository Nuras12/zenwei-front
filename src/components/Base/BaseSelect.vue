<template>
  <div class="base-select-small" :style="style" :class="classes">
    <select v-model="model" v-bind="otherAttrs" class="select">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <slot name="icon">
      <Component v-if="icon" :is="icon" class="icon"></Component>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { useAttrs, type Component, type StyleValue } from 'vue'

defineOptions({
  inheritAttrs: false
})
defineProps<{
  icon?: Component
  options: { value: string | number; label: string }[]
}>()
const model = defineModel<string | number | null>('modelValue', { required: true })

const { style, class: classes, ...otherAttrs }: { style?: StyleValue; class?: any } = useAttrs()
</script>

<style scoped lang="scss">
.base-select-small {
  position: relative;
  padding: 6px 12px;
  border: 1px solid $border-grey;
  border-radius: 8px;
  display: flex;
  align-items: center;

  .select {
    width: 100%;
    outline: none;
    font-size: 16px;
    line-height: 28px;
    flex-grow: 1;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: transparent;
    border: none;
    padding-right: 30px; /* Adjust space for icon */

    &::placeholder {
      color: $gray-zenwei;
      opacity: 1;
    }

    &::-ms-input-placeholder {
      /* Edge 12 -18 */
      color: $gray-zenwei;
    }
  }

  .icon {
    position: absolute;
    right: 12px; /* Adjust position as needed */
    pointer-events: none; /* Ensure the icon does not block clicks */
    color: $accent-red;
  }
}
</style>
