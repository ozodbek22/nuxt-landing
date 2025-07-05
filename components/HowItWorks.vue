<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const steps = computed(() => [
  {
    title: t('howItWorks.step1Title'),
    description: t('howItWorks.step1Description')
  },
  {
    title: t('howItWorks.step2Title'),
    description: t('howItWorks.step2Description')
  },
  {
    title: t('howItWorks.step3Title'),
    description: t('howItWorks.step3Description')
  }
])
</script>
<template>
  <section id="how-it-works" class="py-20 lg:py-32 bg-gray-100/40">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto">
        <h2 class="text-3xl lg:text-4xl font-bold tracking-tight">
          {{ t('howItWorks.title') }}
        </h2>
<!--        <p class="mt-4 text-lg text-gray-500">-->
<!--          {{ t('howItWorks.subtitle') }}-->
<!--        </p>-->
      </div>

      <div class="relative mt-16">
        <div
            class="hidden lg:block absolute top-8 left-1/2 -translate-x-1/2 w-4/5 h-1 border-t-2 border-dashed border-border border-gray-200"
        ></div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          <div
              v-for="(step, index) in steps"
              :key="index"
              class="flex flex-col items-center text-center"
          >
            <div
                class="h-16 w-16 mb-6 flex items-center justify-center rounded-full bg-green-600 text-2xl text-white font-bold ring-8 ring-background z-10"
            >
              {{ index + 1 }}
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ step.title }}</h3>
            <p class="text-gray-500">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
