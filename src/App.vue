<script setup>
import { reactive } from 'vue'
import { RouterView } from 'vue-router'

// global state 
const bottle = reactive({
  Cap: 'grey',
  Body: 'grey',
  Bottom: 'grey'
})

// Update bottle color
const changeColor = (part, color) => {
  bottle[part] = color
}
</script>

<template>

  <!-- Background blobs -->
  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>
  <div class="blob blob-3"></div>
  <div class="blob blob-4"></div>

  <!-- Router view (with transition)-->
  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <!-- Pass state and events to view -->
      <component
        :is="Component"
        :bottle="bottle"
        @change-color="changeColor"
      />
    </Transition>
  </RouterView>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Nunito', sans-serif;
  min-width: 320px;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: #f7f6e7;
}

.blob-1,
.blob-2,
.blob-3,
.blob-4 {
  position: fixed;
  width: 250px;
  height: 250px;
  opacity: 0.15;
  z-index: -1;
  border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%;
}

.blob-1 {
  background: #d1920b;
  top: -100px;
  left: -100px;
}

.blob-2 {
  background: #0ba3d1;
  top: 100px;
  right: -100px;
}

.blob-3 {
  background: #d10b0b;
  bottom: -100px;
  right: -100px;
}

.blob-4 {
  background: #7bd10b;
  bottom: -60px;
  left: -1px;
}

@media (min-width: 768px) {
  .blob-1,
  .blob-2,
  .blob-3,
  .blob-4 {
    width: 400px;
    height: 400px;
  }
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