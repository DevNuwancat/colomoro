<script setup lang="ts">
// You can add any props or logic here if needed
</script>

<template>
  <footer class="mt-6 p-4 bg-background rounded-xl">
    <div class="grid md:grid-cols-3 gap-5 p-4 grid-cols-1">
      
      <!-- Newsletter Section -->
      <div>
        <h1 class="mb-4">Sign up for new stories and personal offers</h1>

        <div class="relative w-full max-w-80">
          <input
            type="text"
            name="email"
            id="email"
            class="border rounded-md w-full h-12 p-4 border-gray-400 placeholder-gray-400 placeholder-sm"
            placeholder="Email"
          />
          <div class="absolute right-3 top-1/2 -translate-y-1/2 bg-green-200/80 rounded-full px-2 py-1 cursor-pointer hover:bg-green-300 duration-300">
            →
          </div>
        </div>

        <div class="flex gap-4 mt-4">
          <a href="https://www.facebook.com/share/17V9P6sxQd/" class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-700 text-white hover:scale-110 transition-transform duration-200">
            <i class="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>

      <!-- How It Works Section -->
      <div class="text-xl">
        <h1>How Colo Moro Works</h1>

        <div class="flex flex-col gap-2 mt-4 text-gray-600">
          <div class="flex flex-row items-center gap-2 my-2">
            <span class="bg-green-500 text-white text-xs px-2 py-1 rounded-br-lg rounded-tl-lg">1</span>
            <p class="text-base">Discover Handmade Products</p>
          </div>

          <div class="flex flex-row items-center gap-2 my-2">
            <span class="bg-green-500 text-white text-xs px-2 py-1 rounded-br-lg rounded-tl-lg">2</span>
            <p class="text-base">Contact Sellers via WhatsApp</p>
          </div>

          <div class="flex flex-row items-center gap-2 my-2">
            <span class="bg-green-500 text-white text-xs px-2 py-1 rounded-br-lg rounded-tl-lg">3</span>
            <p class="text-base">Place Your Order</p>
          </div>

          <div class="flex flex-row items-center gap-2 my-2">
            <span class="bg-green-500 text-white text-xs px-2 py-1 rounded-br-lg rounded-tl-lg">4</span>
            <p class="text-base">Fast Local Delivery</p>
          </div>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="text-xl">
        <h1>Contact Us</h1>

        <div class="flex flex-col gap-2 mt-4 text-gray-600">
          <p class="text-base">Phone/WhatsApp: 766 188 920</p>
          <p class="text-base">Email: colomoro@gmail.com</p>
        </div>
      </div>

    </div>
  </footer>
</template>

<style scoped>
</style>