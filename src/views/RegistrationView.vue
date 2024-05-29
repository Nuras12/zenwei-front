<template>
  <div class="registration-view">
    <div class="container mx-auto px-3">
      <div class="modal-card">
        <div class="header">{{ $t('registration.form.header') }}</div>
        <form class="content">
          <div class="flex flex-col gap-3">
            <base-input v-model="model.phone" placeholder="Номер телефона"></base-input>
            <base-input v-model="model.phone" placeholder="Номер телефона"></base-input>
            <base-input v-model="model.phone" placeholder="Номер телефона"></base-input>
          </div>

          <base-button class="mt-10" block> Продолжить </base-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseInput from '@/components/Base/BaseInput.vue'
import BaseButton from '@/components/Base/BaseButton.vue'

import { reactive } from 'vue'

const model = reactive({
  phone: ''
})
</script>

<style scoped lang="scss">
.registration-view {
  padding: 240px 0;
  padding-bottom: 435px;

  background-image: url('@/assets/images/shapes-bg.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top;

  .modal-card {
    @apply p-10 pt-5 mx-auto;

    max-width: 446px;
    border-radius: 20px;
    background: $bg-white;

    .header {
      @apply text-center mb-10;

      color: $black-alatau;
      font-size: 40px;
      font-weight: 600;
    }
  }
}
</style>
