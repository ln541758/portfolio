<template>
  <div class="container mx-auto p-3 md:p-8">
    <div class="flex flex-col-reverse md:flex-row relative">
      <div class="w-full md:w-2/3">
        <ArticleList :articles="articles" />
      </div>
      <div class="w-full md:w-1/3 h-fit p-8 md:sticky md:top-24">
        <!-- Sidebar -->
        <div class="flex flex-col text-left">
          <div
            class="bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300 text-transparent"
          >
            ORCID: 0009-0000-1283-5679
          </div>
          <div
            class="h-[1px] mt-7 mb-7 w-20 bg-amber-200 aos-init aos-animate mr-2"
          ></div>
          <div class="hidden md:block">
            <div class="text-white text-md font-semibold">
              Research Direction
            </div>
            <div class="mt-3 flex flex-wrap gap-1">
              <span
                class="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer"
                >Computer-Aided Design</span
              >
              <span
                class="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer"
                >Wayfinding</span
              >
              <span
                class="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer"
                >Environmental Behavior</span
              >
              <span
                class="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer"
                >Virtual Reality</span
              >
              <span
                class="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer"
                >Human Computer Interaction</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleList from "@/components/ArticleList.vue";

export default {
  data() {
    return {
      articles: [
        {
          id: "1",
          title: "Article One Title",
          desc: "This is the description of article one. It provides a brief summary of the article.",
          slug: "article-one",
          image: "https://picsum.photos/200/200",
          date: "December 12, 2024",
        },
        {
          id: "2",
          title: "Article Two Title",
          desc: "This is the description of article two. It provides a brief summary of the article.",
          slug: "article-two",
          image: "https://picsum.photos/200/200",
          date: "December 11, 2024",
        },
        {
          id: "3",
          title: "Article Three Title",
          desc: "This is the description of article three. It provides a brief summary of the article.",
          slug: "article-three",
          image: "https://picsum.photos/200/200",
          date: "December 10, 2024",
        },
      ],
    };
  },
  components: {
    ArticleList,
  },
};
</script>
