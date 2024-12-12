<template>
  <div class="flex flex-col gap-4 md:px-20 fade-zoom-up">
    <article v-for="article in articles" :key="article.id">
      <router-link
        :to="`/read/${article.slug}/${article.id}`"
        class="flex w-full bg-[#1e1e1f] border-[#383838] rounded-xl text-left text-white p-5 md:py-7 md:px-8 cursor-pointer hover:bg-[#282828] items-center"
      >
        <div class="w-full pr-4">
          <div class="text-xs mb-1 text-slate-400 flex items-center italic">
            <div
              class="h-[1px] w-20 bg-amber-200 md:w-5 aos-init aos-animate mr-2"
            ></div>
            {{ article.date }}
          </div>
          <h1 class="text-sm md:text-md text-amber-200 font-bold mb-2 paraf">
            {{ article.title }}
          </h1>
          <div class="text-sm hidden md:block paraf">
            {{ article.desc }}
          </div>
        </div>
        <div>
          <div class="w-20 h-20 md:w-28 flex items-center md:h-28">
            <img :src="article.image" class="rounded-lg md:rounded-xl" alt="" />
          </div>
        </div>
      </router-link>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.paraf {
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}
@media (min-width: 768px) {
  .paraf {
    display: -webkit-box;
  }
}
</style>
