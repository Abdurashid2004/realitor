<script setup>
import Accordion from "../components/Accordion.vue";
</script>

<template>
  <section class="intro">
    <div class="container">
      <div class="text-center text-primary mt-44 md:mt-44 mb-12 md:mb-24">
        <h2 class="text-4xl font-semibold pb-4">Our Pricing Plans</h2>
        <p class="max-w-md mx-auto opacity-70">
          When you’re ready to go beyond prototyping in Figma, Webflow is ready
          to help you bring your designs to life — without coding them.
        </p>
      </div>
      <router-link to="/pricing"></router-link>
    </div>
  </section>

  <section>
    <div class="container">
      <div v-for="item in items" :key="item.id">
        <h2>{{ item.price }}</h2>
        <span>{{ item.name }}</span>
        <h3>{{ item.page }}</h3>
        <p>{{ item.text }}</p>

        <div></div>
      </div>
    </div>
  </section>

  <section class="Accordion">
    <div class="container">
      <div class="mb-24">
        <div class="flex flex-col md:flex-row md:justify-between">
          <div
            class="w-full md:w-[411px] mb-4 md:mb-0 text-center md:text-start"
          >
            <h2 class="text-[48px] font-semibold mb-4">
              Frequently asked questions
            </h2>
            <a class="opacity-80 text-base text-[#2405F2]" href="#"
              >Contact us For More Info</a
            >
          </div>
          <div class="w-full md:w-auto">
            <Accordion />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
