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
          v-for="(category, index) in filteredList"
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
          <div class="article-page">01</div>
          <div class="article-page">02</div>
          <div class="article-page">03</div>
          <div class="article-page">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
            >
              <path
                d="M1.55714 15L7.5 8.31429L1.55714 1.62857"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
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
  },
  computed: {
    filteredList() {
      return this.categories.filter((category) =>
        category.name.includes(this.activeCategory)
      );
    },
  },
  components: { ProjectItem },
};
</script>

<style>
@import "../assets/styles/project.css";
</style>
