<script lang="ts" setup>
import {computed} from "vue";
import {useI18n} from "vue-i18n";

const {t} = useI18n()

const faqs = computed(() => {

  return [
    {label: t('faq.faqItem1Label'), content: t('faq.faqItem1Content')},
    {label: t('faq.faqItem2Label'), content: t('faq.faqItem2Content')},
    {label: t('faq.faqItem3Label'), content: t('faq.faqItem3Content')},
    {label: t('faq.faqItem4Label'), content: t('faq.faqItem4Content')}
  ]
})

</script>

<template>
  <section id="faq" ref="faqSection" class="py-20 lg:py-32 bg-gray-50/70 ">
    <div class="container max-w-4xl mx-auto px-4">
      <div class="text-center">
        <h2 class="text-3xl lg:text-4xl font-bold tracking-tight">{{ t('faq.title') }}</h2>
<!--        <p class="mt-4 text-lg text-gray-600">{{ t('faq.subtitle') }}</p>-->
      </div>
      <UAccordion
          :items="faqs"
          :ui="{
    item: 'border-b border-gray-300 last:border-b-0 text-base',
    header: 'text-start break-words ',
    trigger: 'group flex-1 flex items-center gap-1.5 font-medium text-lg py-3.5 focus-visible:outline-primary min-w-0 cursor-pointer',
  }"
          class="w-full mt-12 "
      />


    </div>
  </section>

</template>
