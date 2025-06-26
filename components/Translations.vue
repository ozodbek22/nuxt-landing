<template>
  <div class="p-4 bg-gray-100 rounded">
    <h3>Debug Info:</h3>
    <p>Current locale: {{ locale }}</p>
    <p>Available locales: {{ availableLocales }}</p>
<!--    <p>Test translation: {{ $t('faq.title') }}</p>-->
<!--    <p>Raw messages: {{ JSON.stringify($i18n.messages[locale], null, 2) }}</p>-->
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { locale, availableLocales } = useI18n()
</script>