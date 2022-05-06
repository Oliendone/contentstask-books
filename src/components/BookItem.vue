<template>
  <RouterLink :to="props.link" class="box">
    <div class="image-box">
      <img :src="props.image" alt="" class="image" />
    </div>
    <div class="title">
      {{ props.title }}
    </div>
  </RouterLink>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  image: String,
  link: String,
});
</script>

<style lang="sass" scoped>
.box
  display: flex
  flex-direction: column
  align-items: center
  max-width: 250px
  min-width: 150px
  width: 100%
  text-decoration: none
  .image-box
    width: 100%
    height: 350px
  .image
    width: 100%
    height: 100%
    object-fit: cover
  .title
    text-align: center
    margin-top: 15px
    color: #131313
</style>
