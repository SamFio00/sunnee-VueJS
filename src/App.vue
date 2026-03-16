<script setup>

import { reactive } from 'vue';

const bottle = reactive({
  cap: 'red',
  body: 'blue',
  bottom: 'violet'
})

const changeColor = (part, color) => {
  bottle[part] = color;
}
</script>

<template>
  <Transition name="fade">
  <RouterView :bottle="bottle" @change-color="changeColor" />
  </Transition>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: system-ui, -apple-system, "Segoe UI Variable Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    overflow-x: hidden;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

</style>
