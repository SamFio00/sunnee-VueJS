<script setup>
import BottlePreview from '@/components/BottlePreview.vue'

defineProps({
  bottle: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="container">
    <h1>Thank You!</h1>

    <div class="finishedBottle">
      <h3>Your bottle:</h3>
      <BottlePreview :bottle="bottle" />
      <p><em>Your bottle is now ready to be shipped.</em></p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 1.5rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1rem;
}

.finishedBottle {
  margin-top: 2rem;
}

.finishedBottle p {
  opacity: 0.8;
}

svg {
  width: 200px;
  height: 350px;
}

@media (min-width: 768px) {
  h1 {
    font-size: 4rem;
  }

  svg {
    width: 300px;
    height: 800px;
  }
}
</style>