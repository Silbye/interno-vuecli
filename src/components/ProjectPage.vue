<template>
  <div class="project">
    <div class="project-big articles-big">
      <div class="blog-info">
        <div class="blog-box">
          <div class="blog-title">Our Project</div>
          <div class="blog-text">Home / Project</div>
        </div>
      </div>
    </div>
    <div class="projects">
      <div class="container">
        <div class="categories">
          <button
            @click="changeCategory('Bathroom')"
            :class="[
              activeCategory === 'Bathroom'
                ? 'category active-category'
                : 'category',
            ]"
          >
            Bathroom
          </button>
          <button
            @click="changeCategory('Bedroom')"
            :class="[
              activeCategory === 'Bedroom'
                ? 'category active-category'
                : 'category',
            ]"
          >
            Bed Room
          </button>
          <button
            @click="changeCategory('Kitchen')"
            :class="[
              activeCategory === 'Kitchen'
                ? 'category active-category'
                : 'category',
            ]"
          >
            Kitchan
          </button>
          <button
            @click="changeCategory('LivingArea')"
            :class="[
              activeCategory === 'LivingArea'
                ? 'category active-category'
                : 'category',
            ]"
          >
            Living Area
          </button>
        </div>
        <div
          v-for="(category, index) in pageDisplay(filteredList)"
          :key="index"
          class="category-items"
        >
          <ProjectItem
            v-for="(item, index) in category.items"
            :key="index"
            :itemData="item"
            :item-i-d="index"
            :Category="category.name"
            @changeLike="toggleLike(item)"
          ></ProjectItem>
        </div>
        <div class="category-pages articles-pages">
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
  </div>
</template>
<script>
import ProjectItem from "./ProjectItem.vue";

export default {
  name: "ProjectPage",
  data() {
    return {
      activeCategory: "Bedroom",
      categories: [
        {
          name: "Bathroom",
          items: [
            {
              image: "project-1.png",
              itemTitle: "Minimal Bathroom",
              itemText: "Decor / Artchitecture",
              liked: false,
            },
          ],
        },
        {
          name: "Bedroom",
          items: [
            {
              image: "project-1.png",
              itemTitle: "Minimal Bedroom",
              itemText: "Decor / Artchitecture",
              liked: false,
            },
            {
              image: "project-2.png",
              itemTitle: "Minimal Bedroom",
              itemText: "Decor / Artchitecture",
              liked: false,
            },
            {
              image: "project-3.png",
              itemTitle: "Minimal Bedroom",
              itemText: "Decor / Artchitecture",
              liked: false,
            },
            {
              image: "project-4.png",
              itemTitle: "Minimal Bedroom",
              itemText: "Decor / Artchitecture",
              liked: false,
            },
            {
              image: "project-5.png",
              itemTitle: "Minimal Bedroom",
              itemText: "Decor / Artchitecture",
              liked: false,
            },
            {
              image: "project-6.png",
              itemTitle: "Minimal Bedroom",
              itemText: "Decor / Artchitecture",
              liked: false,
            },
            {
              image: "project-7.png",
              itemTitle: "Minimal Bedroom",
              itemText: "Decor / Artchitecture",
              liked: false,
            },
            {
              image: "project-8.png",
              itemTitle: "Minimal Bedroom",
              itemText: "Decor / Artchitecture",
              liked: false,
            },
          ],
        },
        {
          name: "Kitchen",
          items: [
            {
              image: "project-1.png",
              itemTitle: "Minimal Kitchen",
              itemText: "Decor / Artchitecture",
              liked: false,
            },
          ],
        },
        {
          name: "LivingArea",
          items: [
            {
              image: "project-1.png",
              itemTitle: "Minimal Living Area",
              itemText: "Decor / Artchitecture",
              liked: false,
            },
          ],
        },
      ],
      currentPage: 1,
    };
  },
  methods: {
    changeCategory(category) {
      this.activeCategory = category;
    },
    getItemImage(item) {
      return {
        item,
        image: item.image && require(`../assets/img/Project/${item.image}`),
      };
    },
    toggleLike(item) {
      item.liked = !item.liked;
    },
    pageDisplay(items) {
      const startIndex = (this.currentPage - 1) * 10;
      const endIndex = startIndex + 10;
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
    filteredList() {
      return this.categories.filter((category) =>
        category.name.includes(this.activeCategory)
      );
    },
    calcPages() {
      const totalPages = Math.ceil(this.filteredList.length / 10);
      return totalPages;
    },
  },
  components: { ProjectItem },
};
</script>

<style>
@import "../assets/styles/project.css";
</style>
