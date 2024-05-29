<template>
  <div class="benefit-card">
    <div class="text">
      <div class="title mb-5">{{ title }}</div>
      <div>
        <slot></slot>
      </div>
    </div>

    <img :src="image" />
  </div>
</template>

<script setup lang="ts">
import BenefitSapeImage from '@/assets/images/benefits-shape-1.png'

withDefaults(
  defineProps<{
    title: string
    image?: string
  }>(),
  {
    image: BenefitSapeImage
  }
)
</script>

<style scoped lang="scss">
.benefit-card {
  background: $bg-white;
  border-radius: 17px;

  padding: 45px 80px;

  font-size: 24px;
  line-height: 28px;
  color: $text-black;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 5%;

  .text {
    max-width: 665px;
  }

  .title {
    font-size: 56px;
    color: $bg-black;
    font-weight: 600;
    line-height: 110%;
  }
}
</style>
