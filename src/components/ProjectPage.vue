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
          <div
            v-for="(item, k) in category.items"
            :key="k"
            class="category-item"
          >
            <img
              :src="getItemImage(item).image"
              alt=""
              class="category-item-image"
            />
            <button
              type="button"
              :class="[item.liked ? 'like-button liked' : 'like-button']"
              @click="toggleLike(item)"
            >
              <svg
                width="36"
                height="35"
                viewBox="0 0 36 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_43_140)">
                  <path
                    d="M18.9504 2.12048L20.8479 7.91976C21.2514 9.15284 22.4018 9.98685 23.6992 9.98685H29.8097C30.7802 9.98685 31.1818 11.23 30.3949 11.7978L25.4753 15.3472C24.4165 16.1111 23.9734 17.4721 24.3794 18.713L26.2641 24.4733C26.5652 25.3934 25.5137 26.1616 24.7286 25.5952L19.7553 22.007C18.7073 21.2509 17.2927 21.2509 16.2447 22.007L11.2714 25.5952C10.4863 26.1616 9.43482 25.3934 9.73586 24.4733L11.6206 18.713C12.0266 17.4721 11.5835 16.1111 10.5247 15.3472L5.60514 11.7978C4.81818 11.23 5.21983 9.98685 6.19025 9.98685H12.3008C13.5982 9.98685 14.7486 9.15284 15.1521 7.91976L17.0496 2.12048C17.3502 1.20177 18.6498 1.20177 18.9504 2.12048Z"
                    stroke="#FFA928"
                    stroke-width="2"
                    shape-rendering="crispEdges"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_43_140"
                    x="0.186523"
                    y="0.431396"
                    width="35.627"
                    height="34.3619"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_43_140"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_43_140"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </button>

            <div class="category-item-info">
              <div class="category-item-info-left">
                <div class="category-item-title">{{ item.itemTitle }}</div>
                <div class="category-item-text">{{ item.itemText }}</div>
              </div>
              <div class="category-item-info-right">
                <router-link to="/blog/details"
                  ><button class="article-item-button">
                    <img
                      src="../assets/img/follow-button.png"
                      alt=""
                      class="article-item-button-image"
                    /></button
                ></router-link>
              </div>
            </div>
          </div>
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
    toggleLike: function (item) {
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
};
</script>

<style>
@import "../assets/styles/project.css";
</style>
