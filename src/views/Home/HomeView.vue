<template>
  <div>
    <Hero />
    <BrandMarquee />
    <WhoWeAre class="reveal" />
    <AboutUs class="reveal" />
    <OurMethod class="reveal" />
    <Projects class="reveal" />
    <Marquee />
    <Services class="reveal" />
  </div>
</template>

<script setup>
import Hero from './sections/Hero.vue'
import BrandMarquee from '@/components/molecules/BrandMarquee.vue'
import WhoWeAre from './sections/WhoWeAre.vue'
import AboutUs from './sections/AboutUs.vue'
import OurMethod from './sections/OurMethod.vue'
import Projects from './sections/Projects.vue'
import Marquee from '../../components/molecules/Marquee.vue'
import Services from './sections/Services.vue'
</script>
