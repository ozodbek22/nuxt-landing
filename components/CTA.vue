<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="cta" class="py-20 lg:py-32">
    <div class="container text-center mx-auto px-4">
      <h2 class="text-3xl lg:text-5xl font-bold tracking-tight">
        {{ t('cta.title') }}
      </h2>
      <p class="mt-6 max-w-xl mx-auto text-lg text-muted-foreground">
        {{ t('cta.subtitle') }}
      </p>
      <div class="mt-8">
        <UButton class="h-14 text-lg px-8 text-white cursor-pointer" size="lg">
          {{ t('cta.button') }}
        </UButton>
      </div>
    </div>
  </section>
</template>

