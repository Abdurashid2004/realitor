<template>
  <!-- =========================================== INTRO ========================================== -->
  <div class="pb-12 lg:pb-28 pt-8 lg:pt-20 bg-[#1C1E53] outline-none">
    <div
      class="container pt-16 lg:pt-24 flex flex-col lg:flex-row justify-between items-center md:mt-1 mt-20"
    >
      <div class="w-full lg:w-[60%] max-w-[495px] text-center md:text-start">
        <h1 class="text-4xl lg:text-5xl text-white font-semibold pb-6">
          Building stellar websites for early startups
        </h1>
        <p class="text-lg lg:text-base font-medium text-white opacity-70 pb-6">
          Lorem ipsum dolor sit, consectetur adipiscing elit. Lorem ipsum dolor
          sit, consectetur adipiscing elit. Eiusmod tempor incididunt.
        </p>
        <div class="pt-6 lg:pt-12 flex flex-col lg:flex-row gap-4">
          <router-link to="/work">
            <button
              class="font-medium rounded-3xl py-3 lg:py-4 px-8 lg:px-10 bg-[#FCD980] text-[#1B1C2B] hover:text-white transition duration-300 ease-in-out"
            >
              View our work
            </button>
          </router-link>
          <div class="flex items-center gap-2 cursor-pointer">
            <a href="/pricing" class="font-medium text-white">View Pricing</a>
            <span class="mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="1.5em"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path
                  d="M21.188 9.281L19.78 10.72L24.063 15H4v2h20.063l-4.282 4.281l1.407 1.438L27.905 16z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div class="mt-8 max-w-[695px] lg:mt-0">
        <div class="aspect-w-16">
          <img src="../assets/intro.png" alt="image" class="" />
        </div>
      </div>
    </div>
  </div>

  <!-- ===================================== OurWork =============================================== -->

  <section>
    <div class="container">
      <div class="flex justify-between mt-[57px] mb-[64px]">
        <div>
          <h2 class="text-4xl font-semibold">View our projects</h2>
        </div>
        <div
          class="flex items-center gap-2 text-primary font-medium cursor-pointer"
        >
          <h3 class="text-lg">View More</h3>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 32 32"
            >
              <path
                fill="black"
                d="M21.188 9.281L19.78 10.72L24.063 15H4v2h20.063l-4.282 4.281l1.407 1.438L27.905 16z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div class="grid md:grid-cols-3 gap-5 mt-8">
        <div class="col-span-2 row-span-2 relative overflow-hidden group">
          <div
            class="w-1/2 absolute top-0 duration-300 group-hover:left-0 -left-full h-full bg-gradient-to-br from-[#1C1E536B]/40 to-[#1C1E53] px-8 pt-[350px]"
          >
            <h2 class="text-3xl font-semibold text-white w-[340px]">
              Workhub office Webflow Webflow Design
            </h2>
            <p class="text-[16px] text-white mt-[16px] mb-[40px]">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam
            </p>
            <div class="flex items-center gap-3 mb-20 cursor-pointer">
              <a class="text-base font-lg text-[#FCD980]" href="/">
                View project
              </a>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#FCD980"
                    d="M21.188 9.281L19.78 10.72L24.063 15H4v2h20.063l-4.282 4.281l1.407 1.438L27.905 16z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <img
            class="w-full h-full object-cover"
            src="../assets/Card.jpg"
            alt="Workhub office Webflow Webflow Design"
          />
        </div>
        <div class="col-span-1 relative overflow-hidden group">
          <div
            class="w-full absolute top-0 duration-300 group-hover:left-0 -left-full h-full bg-gradient-to-br from-[#1C1E536B]/40 to-[#1C1E53] px-8 pt-[138px]"
          >
            <h2 class="text-3xl font-semibold text-white w-[320px]">
              Unisaas Website Design
            </h2>
            <div class="flex items-center gap-3 mt-4">
              <a class="text-base font-medium text-[#FCD980]" href="/">
                View project
              </a>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#FCD980"
                    d="M21.188 9.281L19.78 10.72L24.063 15H4v2h20.063l-4.282 4.281l1.407 1.438L27.905 16z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <img
            class="w-full h-full object-cover"
            src="../assets/Rectangle 1313.jpg"
            alt="Unisaas Website Design"
          />
        </div>
        <div class="col-span-1 relative overflow-hidden group">
          <div
            class="w-full absolute top-0 duration-300 group-hover:left-0 -left-full h-full bg-gradient-to-br from-[#1C1E536B]/40 to-[#1C1E53] px-8 pt-[138px]"
          >
            <h2
              class="text-3xl font-semibold text-white justify-center w-[320px]"
            >
              Unisaas Website Design
            </h2>
            <div class="flex items-center gap-3 mt-4">
              <a class="text-base font-medium text-[#FCD980]" href="/">
                View project
              </a>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#FCD980"
                    d="M21.188 9.281L19.78 10.72L24.063 15H4v2h20.063l-4.282 4.281l1.407 1.438L27.905 16z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <img
            class="w-full h-full object-cover"
            src="../assets/Card (1).jpg"
            alt="Additional Project Image"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- ===================================== Cards ================================================= -->

  <section>
    <div id="app" class="bg-[#F4F6FC] pb-32">
      <div class="container mt-[120px]">
        <h3 class="text-xl font-semibold mb-2 pt-24 text-center">Features</h3>
        <h2
          class="text-[48px] font-bold text-center max-w-[610px] mx-auto mb-20"
        >
          Design that solves problems, one product at a time
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="feature-item pl-10 border border-gray-300 h-[306px] flex-col items-center justify-between"
          >
            <img class="mt-8" :src="item.icon" alt="" />
            <div class="mt-12 w-[324px]">
              <h3 class="text-2xl font-medium mb-4 text-[#282938]">
                {{ item.name }}
              </h3>
              <p class="text-lg text-[#282938] opacity-70">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- clients -->

  <section>
    <div class="container">
      <div
        class="mt-12 md:mt-24 lg:mt-24 mb-16 md:mb-32 px-4 text-center md:text-start"
      >
        <div class="flex flex-col md:flex-row justify-between items-start">
          <div class="md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
            <h2 class="text-3xl md:text-4xl font-semibold pb-4">
              What our clients say about us
            </h2>
            <p class="opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
              consectetur adipiscing elit sed.
            </p>
          </div>
          <div class="md:w-2/3 lg:w-3/4 max-w-[663px]">
            <h2 class="text-2xl md:text-3xl pb-6 md:pb-12">
              "The best agency we’ve worked with so far. They understand our
              product and are able to add new features with a great focus."
            </h2>
            <div
              class="flex flex-col md:flex-row items-start md:items-center justify-between"
            >
              <div class="flex items-center gap-4 mb-6 md:mb-0">
                <img
                  src="../assets/opa.png"
                  alt="Client Image"
                  class="w-12 h-12"
                />
                <div class="text-primary">
                  <h3 class="text-lg md:text-xl">Jenny Wilson</h3>
                  <p class="text-sm">Vice President</p>
                </div>
              </div>
              <div class="flex gap-4 items-center cursor-pointer">
                <a href="" class="float-right p-2 ml-80">
                  <svg
                    width="13"
                    height="22"
                    viewBox="0 0 13 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.6"
                      d="M11.5859 0L13 3.21951L3.96947 10.9106L13 18.7805L11.5859 22L0 11.626V9.8374L11.5859 0Z"
                      fill="#282938"
                    />
                  </svg>
                </a>
                <a
                  href="next_page.html"
                  class="right py-2 px-3 bg-[#5239FA] rounded-full"
                >
                  <svg
                    width="13"
                    height="22"
                    viewBox="0 0 13 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.41412 22L0 18.7805L9.03053 11.0894L0 3.21951L1.41412 0L13 10.374V12.1626L1.41412 22Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <router-link to="/"></router-link>
</template>

<script setup>
const items = [
  {
    icon: "../src/assets/icons.png",
    name: "User-Friendly Interface",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    icon: "../src/assets/icons.png",
    name: "High Performance",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    icon: "../src/assets/icons.png",
    name: "Robust Security",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    icon: "../src/assets/icons.png",
    name: "Customizable Settings",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    icon: "../src/assets/icons.png",
    name: "24/7 Customer Support",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    icon: "../src/assets/icons.png",
    name: "Regular Updates",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
];
</script>

<style lang="scss" scoped></style>
