<template>
  <section class="intro">
<div class="container mt-[150px] md:mt-[80px] lg:mt-[140px] mb-8 md:mb-16">
  <div class="flex flex-col md:flex-row justify-between">
    <div class="text-[#282938] max-w-[395px] text-center md:text-start">
      <h3 class="text-2xl md:text-3xl text-center md:text-start">About us</h3>
      <h2 class="text-4xl md:text-5xl pt-8 pb-8 md:pb-12 font-semibold">
        Our designs solve problems
      </h2>
      <p class="text-lg md:text-[16px] opacity-70">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
    </div>
    <div class="mt-6 md:mt-0">
      <img src="../assets/intro (2).jpg" alt="" class="w-full" />
    </div>
  </div>
  <router-link to="/about_us"></router-link>
</div>

  </section>

  <section class="">
    <div class="container mt-6 md:mt-12 lg:mt-20">
      <div
        class="flex flex-col md:flex-row justify-between items-center bg-gray-100 py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-12 text-primary"
      >
        <div class="w-full md:w-[48%] lg:w-[45%] md:mr-4">
          <h2
            class="text-2xl md:text-3xl lg:text-4xl font-semibold pb-4 md:pb-6"
          >
            Goal Focused
          </h2>
          <p class="opacity-70 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div class="w-full md:w-[48%] lg:w-[45%] md:ml-4 mt-6 md:mt-0">
          <h2
            class="text-2xl md:text-3xl lg:text-4xl font-semibold pb-4 md:pb-6"
          >
            Continuous Improvement
          </h2>
          <p class="opacity-70 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <img class="w-full" src="../assets/middle.jpg" alt="image" />
    </div>
  </section>

  <section>
    <div class="bg-[#F4F6FC] mt-32 md:py-[128px]">
      <div class="container">
        <h2
          class="text-primary text-[48px] mt-[10px] text-center font-semibold"
        >
          Meet our team
        </h2>
        <User />
      </div>
    </div>
  </section>
</template>

<script setup>
import User from "../components/User.vue";
</script>

<style lang="scss" scoped></style>
