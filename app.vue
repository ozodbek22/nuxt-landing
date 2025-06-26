<template>
  <div class="bg-white text-gray-900 font-sans">
    <Header/>
    <main>
      <HeroSection/>
      <HowItWorks/>
      <Testimonials/>
      <FAQ/>
      <CTA/>
      <Footer/>
      <Translations/>
    </main>
  </div>
</template>

<script lang="ts" setup>
import HeroSection from '~/components/HeroSection.vue'
import HowItWorks from '~/components/HowItWorks.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Testimonials from '~/components/Testimonials.vue'
import FAQ from "~/components/FAQ.vue";
import CTA from "~/components/CTA.vue";
</script>
