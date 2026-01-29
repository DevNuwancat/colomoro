<script setup lang="ts">

import Footer from '../components/Footer.vue'
import Nav from '../components/Nav.vue'

import {ref, computed} from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';
import productsData from '../data/products.json';

//SEO for this page
useHead({
  title: 'All Products - Handmade Sri Lankan Products | Colo Moro',
  meta: [
    {
      name: 'description',
      content: 'Browse our collection of handmade Sri Lankan products including Jaya Ceylon tea, coffee, coconut oil, and more from trusted local artisans.'
    },
    {
      property: 'og:title',
      content: 'All Products - Colo Moro'
    },
    {
      property: 'og:description',
      content: 'Browse our collection of handmade Sri Lankan products.'
    }
  ]
})

const route = useRoute();
const currentSlide = ref(0);

// Get product by ID from URL
const product = computed(() => {
  const id = parseInt(route.params.id as string);
  return productsData.find(p => p.id === id);
});

const nextSlide = () => {
  if (product.value) {
    currentSlide.value = (currentSlide.value + 1) % product.value.images.length;
  }
};

const prevSlide = () => {
  if (product.value) {
    currentSlide.value = currentSlide.value === 0 
      ? product.value.images.length - 1 
      : currentSlide.value - 1;
  }
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
};
</script>

<template>
  <div class="lg:bg-blue-400 md:bg-yellow-400 sm:bg-red-400 bg-green-400 h-0.5 w-full"></div>

  <backgroundImage class="absolute inset-0 -z-20 opacity-10">
    <img src="/src/assets/images/textures/test_gpt.png" alt="Background Textures" class="object-cover h-full w-full"/>
  </backgroundImage>

  <Nav />

  <!-- Product Detail -->
  <div v-if="product" class="mx-4 my-6">
    <div class="bg-background rounded-xl p-6">
      
      <div class="grid md:grid-cols-2 gap-8">
        
        <!-- LEFT: Image Slideshow -->
        <div class="relative">
          <!-- Main Slideshow -->
          <div class="relative h-96 sm:h-125 rounded-xl overflow-hidden bg-white">
            <img
              v-for="(image, index) in product.images"
              :key="index"
              v-show="currentSlide === index"
              :src="image"
              class="h-full w-full object-cover transition-opacity duration-500"
            />

            <!-- Navigation Arrows -->
            <button 
              v-if="product.images.length > 1"
              @click="prevSlide"
              class="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white px-3 py-2 rounded-full shadow-lg">
              ←
            </button>

            <button 
              v-if="product.images.length > 1"
              @click="nextSlide"
              class="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white px-3 py-2 rounded-full shadow-lg">
              →
            </button>

            <!-- Indicators -->
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <button
                v-for="(_, index) in product.images"
                :key="index"
                @click="goToSlide(index)"
                :class="currentSlide === index 
                  ? 'w-8 h-2 rounded-full bg-white' 
                  : 'w-2 h-2 rounded-full bg-gray-300'"
                class="transition-all duration-300">
              </button>
            </div>
          </div>

          <!-- Thumbnail Gallery -->
          <div class="flex gap-2 mt-4">
            <div
              v-for="(image, index) in product.images"
              :key="index"
              @click="goToSlide(index)"
              :class="currentSlide === index ? 'ring-2 ring-primary' : ''"
              class="w-20 h-20 rounded-lg overflow-hidden cursor-pointer">
              <img :src="image" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <!-- RIGHT: Product Info -->
        <div>
          <span v-if="product.badge" class="inline-block bg-red-500 text-white text-xs px-3 py-1 rounded-full mb-4">
            {{ product.badge }}
          </span>

          <h1 class="text-4xl font-bold mb-2">{{ product.name }}</h1>
          <p class="text-gray-500 mb-4">Brand: {{ product.brand }}</p>

          <div class="flex items-center gap-2 mb-4">
            <div class="flex text-yellow-400">
              ★★★★★
            </div>
            <span class="text-gray-600">({{ product.rating }})</span>
          </div>

          <p class="text-5xl font-bold text-green-700 mb-6">
            Rs {{ product.price.toLocaleString() }}
          </p>

          <p class="text-gray-700 mb-6">{{ product.description }}</p>

          

          <div class="flex gap-4">
            <button class="flex-1 bg-green-500 text-white py-3 rounded-full hover:bg-green-600/80 transition-colors font-semibold">
              Shop with WhatsApp
            </button>
  
          </div>

          <!--
          <div class="mt-8 space-y-4">
            <div class="flex items-start gap-3">
              <span class="text-2xl">🚚</span>
              <div>
                <p class="font-semibold">Free Delivery</p>
                <p class="text-sm text-gray-600">For orders over Rs 5,000</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">↩️</span>
              <div>
                <p class="font-semibold">7 Days Return</p>
                <p class="text-sm text-gray-600">Easy return policy</p>
              </div>
            </div>
          </div>
          -->

        </div>
        
      </div>
    </div>
  </div>

  <!-- Product not found -->
  <div v-else class="mx-4 my-6 text-center">
    <h2 class="text-2xl font-bold">Product not found</h2>
    <router-link to="/all-products" class="text-primary hover:underline">
      Back to products
    </router-link>
  </div>

  <Footer />

</template>