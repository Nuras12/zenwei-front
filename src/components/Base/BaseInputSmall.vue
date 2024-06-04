<template>
  <div class="base-input-small" :style="style" :class="classes">
    <input v-model="model" type="text" v-bind="otherAttrs" class="input" />
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
}>()
const model = defineModel<string | null>('modelValue', { required: true })

const { style, class: classes, ...otherAttrs }: { style?: StyleValue; class?: any } = useAttrs()
</script>

<style scoped lang="scss">
.base-input-small {
  padding: 6px 12px;
  border: 1px solid $border-grey;
  border-radius: 8px;

  display: flex;
  align-items: center;

  .icon {
    height: 22px;
    width: 22px;
    margin-left: 6px;

    color: $accent-red;
  }

  .input {
    outline: none;

    font-size: 16px;
    line-height: 28px;

    flex-grow: 1;

    &::placeholder {
      color: $gray-zenwei;
      opacity: 1;
    }

    &::-ms-input-placeholder {
      /* Edge 12 -18 */
      color: $gray-zenwei;
    }
  }
}
</style>
