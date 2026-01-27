<script setup lang="ts">

import {ref} from 'vue';
import type { Ref } from 'vue';
import { useRouter } from 'vue-router'; 
import productData from '../data/products.json';

// ? Router instance
const router = useRouter();
// ? Products State
// Map productData to match Product interface (add 'image' property)
const products: Ref<Product[]> = ref(
  productData.map((p: any) => ({
    id: p.id,
    name: p.name,
    price: p.price,
    brand: p.brand,
    badge: p.badge,
    image: Array.isArray(p.images) && p.images.length > 0 ? p.images[0] : '', // Use first image or empty string
  }))
);


interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  image: string;
  badge: string;
}

// Navigate product page
const goToProductPage = (productId: number): void => {
  router.push('/product/' + productId);
}



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
    <div class="flex items-center gap-8 text-sm font-base text-gray-900">
      <a href="#" class="hover:text-primary transition-colors sm:flex hidden">Home</a>
      
      <router-link to="/all-products" class="hover:bg-linear-to-r hover:from-red-600 hover:to-red-700
      transition-colors rounded-full px-4 py-2 
      bg-linear-to-r from-red-500 to-red-500 text-white
      
      ">All Products</router-link>

      <a href="#" class="hover:text-primary transition-colors sm:flex hidden ">About Us</a>
      <a href="#" class="hover:text-primary transition-colors sm:flex hidden">Contact Us</a> 
    </div>

    <div class="relative flex items-center">
        <a href="#">
          <button class=" bg-linear-to-r from-green-500 to-green-600 text-sm p-2 rounded-md text-white border 
                         hover:bg-green-800">
                         WhatsApp
          </button>
        </a>
    </div>

  </div>
</nav>

<div class="bg-background rounded-xl m-4 p-4">

<!--? Product Name -->
<h1 class="text-center text-7xl font-semibold">All Products</h1>

<!--? items and filter system-->
<div class="flex justify-between items-center mt-6 mb-4">

  <div class="flex gap-2 justify-center items-center">
    <img src="/src/assets/images/icons/settings-sliders.png" alt="" 
    class="h-5 w-5 object-cover"/>
    <p class="text-[18px]">Filters</p>
  </div>

  <div></div>

</div>

<!--? Items-->
<section>

  <div class="grid md:grid-cols-4 grid-cols-1 gap-2">

    <aside class="md:md-span-1">
      <div class="sticky top-4 bg-green-300">
        <div>Filter</div>
      </div>
    </aside>

    <main class="md:col-span-3">

      <div class="grid md:grid-cols-3 grid-cols-2 gap-4 mb-4">
        <div v-for="product in products" :key="product.id" @click="goToProductPage(product.id)">
           <!-- IMAGE CARD (OVERLAY STYLE) -->
    <div class="relative sm:h-72 h-48 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">

      <img :src="product.image"
        :alt="product.name"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />

      <!-- Overlay -->
      <div class="absolute bottom-0 left-0 w-full sm:bg-green-800/70  text-white sm:p-3 p-2 text-shadow-lg">
        <p class="text-xs text-green-300 sm:block hidden">{{ product.brand }}</p>
        <h2 class="font-semibold sm:text-sm text-xs">{{ product.name }}</h2>
        <p class="text-sm">Rs {{ product.price.toLocaleString() }}.00</p>
      </div>

      <!-- Badge -->
      <span 
      v-if="product.badge"
      class="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1
        rounded-br-lg rounded-tl-lg">
        {{ product.badge }}
      </span>

      <!-- Arrow -->
      <div class="absolute right-3 top-3 bg-white/80 rounded-full px-2 py-1
        opacity-0 group-hover:opacity-100 transition-all duration-200
        group-hover:translate-x-1">
        →
      </div>
    </div>
        </div>
      </div>
      
    </main>

  </div>

</section>


</div>






<!--? footer Section --> 
<footer bg-background class="mt-6 p-4 bg-background rounded-xl">

  <!---->
  <div class="grid grid-cols-3 gap-5 p-4 font-primary">

    <div class="text-3xl font-semibold ">
      Sign up for new stories and personal offers
    </div>

    <div class="font-bold text-xl">Info</div>

    <div class="font-bold text-xl">Contact Us</div>

  </div>

</footer>



</template>

<style scoped>

</style>
