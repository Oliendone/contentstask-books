<template>
  <div class="wrapper container">
    <button class="button" @click="router.back()">Go Back</button>
    <div v-if="!entry" class="skeleton">
      <div class="loader"></div>
    </div>
    <div class="content" v-if="entry">
      <div class="additional-info">
        <div class="image-box">
          <img :src="landingImage" class="image" />
        </div>
        <div class="text text--info">
          Book's author: <span>{{ entry.book_s_author }}</span>
        </div>
        <div class="text text--info">
          Number of pages: <span>{{ entry.number_of_pages }}</span>
        </div>
        <a
          :href="entry.link_to_shop.href"
          target="_blank"
          class="link text--info"
          >Link to shop</a
        >
      </div>
      <div class="main-info">
        <h1 class="title">{{ entry.title }}</h1>
        <div class="text" v-html="entry.rich_text"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getEntry } from "@/queries/landing-page";
import { fetchBookImage } from "@/queries/landing-image";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute(),
  router = useRouter();

const entry = ref(null),
  landingImage = ref(null);

const getBookData = async uid => {
  entry.value = await getEntry(uid);
  landingImage.value = await fetchBookImage(entry.value.image.url);
};

onMounted(() => {
  getBookData(route.params.uid);
});
</script>

<style lang="sass" scoped>
.wrapper
  padding-top: 60px
  padding-bottom: 60px
  .content
    margin-top: 30px
    display: grid
    grid-template-columns: 0.7fr 1fr
    column-gap: 50px
  .title
    font-size: 24px
    line-height: 32px
    margin-bottom: 16px
  .text
    color: #393939
    &::v-deep
      p + p
        margin-top: 8px
    &--info
      margin-top: 8px
  .link
    display: inline-block
  .button
    border: none
    padding: 8px 16px
    text-transform: uppercase
    background-color: rgba(0,0,0,0.3)
    color: white
    border-radius: 8px
  .image-box
    height: 550px
  .image
    width: 100%
    height: 100%
    object-fit: contain
.skeleton
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
@import '@/assets/loader.sass'
</style>
