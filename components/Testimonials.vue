<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const testimonials = computed(() => [
  {
    name: t('testimonials.testimonial1Name'),
    title: t('testimonials.testimonial1Title'),
    quote: t('testimonials.testimonial1Quote'),
    avatar: 'https://i.pravatar.cc/150?img=1',
    initials: 'MG'
  },
  {
    name: t('testimonials.testimonial2Name'),
    title: t('testimonials.testimonial2Title'),
    quote: t('testimonials.testimonial2Quote'),
    avatar: 'https://i.pravatar.cc/150?img=5',
    initials: 'KT'
  },
  {
    name: t('testimonials.testimonial3Name'),
    title: t('testimonials.testimonial3Title'),
    quote: t('testimonials.testimonial3Quote'),
    avatar: 'https://i.pravatar.cc/150?img=3',
    initials: 'FA'
  }
])
</script>

<template>
  <section id="testimonials" class="py-20 lg:py-32">
    <div class="container px-4 mx-auto">
      <div class="text-center max-w-2xl mx-auto">
        <h2 class="text-3xl lg:text-4xl font-bold tracking-tight">
          {{ t('testimonials.title') }}
        </h2>
<!--        <p class="mt-4 text-lg text-muted-foreground">-->
<!--          {{ t('testimonials.subtitle') }}-->
<!--        </p>-->
      </div>

      <div class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <UCard v-for="testimonial in testimonials" :key="testimonial.name"
               class="flex flex-col justify-between h-full bg-white shadow-lg rounded-lg ring-gray-100 divide-gray-300">
          <template #header>
            <p class="italic text-gray-700">"{{ testimonial.quote }}"</p>
          </template>

          <template #footer>
            <div class="flex items-center gap-4">
              <UAvatar :alt="testimonial.name" :src="testimonial.avatar" :ui="{ rounded: 'rounded-full', size: '12' }">
                <template #fallback>{{ testimonial.initials }}</template>
              </UAvatar>

              <div>
                <p class="font-semibold">{{ testimonial.name }}</p>
                <p class="text-sm text-gray-500">{{ testimonial.title }}</p>
              </div>
            </div>
          </template>
        </UCard>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'AppTestimonials'
}
</script>