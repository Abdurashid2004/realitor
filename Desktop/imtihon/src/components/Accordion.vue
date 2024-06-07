<template>
<div class="overflow-x-auto">
  <div
    v-for="(item, index) in accordionItems"
    :key="index"
    class="accordion w-full md:w-[700px] border-b-2 border-[#C2BBFF] py-2 text-primary cursor-pointer"
  >
    <div class="header p-4 rounded-md text-xl md:text-2xl font-medium" @click="openAccordion(index)">
      <span class="pr-4 text-[#2405F2]">{{ item.number }}</span>
      <span class="text-primary">{{ item.title }}</span>
      <span class="float-right duration-200 opacity-70 text-xl md:text-2xl font-semibold" :class="{ 'rotate-45': isOpen[index] }"
        >+</span
      >
    </div>
    <div
      class="body overflow-hidden duration-200"
      :class="[isOpen[index] ? 'max-h-[500px]' : 'max-h-0']"
    >
      <div class="p-4">
        {{ item.content }}
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      isOpen: [],
      accordionItems: [
        {
          number: "01",
          title: "How much time does it take ?",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          number: "02",
          title: "What is your class naming convention ?",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          number: "03",
          title: "How do we communicate ?",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          number: "04",
          title: "I have project. Can you handle it ?",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          number: "05",
          title: "What is your class naming convention ?",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    };
  },
  methods: {
    openAccordion(index) {

      this.isOpen[index] = !this.isOpen[index];
    },
  },
};
</script>
