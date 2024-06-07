<script setup>
import { ref } from "vue";

const images = ref(["/simon.svg", "/paul.svg", "/simon.svg", "/sara.svg"]);
const names = ref(["John Smith", "Simon Adams", "Paul Jones", "Sara Hardin"]);
const fields = ref(["CEO", "CTO", "Design Lead", "Project Manager"]);

const logo = ref(["/facebook.svg", "/twitter.svg", "/linkdIn.svg"]);
const getLink = (index) => {
  if (index === 0) {
    return "https://facebook.com";
  } else if (index === 1) {
    return "https://twitter.com";
  } else {
    return "https://linkedin.com";
  }
};
</script>
<template>
  <div class="flex justify-center bg-[#F4F6FC]">

  <div class="max-md:flex justify-center flex-wrap w-full px-[3%] text-blackBlue max-md:py-[64px]">
    <div class="flex mt-12 w-full justify-center max-md:flex-wrap md:justify-betwen gap-6 max-md:px-4">
      <div class="py-12 md:px-16 px-12 w-full max-md:gap-4 bg-white" v-for="(item, index) in images" :key="index" >
        <div class="relative group overflow-hidden rounded-full max-md:flex max-md:justify-center ">
          <img class="rounded-full max-md:w-full" :src="item" alt="" />
          <img

            class="top-full max-md:w-full duration-300 absolute left-0 group-hover:top-0 max-md:left-1/2 max-md:-translate-x-1/2"
            src="../../public/aboutHover.svg"
            alt=""
          />
          <div
            class="top-full max-md:w-[65%] flex duration-300 gap-4 absolute left-1/2 -translate-x-1/2 group-hover:top-1/2 translate-y-[200%] md:translate-y-9"
          >
            <a
              :href="getLink(index_logo)" class="max-md:w-1/2"
              v-for="(item_logo, index_logo) in logo"
              :key="index_logo"
              target="_blank"
              ><img :src="item_logo" alt="" class="max-md:w-1/2 mx-auto" />
            </a>
          </div>
        </div>
        <h6 class="mt-[30px] text-center text-2xl font-medium">
          {{ names[index] }}
        </h6>
        <p class="mt-1 text-center">{{ fields[index] }}</p>
      </div>
    </div>
  </div>
  </div>
</template>

