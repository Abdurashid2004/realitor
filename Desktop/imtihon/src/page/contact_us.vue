<template>
  <div class="container mt-56">
    <div
      class="max-w-lg mx-auto text-center px-4 md:max-w-none md:w-3/4 lg:w-5/12 xl:w-1/2"
    >
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-semibold">Contact Us</h2>
      <p class="text-lg md:text-xl opacity-70 my-4 md:my-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
    </div>

    <div class="max-w-4xl container mb-32 px-4">
      <div class="p-6 bg-[#F4F6FC] rounded-lg shadow-md">
        <form action="#" class="space-y-6">
          <div class="flex flex-wrap -mx-3">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
                for="name"
              >
                Name
              </label>
              <input
                class="block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight outline-none focus:bg-white focus:border-gray-500"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                class="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                placeholder="Enter your Email"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
                for="subject1"
              >
                Subject
              </label>
              <input
                class="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="subject1"
                type="text"
                placeholder="Provide context"
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
                for="subject2"
              >
                Subject
              </label>
              <input
                class="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="subject2"
                type="text"
                placeholder="Select Subject"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
                for="message"
              >
                Message
              </label>
              <textarea
                style="resize: none"
                class="block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 outline-none focus:bg-white focus:border-gray-500"
                id="message"
                rows="5"
                placeholder="Write your question here"
              ></textarea>
            </div>
          </div>
          <div class="flex justify-center md:justify-start">
            <button
              class="bg-gray-800 text-2xl text-white font-semibold py-3 px-9 rounded-full hover:bg-gray-700 focus:outline-none"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>

    <router-link to="/contact_us"></router-link>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
