<script setup lang="ts">
import Footer from '../components/Footer.vue'
import Nav from '../components/Nav.vue'

import {computed, ref, onMounted} from 'vue'; // ← ADD onMounted
import type { Ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'; // ← ADD useRoute
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


onMounted(() => {
  window.scrollTo(0, 0);
});

// ============================================
// 🎯 ROUTER & ROUTE INSTANCES
// ============================================
const router = useRouter();
const route = useRoute(); // ← ADD THIS - to read URL parameters

// ? Products State
const products: Ref<Product[]> = ref(
  productData.map((p: any) => ({
    id: p.id,
    name: p.name,
    price: p.price,
    brand: p.brand,
    badge: p.badge,
    image: Array.isArray(p.images) && p.images.length > 0 ? p.images[0] : '',
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

// ============================================
// 🎯 FILTER LOGIC
// ============================================
// Main filter state that's applied to products
const selectedBrands: Ref<string[]> = ref([]);

// Temporary filter state for mobile (only applied when user clicks "Apply")
const tempSelectedBrands: Ref<string[]> = ref([]);

// Computed property to filter products based on selected brands
const filteredProducts = computed(() => {
  if (selectedBrands.value.length === 0) {
    return products.value;
  }

  return products.value.filter(product => 
    selectedBrands.value.includes(product.brand.toLowerCase().replace(/\s+/g, '-'))
  )
})

// ============================================
// 🎯 READ URL PARAMETERS ON PAGE LOAD
// ============================================
onMounted((): void => {
  // Check if there's a 'brand' query parameter in the URL
  const brandFromUrl = route.query.brand as string | undefined;
  
  if (brandFromUrl) {
    // If brand exists in URL, add it to selected brands
    selectedBrands.value = [brandFromUrl];
    
    console.log('🎯 Brand filter applied from URL:', brandFromUrl);
  }
  
  // 🎯 EXPLANATION:
  // 1. route.query contains all URL parameters
  // 2. route.query.brand gets the 'brand' parameter
  // 3. We set selectedBrands to apply the filter
  // 4. filteredProducts computed property automatically updates!
})

// ============================================
// 🎯 MOBILE FILTER SIDEBAR LOGIC
// ============================================
const isFilterSidebarOpen: Ref<boolean> = ref(false);

// Open filter sidebar and copy current filters to temp
const openFilterSidebar = (): void => {
  isFilterSidebarOpen.value = true;
  
  // Copy current filters to temp (so user can cancel changes)
  tempSelectedBrands.value = [...selectedBrands.value];
  
  // Disable scrolling when sidebar is open
  document.body.style.overflow = 'hidden';
}

// Close filter sidebar without applying changes
const closeFilterSidebar = (): void => {
  isFilterSidebarOpen.value = false;
  
  // Enable scrolling when sidebar is closed
  document.body.style.overflow = '';
}

// Apply filters and close sidebar
const applyFilters = (): void => {
  // Copy temp filters to actual filters
  selectedBrands.value = [...tempSelectedBrands.value];
  
  // Close the sidebar
  closeFilterSidebar();
}

// Clear all filters in mobile view
const clearMobileFilters = (): void => {
  tempSelectedBrands.value = [];
}

// ============================================
// 💡 KEY LEARNING POINTS:
// ============================================
// 1. route.query: Reads URL parameters (everything after '?')
//    Example: /products?brand=jaya-ceylon&category=tea
//    route.query = { brand: 'jaya-ceylon', category: 'tea' }
//
// 2. onMounted: Runs when component loads
//    Perfect for reading URL parameters!
//
// 3. Type assertion: 'as string | undefined'
//    Tells TypeScript what type to expect
// ============================================

</script>

<template >
  

  <!-- ? Background image-->
  <backgroundImage class="absolute inset-0 -z-20 opacity-10">
    <img src="/src/assets/images/textures/test_gpt.png" alt="Background Textures" class="object-cover h-full w-full"/>
  </backgroundImage>

  
    
<!-- ? Nav Bar-->
<Nav />

<div class="bg-background rounded-xl sm:m-4 sm:p-4 m-2 p-2">

<!--? Product Name -->
<h1 class="text-center md:text-7xl text-4xl font-semibold mt-4 mb-6">All Products</h1>

<!-- ============================================ -->
<!-- 📱 MOBILE FILTER BUTTON (Top sticky bar) -->
<!-- ============================================ -->
<aside class="sticky top-0 left-0 w-full bg-background border-t border-gray-200/20 p-4 md:hidden flex justify-center mb-4 z-30">
  <div class="sticky top-0 left-0 w-full md:hidden flex justify-center">
    <button 
      @click="openFilterSidebar"
      class="w-full max-w-md bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg transition-colors text-sm font-medium flex items-center justify-center gap-2"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
      </svg>
      Filter Products
      <span v-if="selectedBrands.length > 0" class="bg-green-500 text-white rounded-full px-2 py-0.5 text-xs">
        {{ selectedBrands.length }}
      </span>
    </button>
  </div>
</aside>

<!--? Items and filter system-->
<div class="flex justify-between items-center md:mt-10 md:mb-4 ">
  <div></div>
</div>

<!--? Items-->
<section>
  <div class="grid md:grid-cols-4 grid-cols-1 sm:gap-2 gap-1">

    <!-- ============================================ -->
    <!-- 💻 DESKTOP FILTER SIDEBAR (Always visible) -->
    <!-- ============================================ -->
    <aside class="md:col-span-1 items-center p-4 h-max sticky top-4 hidden md:block">
      <div class="sticky top-4 hidden md:block">
        <div class="mb-6">
          <label class="block text-medium font-bold">Filter Products</label>
           <div class="text-sm text-gray-600 mt-5">
            Showing {{ filteredProducts.length }} of {{ products.length }} products
          </div>
          <div class="border-t my-6 border-gray-300 w-28"></div>
          <div class="space-y-2">
            <label class="flex items-center checkbox-label">
              <input type="checkbox" class="mr-2 custom-checkbox" value="jaya-ceylon" v-model="selectedBrands">
              <span class="text-base text-gray-600">Jaya Ceylon</span>
            </label>
            <label class="flex items-center checkbox-label">
              <input type="checkbox" class="mr-2 custom-checkbox" value="sashrika" v-model="selectedBrands">
              <span class="text-base text-gray-600">Sashrika</span>
            </label>
            <label class="flex items-center checkbox-label">
              <input type="checkbox" class="mr-2 custom-checkbox" value="oshi" v-model="selectedBrands">
              <span class="text-base text-gray-600">Oshi</span>
            </label>
            <label class="flex items-center checkbox-label">
              <input type="checkbox" class="mr-2 custom-checkbox" value="teeny-treats" v-model="selectedBrands">
              <span class="text-base text-gray-600">Teeny Treats</span>
            </label>
            <label class="flex items-center checkbox-label">
              <input type="checkbox" class="mr-2 custom-checkbox" value="hotzy-food" v-model="selectedBrands">
              <span class="text-base text-gray-600">Hotzy-Food</span>
            </label>
          </div>

          <button 
            v-if="selectedBrands.length > 0"
            @click="selectedBrands = []"
            class="mt-4 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg transition-colors text-sm font-medium"
          >
            Clear Filters ({{ selectedBrands.length }})
          </button>
        </div>
      </div>
    </aside>

    <!-- ============================================ -->
    <!-- 📱 MOBILE FILTER POPUP (Bottom Sheet) -->
    <!-- ============================================ -->
    
    <!-- Backdrop -->
    <div 
      v-if="isFilterSidebarOpen"
      @click="closeFilterSidebar"
      class="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300"
    >
      <!-- 
        🎯 This is the dark overlay
        - Clicking it closes the filter without applying
      -->
    </div>

    <!-- Filter Popup -->
    <div
      class="fixed bottom-0 left-0 right-0 bg-background rounded-t-3xl z-50 transform transition-transform duration-300 ease-in-out md:hidden max-h-[85vh] flex flex-col"
      :class="isFilterSidebarOpen ? 'translate-y-0' : 'translate-y-full'"
    >
      <!-- 
        🎯 KEY ANIMATION:
        - translate-y-0: Visible (position: 0)
        - translate-y-full: Hidden below screen (position: 100%)
        - max-h-[85vh]: Maximum 85% of screen height
        - rounded-t-3xl: Rounded top corners
      -->

      <!-- Drag Handle (Visual indicator) -->
      <div class="flex justify-center pt-3 pb-2">
        <div class="w-12 h-1.5 bg-gray-300 rounded-full"></div>
      </div>

      <!-- Header -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <h2 class="text-xl font-bold text-gray-900">Filter Products</h2>
        <button
          @click="closeFilterSidebar"
          class="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close filters"
        >
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Scrollable Content -->
      <div class="flex-1 overflow-y-auto px-6 py-4">
        <div class="space-y-4">
          
          <!-- Filter Count -->
          <div class="text-sm text-gray-600">
            Showing {{ filteredProducts.length }} of {{ products.length }} products
          </div>

          <!-- Brand Filters -->
          <div>
            <h3 class="font-semibold text-gray-900 mb-3">Brands</h3>
            <div class="space-y-3">
              <label class="flex items-center checkbox-label">
                <input 
                  type="checkbox" 
                  class="mr-3 custom-checkbox" 
                  value="jaya-ceylon" 
                  v-model="tempSelectedBrands"
                >
                <span class="text-base text-gray-700">Jaya Ceylon</span>
              </label>
              <label class="flex items-center checkbox-label">
                <input 
                  type="checkbox" 
                  class="mr-3 custom-checkbox" 
                  value="sashrika" 
                  v-model="tempSelectedBrands"
                >
                <span class="text-base text-gray-700">Sashrika</span>
              </label>
              <label class="flex items-center checkbox-label">
                <input 
                  type="checkbox" 
                  class="mr-3 custom-checkbox" 
                  value="oshi" 
                  v-model="tempSelectedBrands"
                >
                <span class="text-base text-gray-700">Oshi</span>
              </label>
              <label class="flex items-center checkbox-label">
                <input 
                  type="checkbox" 
                  class="mr-3 custom-checkbox" 
                  value="teeny-treats" 
                  v-model="tempSelectedBrands"
                >
                <span class="text-base text-gray-700">Teeny Treats</span>
              </label>
              <label class="flex items-center checkbox-label">
                <input 
                  type="checkbox" 
                  class="mr-3 custom-checkbox" 
                  value="hotzy-food" 
                  v-model="tempSelectedBrands"
                >
                <span class="text-base text-gray-700">Hotzy-Food</span>
              </label>
            </div>
          </div>

          <!-- Clear Filters Button -->
          <button 
            v-if="tempSelectedBrands.length > 0"
            @click="clearMobileFilters"
            class="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-lg transition-colors text-sm font-medium"
          >
            Clear All Filters ({{ tempSelectedBrands.length }})
          </button>

        </div>
      </div>

      <!-- Footer with Action Buttons -->
      <div class="border-t border-gray-200 p-4 bg-white">
        <div class="grid grid-cols-2 gap-3">
          
          <!-- Close Button (Cancel) -->
          <button
            @click="closeFilterSidebar"
            class="py-3 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors font-semibold"
          >
            Close
          </button>

          <!-- Apply Button -->
          <button
            @click="applyFilters"
            class="py-3 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors font-semibold flex items-center justify-center gap-2"
          >
            Apply
            <span v-if="tempSelectedBrands.length > 0" class="bg-white text-green-600 rounded-full px-2 py-0.5 text-xs font-bold">
              {{ tempSelectedBrands.length }}
            </span>
          </button>

        </div>
      </div>

    </div>

    <!-- ============================================ -->
    <!-- 🛍️ PRODUCTS GRID -->
    <!-- ============================================ -->
    <main class="md:col-span-3">
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
                <p class="text-xs text-white">{{ product.brand }}</p>
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