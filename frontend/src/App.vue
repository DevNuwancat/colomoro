<script setup lang="ts">

import {ref, onMounted, onUnmounted} from 'vue';
import type { Ref } from 'vue';

// ? Slider State
const currentSlider: Ref<number> = ref(0)

// ? Slider Images
const sliders: Ref<string[]> = ref([
  "/src/assets/images/slider1.png",
  "/src/assets/images/slider2.png",
  "/src/assets/images/slider1.png",
  "/src/assets/images/slider2.png",
])

// ? Function to go to the next slide
const nextSlide = ():void => {
  currentSlider.value = (currentSlider.value + 1) % sliders.value.length 
}

//? Function to go to the previous slide 
const prevSlide = ():void => {
  currentSlider.value = currentSlider.value === 0
    ? sliders.value.length - 1
    : currentSlider.value -1
}

// ? Autoplay interval variable
let autoplayInterval: number | null = null;

// ? Autoplay function
const autoplay = (): void => {
  autoplayInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

// ? Start autoplay on component mount
onMounted((): void => {
  autoplay()
})

// ? Clear interval on component unmount
onUnmounted((): void => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
})




</script>

<template >
  <!-- ? Colored divider -->
  <div class=" lg:bg-blue-400 md:bg-yellow-400 sm:bg-red-400 bg-green-400 h-0.5 w-full"></div>

  <!-- ? Background image-->
  <backgroundImage class="absolute inset-0 -z-20 opacity-10">
    <img src="/src/assets/images/textures/test_gpt.png" alt="Background Textures" class="object-cover h-full w-full"/>
  </backgroundImage>
    
<!-- ? Nav Bar-->
<nav>
  <div class="flex justify-between items-center p-4 mx-4 my-4 border-t border-l border-r border-gray-200 rounded-xl bg-background border">

    <!-- * Logo -->
    <div class="flex items-center gap-4">
      <img src="/src/assets/images/logo.png" class="h-8 w-auto object-cover" alt="Logo" />
    </div>

    <!-- * Navigation Links -->
    <div class="flex items-center gap-8 font-primary text-sm font-semibold">
      <a href="#" class="hover:text-primary transition-colors"></a>
      <a href="#" class="hover:text-primary transition-colors"></a>
      <a href="#" class="hover:text-primary transition-colors"></a> 
    </div>

  </div>
</nav>

<!-- ? Header Section / Image banners -->
<section class="">

  <!-- * Header -->
  <header class="relative bg-background border border-gray-200 
                 rounded-xl mx-4 my-2 
                 sm:h-92 h-72 overflow-hidden">

    <div class="absolute flex flex-col inset-0 z-10  items-center justify-end 
                p-8 max-w-lg mx-auto">
      <!-- * Button -->
      <button class="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/80
                     transition-colors w-32 font-semibold text-sm cursor-pointer -translate-y-4">
                     Shop Now
                     </button>
    </div>

    <!-- * Image -->
    <div class="absolute right-0 top-0 h-full w-full overflow-hidden rounded-xl ">
      <img
      v-for="(slide, index) in sliders"
      :key="index"
      v-show="currentSlider === index"
      :src="slide"
      class="sm:h-92 h-72 w-full object-cover transition-opacity duration-500" alt="Header Images"
      />      
    </div>

    <!-- Navigation Arrows -->
      <!-- * Left Arrow button -->
      <button 
        @click="prevSlide"
        class="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white px-2 py-0.75 rounded-full shadow-lg cursor-pointer
        hover:scale-120 transition-transform duration-200 ease-in">
        ←
      </button>

      <button 
        @click="nextSlide"
        class="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white px-2 py-0.75 rounded-full shadow-lg cursor-pointer hover:scale-120 transition-transform duration-200 ease-in">
        →
      </button>

      <!-- * Slider Indicators -->
       <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-20 bg-white/10 
                   px-4 py-2 rounded-full">
          <button 
          v-for="(_, index) in sliders"
          :key="index"
          @click="currentSlider = index"
          class="shadow-2xl cursor-pointer"
          :class="currentSlider === index ? 'w-5 h-2 rounded-full bg-white transition-all duration-300' 
                                          : 'w-2 h-2 rounded-full bg-gray-300 transition-all duration-300'">
          
          </button>
      </div>
     </header>

</section>

      <!--? Companies -->
<section class="mx-4 my-6">
  <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">

    <!-- TEXT CARD -->
    <div class="sm:h-72 h-48 bg-background rounded-2xl flex items-center justify-center
      sm:text-4xl text-2xl font-primary font-semibold ">
      New Arrival
    </div>

    <!-- IMAGE CARD (OVERLAY STYLE) -->
    <div class="relative sm:h-72 h-48 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">

      <img src="/src/assets/images/header.png"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />

      <!-- Overlay -->
      <div class="absolute bottom-0 left-0 w-full sm:bg-green-800/70  text-white sm:p-3 p-2 text-shadow-lg">
        <p class="text-xs text-green-300 sm:block hidden">Jaya Ceylon</p>
        <h2 class="font-semibold sm:text-sm text-xs">GameSir G7 SE Xbox Wired Controller</h2>
        <p class="text-sm">Rs 17,950.00</p>
      </div>

      <!-- Badge -->
      <span class="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1
        rounded-br-lg rounded-tl-lg">
        New Arrival
      </span>

      <!-- Arrow -->
      <div class="absolute right-3 top-3 bg-white/80 rounded-full px-2 py-1
        opacity-0 group-hover:opacity-100 transition-all duration-200
        group-hover:translate-x-1">
        →
      </div>
    </div>

    <!-- NORMAL PRODUCT CARD -->
    <div class="sm:h-72 h-48 bg-background rounded-2xl shadow-lg overflow-hidden">
      <img src="/src/assets/images/header.png" class="h-48 w-full object-cover" />
      <div class="p-3">
        <p class="text-sm text-gray-400">Jaya Ceylon</p>
        <h2 class="font-semibold text-sm">GameSir G7 SE Xbox Wired Controller</h2>
        <p class="text-sm">Rs 17,950.00</p>
      </div>
    </div>

    <!-- DUPLICATE CARD -->
    <div class="sm:h-72 h-48 bg-background rounded-2xl shadow-lg overflow-hidden">
      <img src="/src/assets/images/header.png" class="h-48 w-full object-cover" />
      <div class="p-3">
        <p class="text-sm text-gray-400">Jaya Ceylon</p>
        <h2 class="font-semibold text-sm">GameSir G7 SE Xbox Wired Controller</h2>
        <p class="text-sm">Rs 17,950.00</p>
      </div>
    </div>

  </div>
</section>

<!--? Trust Us -->
      <!--? Companies -->
<section class="mx-4 my-6">
  
  <div class=" grid grid-cols-1 sm:grid-cols-2 gap-4 ">
    <!--* 1 large slide-->
    <div class="flex bg-background w-full h-96 items-center justify-center rounded-2xl">1</div>

    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
      <!--* 2 slides-->
      <div class="flex bg-background w-full h-46 items-center justify-center rounded-2xl">2</div>
      <div class="flex bg-background w-full h-46 items-center justify-center rounded-2xl">3</div>

      <div class="grid grid-cols-1 col-span-2">
        <!--* 1 slide-->
        <div class="flex bg-background w-full h-46 items-center justify-center rounded-2xl">4</div>
      </div>

    </div>

  </div>
  
</section>


<!--? Quick Section --> 
<footer>
  <div>
    
  </div>
</footer>



</template>

<style scoped>

</style>
