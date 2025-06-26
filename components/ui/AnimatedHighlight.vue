<script setup lang="ts">
// We keep the props for maximum flexibility
withDefaults(
    defineProps<{
      color?: string
      animationDelay?: string
    }>(),
    {
      color: 'text-yellow-400', // A nice, solid highlighter yellow
      animationDelay: '0.6s',
    },
)
</script>

<template>
  <span class="relative inline-block">
    <!--
      STEP 1: The text. It now has a lower z-index and is positioned relatively.
      It will serve as the bottom layer.
    -->
    <span class="relative z-10">
      <slot />
    </span>

    <!--
      STEP 2: The Marker SVG.
      - HIGHER z-index (z-20) to place it on top of the text.
      - mix-blend-screen is the magic that makes the text visible through the marker.
      - We removed the opacity from the color (text-yellow-400 instead of /70).
    -->
    <svg
        :style="{ animationDelay }"
        :class="[
        'animated-marker',
        'absolute inset-0 w-full h-full',
        'mix-blend-screen', // <-- The key changes are here!
        color,
      ]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 250 45"
        preserveAspectRatio="none"
    >
      <!--
        STEP 3: A new, bigger, bolder path.
        I've redrawn this path to be much "fatter" and more dramatic,
        extending further above and below the baseline.
      -->
      <path
          fill="currentColor"
          d="M2.31,27.34 C41.28,22.2,77.78,16.5,114.3,13.2 C154.63,9.5,195.9,10.7,235.8,17.2 C229.4,26.1,223.5,34.5,217.4,43.2 C178.4,36.8,139,36.5,100,41.4 C60,46.5,18,43.5,2.31,27.34 Z"
      />
    </svg>
  </span>
</template>

<style scoped>
/* The animation logic remains exactly the same! */
.animated-marker {
  clip-path: inset(0 100% 0 0);
  animation: wipe-in 0.7s cubic-bezier(0.77, 0, 0.175, 1) forwards;
}

@keyframes wipe-in {
  to {
    clip-path: inset(0 0 0 0);
  }
}
</style>
