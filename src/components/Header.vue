<template>
  <header class="header">
    <div class="wrapper container">
      <RouterLink to="/" class="text"> BOOKS </RouterLink>
      <select name="lang" id="lang" class="lang" v-model="language">
        <option value="en-us">EN</option>
        <option value="uk-ua">UA</option>
      </select>
    </div>
  </header>
</template>

<script setup>
import { language } from "@/use/useLanguage";
</script>

<style lang="sass" scoped>
header
  position: absolute
  top: 0
  width: 100%
  display: flex
  align-items: center
  height: 40px
  background-color: rgba(0,0,0,0.3)
  backdrop-filter: blur(10px)
  .wrapper
    width: 100%
    display: flex
    justify-content: space-between
  .text
    text-decoration: none
    color: white
  .lang
    background-color: transparent
    color: white
    border: none
    outline: none
</style>
