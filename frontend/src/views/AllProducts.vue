<script setup lang="ts">
import Footer from '../components/Footer.vue'
import Nav from '../components/Nav.vue'

import {computed, ref} from 'vue';
import type { Ref } from 'vue';
import { useRouter } from 'vue-router'; 
import { useHead } from '@vueuse/head';
import productData from '../data/products.json';

// SEO for this page
useHead({
  title: 'Colo Moro - Handmade Sri Lankan Products Marketplace',
  meta: [
    {
      name: 'description',
      content: 'Browse our collection of handmade Sri Lankan products including Ceylon tea, coffee, coconut oil, and more from trusted local artisans.'
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


const selectedBrands: Ref<string[]> = ref([]);

const filteredProducts = computed(() => {
  if (selectedBrands.value.length === 0) {
    return products.value;
  }

  return products.value.filter(product => 
    selectedBrands.value.includes(product.brand.toLowerCase().replace(/\s+/g, '-'))
  )
}

)


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

<div class="bg-background rounded-xl sm:m-4 sm:p-4 m-2 p-2">

<!--? Product Name -->
<h1 class="text-center md:text-7xl text-4xl font-semibold mt-4 mb-6">All Products</h1>

<!--? items and filter system-->
<div class="flex justify-between items-center md:mt-10 md:mb-4 ">

  <div></div>

</div>

<!--? Items-->
<section>

  <div class="grid md:grid-cols-4 grid-cols-1 sm:gap-2 gap-1">

    <aside class="md:col-span-1 items-center p-4 h-max sticky top-4 hidden md:block">
      <div class="sticky top-4 hidden md:block">
        <div class="mb-6">
            <label class="block text-medium font-bold">Select Products ({{ products.length }})</label>
            <div class="border-t my-6 border-gray-300 w-28"></div>
            <div class="space-y-2">
              <label class="flex items-center">
                <input type="checkbox" class="mr-2 custom-checkbox" value="jaya-ceylon" v-model="selectedBrands">
                <span class="text-base text-gray-600">Jaya Ceylon</span>
              </label>
              <label class="flex items-center ">
                <input type="checkbox" class="mr-2 custom-checkbox" value="sashrika" v-model="selectedBrands">
                <span class="text-base text-gray-600">Sashrika</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" class="mr-2 custom-checkbox" value="oshi" v-model="selectedBrands">
                <span class="text-base text-gray-600">Oshi</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" class="mr-2 custom-checkbox" value="teeny-treats" v-model="selectedBrands">
                <span class="text-base text-gray-600">Teeny Treats</span>
              </label>
               <label class="flex items-center">
                <input type="checkbox" class="mr-2 custom-checkbox" value="hotzy-food" v-model="selectedBrands">
                <span class="text-base text-gray-600">Hotzy-Food</span>
              </label>
            </div>

            <button 
                v-if="selectedBrands.length > 0"
                @click="selectedBrands = []"
                class="mt-4 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg transition-colors text-sm font-medium">
                Clear Filters ({{ selectedBrands.length }})
              </button>

          </div>
      </div>
    </aside>

    <main class="md:col-span-3 ">
  <div class="grid md:grid-cols-3 grid-cols-2 sm:gap-4 gap-2 sm:mb-4">
    <div v-for="product in filteredProducts" :key="product.id" @click="goToProductPage(product.id)">
      
      <!-- IMAGE CARD WITH SEPARATE DETAILS -->
      <div class="rounded-2xl overflow-hidden shadow-lg group cursor-pointer bg-white flex flex-col">
        
        <!-- Image Section -->
        <div class="relative sm:h-72 h-48 w-full overflow-hidden">
          <img
            :src="product.image"
            :alt="product.name"
            class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />

          <!-- Badge -->
          <span
            v-if="product.badge"
            class="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded-br-lg rounded-tl-lg"
          >
            {{ product.badge }}
          </span>

          <div class="absolute bottom-0 left-0 text-white px-2 py-1 rounded-tr-lg bg-green-500">
        <p class="text-xs text-white ">{{ product.brand }}</p>
      </div>

          <!-- Arrow -->
          <div class="absolute right-3 top-3 bg-white/80 rounded-full px-2 py-1 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1">
            →
          </div>
        </div>

        <!-- Details Section (White Background) -->
        <div class="bg-white p-3">
          <h2 class="font-semibold sm:text-sm text-xs text-gray-900 mt-1 h-10 line-clamp-2">{{ product.name }}</h2>
          <p class="text-base text-red-500 font-medium mt-2">Rs {{ product.price.toLocaleString() }}.00</p>
        </div>

      </div>
    </div>
  </div>
</main>

  </div>

</section>


</div>






<Footer />



</template>

<style scoped>

.custom-checkbox {
  appearance: none;
  width: 21px;
  height: 21px;
  border: 2px solid #d1d5db;
  background-color: #dadbdc;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.custom-checkbox:hover {
  border-color: #10b981;
}

.custom-checkbox:checked {
  background: linear-gradient(135deg, #10b981, #059669);
  border-color: #10b981;
}

.custom-checkbox:checked::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 14px;
  font-weight: bold;
}

.checkbox-label {
  cursor: pointer;
  user-select: none;
  transition: color 0.2s ease;
}

.checkbox-label:hover {
  color: #10b981;
}

</style>
