<template>
  <div class="">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="item in items"
        :key="item.id"
        class="bg-white p-5 py-3 rounded shadow hover:shadow-md"
      >
        <img :src="item.image" alt="image" class="w-full mb-4" />
        <p class="text-gray-500">{{ item.date }}</p>
        <h2 class="text-xl font-semibold py-3">{{ item.name }}</h2>
        <p class="text-gray-700 mb-4">{{ item.text }}</p>
        <div class="flex items-center gap-3 cursor-pointer">
          <router-link to="/">
            <span class="text-blue-500">{{ item.more }}</span>
            <span class="pl-2">{{ item.icon }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const items = reactive([
  {
    image: "../src/assets/blog1 (1).jpg",
    date: "27 Jan 2021",
    name: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    text: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    more: "Read More",
    icon: "icon",
  },
  {
    image: "../src/assets/blog2 (2).jpg",
    date: "27 Jan 2021",
    name: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    text: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    more: "Read More",
    icon: "icon",
  },
  {
    image: "../src/assets/blog3 (3).jpg",
    date: "27 Jan 2021",
    name: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    text: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    more: "Read More",
    icon: "icon",
  },
  {
    image: "../src/assets/blog3 (3).jpg",
    date: "27 Jan 2021",
    name: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    text: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    more: "Read More",
    icon: "icon",
  },
  {
    image: "../src/assets/blog2 (2).jpg",
    date: "27 Jan 2021",
    name: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    text: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    more: "Read More",
    icon: "icon",
  },
  {
    image: "../src/assets/blog1 (1).jpg",
    date: "27 Jan 2021",
    name: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    text: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    more: "Read More",
    icon: "icon",
  },
]);
</script>

<style lang="scss" scoped></style>
