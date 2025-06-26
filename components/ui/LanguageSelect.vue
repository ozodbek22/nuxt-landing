<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, setLocale } = useI18n()

const locales = [
  { label: 'EN', value: 'en' },
  { label: 'RU', value: 'ru' },
  { label: 'UZ', value: 'uz' }
]

const isOpen = ref(false)


async function selectLocale(value: string) {
  try {
    await setLocale(value)
    isOpen.value = false
  } catch (error) {
    locale.value = value
    isOpen.value = false
  }
}
</script>

<template>
  <div class="relative inline-block text-left">
    <!-- Trigger -->
    <button
        class="inline-flex justify-center w-24 rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        @click="isOpen = !isOpen"
    >
      {{ locales.find(l => l.value === locale)?.label }}
      <svg class="ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.66a.75.75 0 01-1.08 0l-4.25-4.66a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>

    <!-- Dropdown -->
    <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
    >
      <div class="py-1">
        <button
            v-for="item in locales"
            :key="item.value"
            @click="selectLocale(item.value)"
            :class="[
              'block w-full text-left px-4 py-2 text-sm hover:bg-gray-100',
              item.value === locale ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
            ]"
        >
          {{ item.label }}
        </button>
      </div>
    </div>

    <!-- Click outside to close -->
    <div
        v-if="isOpen"
        class="fixed inset-0 z-40"
        @click="isOpen = false"
    ></div>
  </div>
</template>