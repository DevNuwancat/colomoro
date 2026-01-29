<script setup lang="ts">
import Footer from '../components/Footer.vue'
import Nav from '../components/Nav.vue'
</script>

<template>
  <!-- ? Colored divider -->
  <div class="lg:bg-blue-400 md:bg-yellow-400 sm:bg-red-400 bg-green-400 h-0.5 w-full"></div>

  <!-- ? Background image-->
  <div class="absolute inset-0 -z-20 opacity-10">
    <img src="/src/assets/images/textures/test_gpt.png" alt="Background Textures" class="object-cover h-full w-full"/>
  </div>

  <!-- ? Nav Bar-->
  <Nav />

  <!-- ? About Us Section -->
  <section class="mx-4 my-6">
    <div class="bg-background border border-gray-200 rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
      


      <!-- Heading -->
      <div class="text-center mb-8">
        <h1 class="text-4xl md:text-5xl font-primary font-bold text-gray-900 mb-4">About Us</h1>
        <div class="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
      </div>


       <div class="max-w-5xl mx-auto mb-12">
        <img src="/src/assets/images/logo.png" alt="" class="h-20 w-auto mx-auto mb-6"/>
    </div>

      <!-- Content -->
      <div class="space-y-6 text-gray-700 leading-relaxed">
        <p class="text-lg">
          <span class="font-semibold text-green-600">Colo Moro</span> is a trusted marketplace for handmade foods, created with love, care, and tradition. We connect local home-based makers and small producers with customers who value pure, safe, and authentic food.
        </p>

        <p>
          Every product on Colo Moro is carefully selected to ensure it is <span class="font-semibold">100% handmade</span>, free from harmful additives, and prepared using traditional methods. We believe real food should be honest, simple, and made the right way.
        </p>

        <p>
          Our platform allows customers to directly contact sellers through <span class="text-green-600 font-semibold">WhatsApp</span>, making it easy to ask questions, place orders, and arrange delivery. This direct connection helps build trust, transparency, and fair support for local producers.
        </p>

        <!-- Mission Box -->
        <div class="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 my-8">
          <h2 class="text-2xl font-primary font-bold text-gray-900 mb-4">Our Mission</h2>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <span class="bg-green-500 text-white text-xs px-2 py-1 rounded-br-lg rounded-tl-lg mt-1">✓</span>
              <span>Support local handmade food creators</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="bg-green-500 text-white text-xs px-2 py-1 rounded-br-lg rounded-tl-lg mt-1">✓</span>
              <span>Deliver safe, pure, and high-quality products</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="bg-green-500 text-white text-xs px-2 py-1 rounded-br-lg rounded-tl-lg mt-1">✓</span>
              <span>Build a community based on trust and authenticity</span>
            </li>
          </ul>
        </div>

        <p class="text-lg text-center font-primary font-semibold text-gray-900 pt-4">
          We are more than a marketplace — we are a bridge between good food and good people.
        </p>
      </div>

      <!-- CTA Button -->
      <div class="text-center mt-10">
        <router-link to="/all-products">
          <button class="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
            Explore Our Products
          </button>
        </router-link>
      </div>

    </div>
  </section>

  <Footer />
</template>

<style scoped>
</style>