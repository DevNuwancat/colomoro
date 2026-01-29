<script setup lang="ts">

import Footer from '../components/Footer.vue'
import Nav from '../components/Nav.vue'

import {ref, onMounted, onUnmounted} from 'vue';
import type { Ref } from 'vue';

import slider1 from '/images/02_slider.jpg';
import slider2 from '/images/01_slider.jpg';

// ? Slider State
const currentSlider: Ref<number> = ref(0)

// ? Slider Images
const sliders: Ref<string[]> = ref([
  slider1,
  slider2,
  
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
  <Nav />

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
    <div class="absolute right-0 top-0 h-full w-full overflow-hidden rounded-xl flex items-center justify-center">
      <img
      v-for="(slide, index) in sliders"
      :key="index"
      v-show="currentSlider === index"
      :src="slide"
      class="sm:h-92 h-72 w-full object-cover 
           transition-opacity duration-700 ease-in-out" alt="Header Images"
      :class="currentSlider === index ? 'opacity-100 ' : 'opacity-0 '"
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

    <div class="relative bg-background w-full flex items-center justify-center rounded-2xl border border-white/50
    drop-shadow-2xl">
      <img src="/images/new_arrive_img_2.jpg" alt="" class=" sm:h-72 h-48 rounded-2xl opacity-25 object-cover ">

        <!-- TEXT CARD -->
    <div class="absolute flex items-center justify-center
      sm:text-4xl text-2xl font-primary font-bold ">
  
      New Arrival

    </div>
    
    </div>
    

  

    <!-- IMAGE CARD (OVERLAY STYLE) -->
    <div class="relative sm:h-72 h-48 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">

      <img src="/images/Products/new_arrival_01.jpg"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />

      <!-- Overlay -->
      <div class="absolute bottom-0 left-0 w-full sm:bg-black/40 bg-black/40 text-white sm:p-3 p-2 text-shadow-lg">
        <p class="text-xs text-green-300 sm:block hidden text-shadow-2xs">Jaya Ceylon</p>
        <h2 class="font-semibold sm:text-sm text-xs text-shadow-2xs">Handmade Coffee 500g</h2>
        <p class="text-sm text-shadow-2xs">Rs 550.00</p>
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

    <!-- IMAGE CARD (OVERLAY STYLE) 2 -->
    <div class="relative sm:h-72 h-48 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">

      <img src="/images/Products/new_arrival_02.jpg"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />

      <!-- Overlay -->
      <div class="absolute bottom-0 left-0 w-full sm:bg-black/40 bg-black/40 text-white sm:p-3 p-2 text-shadow-lg">
        <p class="text-xs text-green-300 sm:block hidden text-shadow-2xs">Sashrika</p>
        <h2 class="font-semibold sm:text-sm text-xs text-shadow-2xs">Handmade Coconut Oil 1l</h2>
        <p class="text-sm text-shadow-2xs">Rs 2000.00</p>
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

    <!-- IMAGE CARD (OVERLAY STYLE) 2 -->
    <div class="relative sm:h-72 h-48 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">

      <img src="/images/Products/new_arrival_03.jpg"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />

      <!-- Overlay -->
      <div class="absolute bottom-0 left-0 w-full sm:bg-black/40 bg-black/40 text-white sm:p-3 p-2 text-shadow-lg">
        <p class="text-xs text-green-300 sm:block hidden text-shadow-2xs">Jaya Ceylon</p>
        <h2 class="font-semibold sm:text-sm text-xs text-shadow-2xs">Handmade Cinnamon Tea Bags (20PCS)</h2>
        <p class="text-sm text-shadow-2xs">Rs 500.00</p>
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

  </div>
</section>

<!--? Trust Us -->
      <!--? Companies -->
<section class="mx-4 my-6">
  
  <div class=" grid grid-cols-1 sm:grid-cols-2 gap-4 ">
    <!--* 1 large slide-->
    <div class="relative flex bg-background w-full h-96 items-center justify-center rounded-2xl group overflow-hidden ">

      <img src="/images/company/com_01.jpg" alt="" class="w-full h-full object-cover rounded-2xl transition-transform duration-300  ease-in group-hover:scale-105">

        <!-- Arrow -->
      <div class="absolute right-3 top-3 bg-white/80 rounded-full px-2 py-1
        opacity-0 group-hover:opacity-100 transition-all duration-200
        group-hover:translate-x-1">
        →
      </div>

      <!--Badge-->
      <span class="absolute top-0 left-0 bg-green-500 text-white text-xs px-2 py-1
        rounded-br-lg rounded-tl-lg">
        Trusted Partner
      </span>

      <!--absolute Texts -->
      <div class="absolute sm:left-4 left-3 bottom-0 -translate-y-1/4 text-shadow-lg max-w-md">

        <img src="/images/company/logo_01.png" alt="" class="h-16 bg-white/80 p-1 rounded-full drop-shadow-2xl">

        <h2 class="text-white font-primary font-bold sm:text-4xl text-2xl 
                   left-0 top-0">
                   Jaya Ceylon
        </h2>
        <p class="text-green-300"></p>
      </div>



    </div>

    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
      <!--* 2 slides-->
      <div class="relative flex bg-background w-full h-46 items-center justify-center rounded-2xl
       group overflow-hidden ">

        <img src="/images/company/com_02.jpg" alt="" class="w-full h-full object-cover rounded-2xl transition-transform duration-300  ease-in group-hover:scale-105">

        <!-- Arrow -->
      <div class="absolute right-3 top-3 bg-white/80 rounded-full px-2 py-1
        opacity-0 group-hover:opacity-100 transition-all duration-200
        group-hover:translate-x-1">
        →
      </div>

       <!--Badge-->
      <span class="absolute top-0 left-0 bg-green-500 text-white text-xs px-2 py-1
        rounded-br-lg rounded-tl-lg">
        Trusted Partner
      </span>

      <!--absolute Texts -->
      <div class="absolute left-2 bottom-0 -translate-y-1/4 text-shadow-lg max-w-md">

        <div class="flex gap-2 justify-center items-center">
          <img src="/images/company/logo_02.png" alt="" class="h-6 bg-white/30 p-1 rounded-md drop-shadow-2xl">

        <h2 class="text-white font-primary font-bold sm:text-xl text-l
                   left-0 top-0">
                   Shashrika
        </h2>
        </div>
        
        <p class="text-green-300 text-xs"></p>
      </div>






      </div>
      <!--* 2 slides 3-->
      <div class="relative flex bg-background w-full h-46 items-center justify-center rounded-2xl group overflow-hidden">

         <img src="/images/company/com_03.jpg" alt="" class="w-full h-full object-cover rounded-2xl transition-transform duration-300  ease-in group-hover:scale-105">

        <!-- Arrow -->
      <div class="absolute right-3 top-3 bg-white/80 rounded-full px-2 py-1
        opacity-0 group-hover:opacity-100 transition-all duration-200
        group-hover:translate-x-1">
        →
      </div>

       <!--Badge-->
      <span class="absolute top-0 left-0 bg-green-500 text-white text-xs px-2 py-1
        rounded-br-lg rounded-tl-lg">
        Trusted Partner
      </span>

      <!--absolute Texts -->
      <div class="absolute left-2 bottom-0 -translate-y-1/4 text-shadow-lg max-w-md">

        <div class="flex gap-2 items-center justify-center">
          <img src="/images/company/logo_03.png" alt="" class="h-10 bg-white/80 p-0 rounded-xl drop-shadow-2xl">

        <h2 class="text-white font-primary font-bold sm:text-xl text-l
                   left-0 top- text-shadow-lg">
                   Oshi 
        </h2>
        </div>
        
        <p class="text-green-300 text-xs"></p>
      </div>

      </div>

      <div class="grid grid-cols-1 col-span-2">
        <!--* 1 slide-->
        <div class="relative flex bg-background w-full h-46 items-center justify-center rounded-2xl
        group overflow-hidden">
      
      <img src="/images/company/com_04.jpg" alt="" class="w-full h-full object-cover rounded-2xl transition-transform duration-300  ease-in group-hover:scale-105">

        <!-- Arrow -->
      <div class="absolute right-3 top-3 bg-white/80 rounded-full px-2 py-1
        opacity-0 group-hover:opacity-100 transition-all duration-200
        group-hover:translate-x-1">
        →
      </div>

       <!--Badge-->
      <span class="absolute top-0 left-0 bg-green-500 text-white text-xs px-2 py-1
        rounded-br-lg rounded-tl-lg">
        Trusted Partner
      </span>

      <!--absolute Texts -->
      <div class="absolute left-2 bottom-0 -translate-y-1/4 text-shadow-lg max-w-md">

        <div class="flex gap-2 items-center justify-center">
          <img src="/images/company/logo_04.png" alt="" class="h-10 drop-shadow-2xl">

        <h2 class="text-white font-primary font-bold sm:text-xl text-l
                   left-0 top- text-shadow-lg">
                   Teeny Treats
        </h2>
        </div>
        
        <p class="text-green-300 text-xs"></p>
      </div>
      
      </div>
      </div>

    </div>
  </div>
  
</section>


<!-- Hot Pick -->
<section class="px-4 my-6">

  <div class="grid grid-cols-2 md:grid-cols-5 gap-4">

    <!--* Heading -->
    <div class="md:col-span-1 col-span-2 relative sm:h-72 h-48 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
     
      <!--*-->
      <img src="/images/Products/all_products/item_11.jpg"
        class="h-full w-full object-cover  transition-transform duration-300 group-hover:scale-110" />

      <!-- Overlay -->
      <div class="absolute bottom-0 left-0 w-full sm:bg-black/40 bg-black/40 text-white sm:p-3 p-2 text-shadow-lg">
        <p class="text-xs text-green-300 sm:block hidden text-shadow-2xs">Teeny Treats</p>
        <h2 class="font-semibold sm:text-sm text-xs text-shadow-2xs">Butter Cake 1kg</h2>
        <p class="text-sm text-shadow-2xs">Rs 1400.00</p>
      </div>

      <!-- Badge -->
      <span class="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1
        rounded-br-lg rounded-tl-lg">
        Best Selling 
      </span>

      <!-- Arrow -->
      <div class="absolute right-3 top-3 bg-white/80 rounded-full px-2 py-1
        opacity-0 group-hover:opacity-100 transition-all duration-200
        group-hover:translate-x-1">
        →
      </div>

  </div>


    <div class="col-span-1 relative sm:h-72 h-48 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
      <!--*-->
      <img src="/images/Products/all_products/item_10.jpg"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />

      <!-- Overlay -->
      <div class="absolute bottom-0 left-0 w-full sm:bg-black/40 bg-black/40 text-white sm:p-3 p-2 text-shadow-lg">
        <p class="text-xs text-green-300 sm:block hidden text-shadow-2xs">Hotzy Foods</p>
        <h2 class="font-semibold sm:text-sm text-xs text-shadow-2xs">Snake Bite Hot Source</h2>
        <p class="text-sm text-shadow-2xs">Rs 990.00</p>
      </div>

      <!-- Badge -->
      <span class="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1
        rounded-br-lg rounded-tl-lg">
        Best Selling 
      </span>

      <!-- Arrow -->
      <div class="absolute right-3 top-3 bg-white/80 rounded-full px-2 py-1
        opacity-0 group-hover:opacity-100 transition-all duration-200
        group-hover:translate-x-1">
        →
      </div>

<!--?-->

    
    </div>
    <div class="col-span-1 relative sm:h-72 h-48 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
      <!--*-->
      <img src="/images/Products/all_products/item_12.jpg"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />

      <!-- Overlay -->
      <div class="absolute bottom-0 left-0 w-full sm:bg-black/40 bg-black/40 text-white sm:p-3 p-2 text-shadow-lg">
        <p class="text-xs text-green-300 sm:block hidden text-shadow-2xs">Hotzy Foods</p>
        <h2 class="font-semibold sm:text-sm text-xs text-shadow-2xs">Passion Fassion Jam</h2>
        <p class="text-sm text-shadow-2xs">Rs 740.00</p>
      </div>

      <!-- Badge -->
      <span class="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1
        rounded-br-lg rounded-tl-lg">
        Best Selling 
      </span>

      <!-- Arrow -->
      <div class="absolute right-3 top-3 bg-white/80 rounded-full px-2 py-1
        opacity-0 group-hover:opacity-100 transition-all duration-200
        group-hover:translate-x-1">
        →
      </div>

    </div>

   <!--?-->

    
    
    <div class="col-span-1 relative sm:h-72 h-48 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
      <!--*-->
      <img src="/images/Products/all_products/item_2.jpeg"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />

      <!-- Overlay -->
      <div class="absolute bottom-0 left-0 w-full sm:bg-black/40 bg-black/40 text-white sm:p-3 p-2 text-shadow-lg">
        <p class="text-xs text-green-300 sm:block hidden text-shadow-2xs">Jaya Ceylon</p>
        <h2 class="font-semibold sm:text-sm text-xs text-shadow-2xs">Handmade Black Tea Bags (20PCS)</h2>
        <p class="text-sm text-shadow-2xs">Rs 400.00</p>
      </div>

      <!-- Badge -->
      <span class="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1
        rounded-br-lg rounded-tl-lg">
        Best Selling 
      </span>

      <!-- Arrow -->
      <div class="absolute right-3 top-3 bg-white/80 rounded-full px-2 py-1
        opacity-0 group-hover:opacity-100 transition-all duration-200
        group-hover:translate-x-1">
        →
      </div>

    </div>

    <!--?-->

    
    
    <div class="col-span-1 relative sm:h-72 h-48 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
      <!--*-->
      <img src="/images/Products/all_products/item_13.jpg"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />

      <!-- Overlay -->
      <div class="absolute bottom-0 left-0 w-full sm:bg-black/40 bg-black/40 text-white sm:p-3 p-2 text-shadow-lg">
        <p class="text-xs text-green-300 sm:block hidden text-shadow-2xs">Oshi</p>
        <h2 class="font-semibold sm:text-sm text-xs text-shadow-2xs">Achcharu</h2>
        <p class="text-sm text-shadow-2xs">Rs 550.00</p>
      </div>

      <!-- Badge -->
      <span class="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1
        rounded-br-lg rounded-tl-lg">
        Best Selling 
      </span>

      <!-- Arrow -->
      <div class="absolute right-3 top-3 bg-white/80 rounded-full px-2 py-1
        opacity-0 group-hover:opacity-100 transition-all duration-200
        group-hover:translate-x-1">
        →
      </div>

    </div>
  </div>



</section>

<Footer />

</template>

<style scoped>

</style>
