<template>
  <footer class="footer-comp">
    <div class="container mx-auto px-3 pt-20 pb-14 flex flex-col gap-9">
      <section class="logo-section">
        <img src="@/assets/images/logo-dark.svg" alt="Zenwei Logo" class="h-8" />
      </section>
      <section class="links-section flex items-start justify-between">
        <nav class="footer-nav">
          <div class="text-2xl font-medium mb-3">{{ $t('footer.grants_section.header') }}</div>
          <div class="nav-links flex flex-col gap-3">
            <a href="#">{{ $t('footer.grants_section.city') }}</a>
            <a href="#">{{ $t('footer.grants_section.uni') }}</a>
            <a href="#">{{ $t('footer.grants_section.consul') }}</a>
          </div>
        </nav>
        <nav class="footer-nav">
          <div class="text-2xl font-medium mb-3">{{ $t('footer.uni_section.header') }}</div>
          <div class="nav-links flex flex-col gap-3">
            <a href="#">{{ $t('footer.uni_section.shan_khai') }}</a>
            <a href="#">{{ $t('footer.uni_section.beijing') }}</a>
          </div>
        </nav>
      </section>
      <div class="line"></div>
      <section class="social-section">
        <div class="links">
          <div class="text-2xl font-medium">{{ $t('footer.follow') }}</div>
        </div>
      </section>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.footer-comp {
  background: $bg-white;

  .footer-nav {
    color: $black-alatau;
  }
  .nav-links {
    @apply text-xl;
  }
  .line {
    height: 2px;

    background: $violet-alatau;
    opacity: 0.05;
  }
}
</style>
