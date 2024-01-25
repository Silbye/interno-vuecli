<template>
  <div class="articles">
    <div class="container">
      <div class="articles-title news-title">Articles & News</div>
      <div class="articles-items news-items">
        <ArticleItem
          v-for="(item, i) in pageDisplay(articleItems)"
          :key="i"
          :data="item"
        />
      </div>
      <div class="articles-pages">
        <button class="article-page" @click="prevPage">{{ "<" }}</button>
        <button
          class="article-page"
          v-if="currentPage - 2 >= 1"
          @click="changePage(currentPage - 2)"
        >
          {{ currentPage - 2 }}
        </button>
        <button
          class="article-page"
          v-if="currentPage - 1 >= 1"
          @click="changePage(currentPage - 1)"
        >
          {{ currentPage - 1 }}
        </button>
        <button class="article-page">{{ currentPage }}</button>
        <button
          class="article-page"
          v-if="currentPage + 1 <= calcPages"
          @click="changePage(currentPage + 1)"
        >
          {{ currentPage + 1 }}
        </button>
        <button
          class="article-page"
          v-if="currentPage + 2 <= calcPages"
          @click="changePage(currentPage + 2)"
        >
          {{ currentPage + 2 }}
        </button>
        <button class="article-page" @click="nextPage">{{ ">" }}</button>
      </div>
    </div>
  </div>
</template>
<script>
import ArticleItem from "./ArticleItem.vue";
export default {
  name: "ArticlesNews",
  data() {
    return {
      articleItems: [
        {
          imgUrl: "article-1.png",
          subTitle: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
        },
        {
          imgUrl: "article-2.png",
          subTitle: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
        },
        {
          imgUrl: "article-3.png",
          subTitle: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
        },
        {
          imgUrl: "article-4.png",
          subTitle: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
        },
        {
          imgUrl: "article-5.png",
          subTitle: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
        },
        {
          imgUrl: "article-6.png",
          subTitle: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
        },
        {
          imgUrl: "article-1.png",
          subTitle: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
        },
        {
          imgUrl: "article-1.png",
          subTitle: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
        },
        {
          imgUrl: "article-1.png",
          subTitle: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
        },
        {
          imgUrl: "article-2.png",
          subTitle: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
        },
        {
          imgUrl: "article-2.png",
          subTitle: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
        },
        {
          imgUrl: "article-2.png",
          subTitle: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
        },
        {
          imgUrl: "article-3.png",
          subTitle: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
        },
        {
          imgUrl: "article-3.png",
          subTitle: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
        },
        {
          imgUrl: "article-3.png",
          subTitle: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
        },
        {
          imgUrl: "article-4.png",
          subTitle: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
        },
        {
          imgUrl: "article-4.png",
          subTitle: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
        },
        {
          imgUrl: "article-4.png",
          subTitle: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
        },
      ],
      currentPage: 1,
    };
  },
  components: {
    ArticleItem,
  },
  methods: {
    pageDisplay(items) {
      const startIndex = (this.currentPage - 1) * 6;
      const endIndex = startIndex + 6;
      return items.slice(startIndex, endIndex);
    },
    changePage(n) {
      this.currentPage = n;
    },
    prevPage() {
      if (this.currentPage !== 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage !== this.calcPages) {
        this.currentPage++;
      }
    },
  },
  computed: {
    calcPages() {
      const totalPages = Math.ceil(this.articleItems.length / 6);
      return totalPages;
    },
  },
};
</script>
