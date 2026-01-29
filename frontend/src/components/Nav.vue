<script setup lang="ts">

import{ ref } from 'vue';
import type { Ref } from 'vue';

// is mobile menu is open 

const isMobileMenuOpen: Ref<boolean> = ref(false);

const openMenu = (): void => {
    isMobileMenuOpen.value = true;

    // Disable scrolling when mobile menu is open
    document.body.style.overflow = 'hidden';
}

const closeMenu = (): void => {
    isMobileMenuOpen.value = false;

    // Enable scrolling when mobile menu is closed
    document.body.style.overflow = '';
}

const toggleMenu = (): void => {
  if (isMobileMenuOpen.value) {
    closeMenu()
  }else {
    openMenu()
  }
}


</script>

<template>
    <nav>
  <div class="flex justify-between items-center p-4 mx-4 my-4 border-t border-l border-r border-gray-200 rounded-xl bg-background border">


    <div class="flex items-center sm:hidden">
      <button class="p-2 hover:bg-gray-100 rounded-lg transition-colors" @click="toggleMenu">
        <img src="/images/list.png" alt="" class="h-6">
      </button>
      
    </div>


    <!-- * Logo -->
    <div class="flex items-center gap-4">
      <router-link to="/">
        <img src="/src/assets/images/logo.png" class="h-8 w-auto object-cover" alt="Logo" />
      </router-link>
    </div>



    <!-- * Navigation Links -->
    <div class="flex items-center gap-8 sm:text-base  text-gray-900">

      <router-link to="/" class="hover:text-primary transition-colors sm:flex hidden">Home</router-link>
      
      <router-link to="/all-products" class="hover:bg-linear-to-r hover:from-red-600 hover:to-red-700
      transition-colors rounded-full px-4 py-2 
      bg-linear-to-r from-red-500 to-red-500 text-white
      
      ">All Products</router-link>

      <router-link to="/aboutus" class="hover:text-primary transition-colors sm:flex hidden ">About Us</router-link>
      <router-link to="/contactus" class="hover:text-primary transition-colors sm:flex hidden">Contact Us</router-link> 
    </div>

    <div class="relative items-center hidden sm:flex">
        <a href="https://wa.me/">
          <button class=" bg-linear-to-r from-green-500 to-green-600 text-sm p-2 rounded-md text-white border 
                         hover:bg-green-800 transition-colors">
                         WhatsApp
          </button>
        </a>
    </div>

  </div>

  <!-- ============================================ -->
  <!-- 🎭 BACKDROP (Dark Overlay) -->
  <!-- ============================================ -->
  <!-- 
    🔑 KEY FIX: Backdrop is SEPARATE from sidebar now!
    This prevents click conflicts
  -->
  <div 
    v-if="isMobileMenuOpen"
    @click="closeMenu"
    class="fixed inset-0 bg-black/50 z-40 sm:hidden transition-opacity duration-300"
  >
    <!-- 
      🎯 Changed z-40 (backdrop behind sidebar which is z-50)
      🎯 Changed bg-black/50 (darker, more visible)
    -->
  </div>

  <!-- ============================================ -->
  <!-- 📱 MOBILE SIDEBAR (Separate from backdrop!) -->
  <!-- ============================================ -->
  <div
    class="fixed top-0 left-0 h-full w-64 bg-background border-r border-gray-200 z-50 transform transition-transform duration-300 ease-in-out sm:hidden"
    :class="isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <!-- 
      🎯 KEY POINT: This div has transition-transform
      - When menu opens: translate-x-0 (position: 0, visible)
      - When menu closes: -translate-x-full (position: -100%, hidden left)
      - duration-300 = animation takes 300ms
      - ease-in-out = smooth acceleration
    -->

    <!-- Close button -->
    <div class="flex justify-end p-4 border-b border-gray-200">
      <button 
        @click="closeMenu" 
        class="text-gray-600 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 rounded-full px-2.5 py-1 transition-colors"
      >
        ✕
      </button>
      <!-- 🔧 FIXED: Changed @click="$emit('toggleSidebar')" to @click="closeMenu" -->
    </div>

    <!-- Menu Links -->
    <div class="flex flex-col items-center gap-6 p-6">
      <router-link 
        to="/" 
        @click="closeMenu"
        class="hover:text-primary transition-colors text-lg"
      >
        Home
      </router-link>
      
      <router-link 
        to="/all-products" 
        @click="closeMenu"
        class="hover:bg-linear-to-r hover:from-red-600 hover:to-red-700 transition-colors rounded-full px-4 py-2 bg-linear-to-r from-red-500 to-red-500 text-white text-lg"
      >
        All Products
      </router-link>

      <router-link 
        to="/aboutus" 
        @click="closeMenu"
        class="hover:text-primary transition-colors text-lg"
      >
        About Us
      </router-link>

      <router-link 
        to="/contactus" 
        @click="closeMenu"
        class="hover:text-primary transition-colors text-lg"
      >
        Contact Us
      </router-link> 

      <a href="https://wa.me/94123456789">
        <button class="bg-linear-to-r from-green-500 to-green-600 text-sm p-2 rounded-md text-white border hover:bg-green-800 transition-colors">
          WhatsApp
        </button>
      </a>
    </div>
  </div>

</nav>

</template>

<style scoped>
</style>