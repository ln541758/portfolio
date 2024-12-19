<script>
export default {
  data() {
    return {
      activeTab: 1,
      activeImageIndex: 0,
      items: [
        {
          id: 1,
          name: "Group 1",
          images: ["1", "2", "3"],
        },
        {
          id: 2,
          name: "Group 2",
          images: ["4", "5", "6"],
        },
        {
          id: 3,
          name: "Group 3",
          images: ["16", "17", "18"],
        },
        {
          id: 4,
          name: "Group 4",
          images: ["19", "20", "21"],
        },
        {
          id: 5,
          name: "Group 5",
          images: ["7", "8", "9"],
        },
        {
          id: 6,
          name: "Group 6",
          images: ["10", "11"],
        },
        {
          id: 7,
          name: "Group 7",
          images: ["12", "13"],
        },
        {
          id: 8,
          name: "Group 8",
          images: ["14", "15"],
        },
      ],
    };
  },
  methods: {
    selectTab(id) {
      this.activeTab = id;
      this.activeImageIndex = 0;
    },
    prevImage() {
      if (this.activeImageIndex > 0) {
        this.activeImageIndex--;
      }
    },
    nextImage() {
      if (
        this.activeImageIndex <
        this.items[this.activeTab - 1].images.length - 1
      ) {
        this.activeImageIndex++;
      }
    },
  },
};
</script>

<template>
  <div class="flex px-5 py-5 md:px-12 md:py-10 text-amber-50 mx-3">
    <!-- left -->
    <div class="flex-1 flex flex-col items-center justify-center relative">
      <div class="w-full h-auto relative">
        <img
          :src="
            '/img/portfolio-' +
            items[activeTab - 1].images[activeImageIndex] +
            '.png'
          "
          alt="Project Image"
          class="drop-shadow-xl rounded-xl w-full"
          style="max-height: 650px; object-fit: contain"
        />
        <!-- left -->
        <div
          class="absolute top-0 left-0 h-full w-1/2 cursor-pointer"
          @click="prevImage"
          :style="{ pointerEvents: activeImageIndex === 0 ? 'none' : 'auto' }"
        ></div>
        <!-- right -->
        <div
          class="absolute top-0 right-0 h-full w-1/2 cursor-pointer"
          @click="nextImage"
          :style="{
            pointerEvents:
              activeImageIndex === items[activeTab - 1].images.length - 1
                ? 'none'
                : 'auto',
          }"
        ></div>
      </div>
    </div>

    <!-- right -->
    <div class="flex flex-col items-center justify-center ml-5">
      <div
        v-for="item in items"
        :key="item.id"
        class="cursor-pointer w-4 h-4 rounded-full mb-4"
        :class="{
          'bg-amber-300': activeTab === item.id,
          'bg-gray-500 hover:bg-gray-750': activeTab !== item.id,
        }"
        @click="selectTab(item.id)"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.absolute {
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.1);
}
.absolute:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
.cursor-pointer {
  transition: background-color 0.3s ease;
}
</style>
