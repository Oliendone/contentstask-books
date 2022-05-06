<template>
  <HeroBanner id="bltf00edbbf36e8790d" />
  <div class="wrapper container">
    <div class="skeleton" v-if="!books">
      <div class="loader"></div>
    </div>
    <div class="books">
      <BookItem
        v-for="item in books"
        :title="item.title"
        :key="item.system.uid"
        :image="item.imageConnection.edges[0].node.url"
        :link="item.system.uid"
      />
    </div>
    <div class="buttons" v-if="books">
      <button
        class="button"
        :class="{ 'button--hide': page === 1 }"
        @click="prevPage"
      >
        Prev
      </button>
      <button
        class="button"
        :class="{ 'button--hide': total === page * 5 }"
        @click="nextPage"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import HeroBanner from "@/components/HeroBanner";
import { useQuery, useResult } from "@vue/apollo-composable";
import { BOOKS_QUERY } from "@/queries/books";
import BookItem from "@/components/BookItem";
import { ref } from "vue";

const page = ref(1);

const nextPage = () => {
  page.value++;
};

const prevPage = () => {
  page.value--;
};

const { result } = useQuery(BOOKS_QUERY, () => ({
  skip: page.value * 5 - 5,
  limit: page.value * 5,
}));

const books = useResult(result, null, data => data.all_book_page.items);
const total = useResult(result, null, data => data.all_book_page.total);
</script>

<style lang="sass" scoped>
.wrapper
  padding-bottom: 40px
  min-height: 1000px
  display: flex
  flex-direction: column
  align-items: center
.books
  padding: 40px 0
  display: grid
  grid-template-columns: repeat(3, 1fr)
  gap: 24px
  justify-items: center
.buttons
  display: grid
  grid-template-columns: 1fr 1fr
  margin: 0 auto
.button
  border: none
  padding: 8px 16px
  text-transform: uppercase
  background-color: rgba(0,0,0,0.3)
  color: white
  border-radius: 8px
  &--hide
    display: contents
.button + .button
  margin-left: 10px
.skeleton
  min-height: 1000px
  display: flex
  justify-content: center
  align-items: center
@import '@/assets/loader.sass'
</style>
