<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LanguageSelect from "~/components/ui/LanguageSelect.vue"

const { t } = useI18n()
</script>

<template>
  <header class="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-sm border-gray-300">
    <div class="container h-16 flex items-center justify-between mx-auto px-6">
      <NuxtLink class="flex items-center gap-2 font-bold text-lg" to="/">
        <img alt="Multi Mock Logo" class="h-8 w-8" src="/logo.svg" />
        <span class="hidden sm:block">Multi Mock</span>
      </NuxtLink>

      <nav class="hidden lg:flex items-center gap-6 text-sm font-medium">
        <NuxtLink to="#hero" class="text-gray-500 hover:text-gray-900 transition-colors">
          {{ t('header.home') }}
        </NuxtLink>
        <NuxtLink to="#how-it-works" class="text-gray-500 hover:text-gray-900 transition-colors">
          {{ t('header.howItWorks') }}
        </NuxtLink>
        <NuxtLink to="#testimonials" class="text-gray-500 hover:text-gray-900 transition-colors">
          {{ t('header.testimonials') }}
        </NuxtLink>
        <NuxtLink to="#faq" class="text-gray-500 hover:text-gray-900 transition-colors">
          {{ t('header.faq') }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-4">
        <LanguageSelect />
        <NuxtLink  class="font-semibold text-sm">{{ t('header.login') }}</NuxtLink>
        <UButton  size="lg" class="text-white cursor-pointer bg-green-600 rounded-md hidden md:block" to="/get-started">
          {{ t('header.getStarted') }}
        </UButton>
      </div>
    </div>
  </header>
</template>

