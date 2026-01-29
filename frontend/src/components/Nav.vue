<script setup lang="ts">
import type router from '../router';

</script>

<template>
    <nav>
  <div class="flex justify-between items-center p-4 mx-4 my-4 border-t border-l border-r border-gray-200 rounded-xl bg-background border">

    <!-- * Logo -->
    <div class="flex items-center gap-4">
      <img src="/src/assets/images/logo.png" class="h-8 w-auto object-cover" alt="Logo" />
    </div>

    <!-- * Navigation Links -->
    <div class="flex items-center gap-8 sm:text-base  text-gray-900">

      <router-link to="/" class="hover:text-primary transition-colors sm:flex hidden">Home</router-link>
      
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

</template>

<style scoped>
</style>