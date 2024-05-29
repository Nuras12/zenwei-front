<template>
  <footer class="footer-comp" :class="{ 'variant-dark': variant === 'dark' }">
    <div class="container mx-auto px-3 pt-20 pb-14 flex flex-col gap-9">
      <section class="logo-section">
        <LogoIcon></LogoIcon>
      </section>
      <section class="links-section flex items-start justify-between">
        <nav class="footer-nav">
          <div class="font-medium text-xl mb-3">{{ $t('footer.grants_section.header') }}</div>
          <div class="nav-links flex flex-col gap-3">
            <a href="#">{{ $t('footer.grants_section.city') }}</a>
            <a href="#">{{ $t('footer.grants_section.uni') }}</a>
            <a href="#">{{ $t('footer.grants_section.consul') }}</a>
          </div>
        </nav>
      </section>
      <div class="line"></div>
      <section class="social-section flex items-center">
        <div class="links flex items-center">
          <div class="font-medium text-lg">{{ $t('footer.follow') }}</div>
          <div class="ml-4 flex items-center gap-4">
            <InstagramIcon class="w-6 h-6"></InstagramIcon>
          </div>
        </div>

        <div class="ml-auto">
          <div class="flex items-center">
            <PhoneIcon class="mr-4 w-6 h-6"></PhoneIcon>
            <div class="font-medium text-lg">+ 7 (707) 926 25 69</div>
          </div>
        </div>
      </section>
    </div>
  </footer>
</template>

<script setup lang="ts">
import InstagramIcon from '@/assets/icons/instagram.svg?component'
import PhoneIcon from '@/assets/icons/phone.svg?component'
import LogoIcon from '@/assets/images/logo-dark.svg?component'

import type { LayoutVariant } from '@/layouts/DefaultLayout.vue'

defineProps<{
  variant: LayoutVariant
}>()
</script>

<style scoped lang="scss">
.footer-comp {
  background: $bg-white;

  transition: 0.25s;

  &.variant-dark {
    background: $bg-black;

    .logo-section {
      color: $bg-white;
    }
    .footer-nav {
      color: $bg-white;
    }
    .social-section {
      color: $bg-white;
    }
  }

  .logo-section {
    color: $text-black;
    transition: 0.25s;
  }
  .social-section {
    color: $text-black;
  }
  .footer-nav {
    color: $black-alatau;
  }
  .nav-links {
    font-size: 15px;
  }
  .line {
    height: 2px;

    background: $violet-alatau;
    opacity: 0.05;
  }
}
</style>
