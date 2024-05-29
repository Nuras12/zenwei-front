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
      <div class="container mx-auto px-3 flex flex-col gap-9">
        <BenefitCard title="Широкий выбор грантов">
          Мы предоставляем доступ к полному списку грантов от всех китайских университетов. Наша
          база данных постоянно обновляется, чтобы вы всегда имели доступ к самой свежей информации.
        </BenefitCard>

        <BenefitCard title="Удобство и простота" class="flex-row-reverse">
          Наш интуитивно понятный интерфейс делает поиск и выбор грантов быстрым и легким процессом.
          С нашими инструментами вы сможете эффективно находить подходящие гранты для каждого вашего
          клиента.
        </BenefitCard>

        <BenefitCard title="Эксклюзивные возможности">
          Получите доступ к уникальным грантам и специальным предложениям, которые могут увеличить
          вашу конкурентоспособность на рынке.
        </BenefitCard>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import BenefitCard from '@/components/HomeView/BenefitCard.vue'
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
