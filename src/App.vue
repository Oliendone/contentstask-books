<template></template>

<script>
import { useQuery, useResult } from "@vue/apollo-composable";
import { BOOKS_QUERY } from "../queries/character";

export default {
  name: "App",
  setup() {
    const { result, loading, error } = useQuery(BOOKS_QUERY);

    const books = useResult(
      result,
      null,
      data => data.book_page.all_book_page.items
    );

    return {
      books,
      loading,
      error,
    };
  },
};
</script>

<style lang="sass"></style>
