import { h } from 'vite';
<template>
  <section>
    <div class="container mt-32 mb-32 md:mt-52 md:mb-32">
      <div class="text-center text-primary px-4 md:px-0">
        <h2 class="text-3xl md:text-5xl font-semibold mx-auto max-w-screen-lg">
          A UX Case Study on Creating a Studious Environment for Students
        </h2>
        <h3 class="pt-4 pb-8">Andrew Jonson Posted on 27th January 2021</h3>
        <img class="w-full" src="../assets/intro_blog.jpg" alt="image" />
        <p class="text-lg mx-auto max-w-screen-md pt-16 pb-4 opacity-70">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle. By the same
          illusion which lifts the horizon of the sea to the level of the
          spectator on a hillside.
        </p>
        <router-link class="text-blue-600 opacity-70 text-lg" to="/blog"
          >Read more</router-link
        >
      </div>
      <router-link to="/blog"></router-link>
    </div>
  </section>

  <section>
    <div class="container">
      <h2 class="text-[48px] text-center font-semibold text-primary">
        Our Blog
      </h2>
      <div class=" mt-10 mb-32">
          <Blog />
        </div>
      </div>
  </section>
</template>

<script setup>
import Blog from "../components/Blog.vue";
</script>

<style lang="scss" scoped></style>
