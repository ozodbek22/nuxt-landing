<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer class="bg-white text-black border-t border-gray-300">
    <div class="container mx-auto px-4 py-8">
      <div class="flex justify-between flex-col md:flex-row gap-8">
        <div>
          <router-link class="flex items-center gap-2 font-bold text-lg mb-4" to="/">
            <img alt="Multi Mock Logo" class="h-8 w-8" src="/logo.svg" />
            <span>Multi Mock</span>
          </router-link>
          <p class="text-muted-foreground text-sm">{{ t('footer.description') }}</p>
        </div>

        <div>
          <h4 class="font-semibold mb-3 flex gap-1 items-center">
            {{ t('footer.subscribeTitle') }}
          </h4>
          <p class="text-sm text-muted-foreground mb-3">{{ t('footer.subscribeSubtitle') }}</p>
          <form class="flex gap-2">
            <UButton class="text-white">{{ t('footer.subscribeButton') }}</UButton>
          </form>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center text-sm">
        <p class="text-muted-foreground">
          © {{ new Date().getFullYear() }} Multi Mock. {{ t('footer.copyright') }}
        </p>
      </div>
    </div>
  </footer>
</template>
