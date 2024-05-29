<template>
  <main class="home-view">
    <section class="header">
      <div class="container mx-auto px-3">
        <div class="content">
          <div>Станьте частью успешного бизнеса в области образования</div>
          <base-button class="mt-5 w-56"> Sign in </base-button>
        </div>
      </div>
    </section>

    <section class="benefits">
      <div class="container mx-auto px-3"></div>
    </section>
  </main>
</template>

<script setup lang="ts">
import BaseButton from '@/components/Base/BaseButton.vue'
</script>

<style scoped lang="scss">
.home-view {
  .benefits {
    padding: 100px 0;
  }

  .header {
    padding: 173px 0;

    background-color: $text-black;
    background-image: url('@/assets/images/main-header.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;

    .content {
      max-width: 629px;

      color: $bg-white;
      font-size: 56px;
      font-weight: bold;
      line-height: 110%;
    }
  }
}
</style>
