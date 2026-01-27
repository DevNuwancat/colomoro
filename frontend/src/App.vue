<script setup lang="ts">




</script>

<template >
  <!-- ? Colored divider -->
  <div class=" lg:bg-blue-400 md:bg-yellow-400 sm:bg-red-400 bg-green-400 h-0.5 w-full"></div>

  <!-- ? Background image-->
  <backgroundImage class="absolute inset-0 -z-20 opacity-10">
    <img src="/src/assets/images/textures/test_gpt.png" alt="Background Textures" class="object-cover h-full w-full"/>
  </backgroundImage>


    
  <router-view />



</template>

<style scoped>

</style>
