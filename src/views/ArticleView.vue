<template>
  <div class="w-full md:w-3/5 h-20 mx-auto md:mt-5 relative">
    <div class="bg-white rounded-xl mx-3 p-5 md:p-10 md:mx-0">
      <!-- Close Button with Font Awesome -->
      <button
        @click="closePage"
        class="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl"
      >
        <font-awesome-icon icon="times" />
      </button>
      <div>
        <h1
          class="text-xl md:text-4xl text-black text-left font-bold leading-relaxed flex items-center gap-2"
        >
          <a
            v-bind:href="article.link || '#'"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-blue-500"
          >
            {{ article.title || 'Untitled Article' }}
          </a>
        </h1>
        <div class="mt-3 text-left text-gray-800 text-sm">
          Published at <span>{{ article.date }}</span>
        </div>
        <div
          class="h-[2px] w-20 my-5 md:my-10 bg-[#ffdb70] md:w-1/3 aos-init aos-animate mr-2"
        ></div>
        <div>
          <div class="relative w-full">
            <img
              :src="article.image"
              class="rounded-lg w-full h-auto"
              alt="Thumbnail"
            />
          </div>
        </div>
        <div class="text-left text-black mt-8" v-html="article.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { articles } from "../components/Articles.js"; // Replace with the actual path to your `articles.js`

export default {
  data() {
    return {
      route: useRoute(),
      router: useRouter(),
      article: {},
    };
  },
  mounted() {
    this.getDetails();
  },
  methods: {
    getDetails() {
      const id = this.route.params.id; // Get the article ID from the route
      this.article = articles.find((a) => a.id === id) || {};
    },
    closePage() {
      this.router.push("/research"); // Navigate back to the research page
    },
  },
};
</script>

<style scoped>
/* Styling for the close button */
button {
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;
}
button:hover {
  color: #ffdb70; /* Change to hover color */
}
</style>
