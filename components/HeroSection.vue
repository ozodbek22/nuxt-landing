<template>
  <section
      id="hero"
      ref="heroSection"
      class="relative h-[90vh] flex items-center justify-center overflow-hidden"
      @mousemove="handleMouseMove"
  >
    <div class="character-grid">
      <span v-for="(char, index) in gridCharacters" :key="index" class="grid-char">{{ char }}</span>
    </div>

    <div class="container text-center z-10 mx-auto px-6 md:px-24">
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 animate-fade-in-up text-balance leading-tight">
        <AnimatedHighlight> {{ t('hero.highlighted') }}</AnimatedHighlight>
        {{ t('hero.titlePart1') }}
      </h1>

      <p class="max-w-3xl mx-auto text-lg md:text-xl  mb-8 animate-fade-in-up text-gray-500"
         style="animation-delay: 0.4s;">
        {{ t('hero.subtitle') }}
      </p>

      <div class="animate-fade-in-up" style="animation-delay: 0.6s;">
        <UButton class="text-white bg-green-600" size="xl" @click="gotoLogin">
          {{ t('hero.cta') }}
        </UButton>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {onMounted, onUnmounted, ref} from 'vue';
import AnimatedHighlight from "~/components/ui/AnimatedHighlight.vue";

const {t} = useI18n()


function gotoLogin() {
  console.log('Redirecting to login page...');
}

const heroSection = ref<HTMLElement | null>(null);
const gridCharacters = ref<string[]>([]);

const characterSet =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψωАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюяこんにちは世界你好'
const numChars = 1500; // Reduce for performance balance

interface GridChar {
  el: HTMLElement;
  x: number;
  y: number;
}

let gridCharData: GridChar[] = [];
let animationFrameId: number | null = null;

onMounted(() => {
  for (let i = 0; i < numChars; i++) {
    gridCharacters.value.push(characterSet[Math.floor(Math.random() * characterSet.length)]);
  }

  nextTick(() => {
    const chars = heroSection.value?.querySelectorAll('.grid-char') ?? [];
    gridCharData = Array.from(chars).map((el) => {
      const rect = el.getBoundingClientRect();
      return {
        el: el as HTMLElement,
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };
    });
  });
});

onUnmounted(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
});

const handleMouseMove = (event: MouseEvent) => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);

  animationFrameId = requestAnimationFrame(() => {
    const {clientX: mouseX, clientY: mouseY} = event;

    const maxDistance = 200;

    for (const {el, x, y} of gridCharData) {
      const dx = mouseX - x;
      const dy = mouseY - y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < maxDistance) {
        const proximity = 1 - distance / maxDistance;
        el.style.opacity = `${0.1 + proximity * 0.9}`;
        el.style.transform = `scale(${1 + proximity * 0.5})`;
        el.style.color = '#16a34a'
      } else {
        el.style.opacity = '0.1';
        el.style.transform = 'scale(1)';
        el.style.color = '#a1a1aa'; // Muted gray
      }
    }
  });
};


</script>
