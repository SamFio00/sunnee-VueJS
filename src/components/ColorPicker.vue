<script setup>

const { part } = defineProps({
  part: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['change-color'])

const changeColor = (color) => {
  emit('change-color', part, color)
}
// Define a list of colors 
const colors = [
  '#8B0000', // dark red
  '#D2691E', // bronze
  '#B8860B', // dark gold
  '#2F4F2F', // forest green
  '#4682B4', // steel blue
  '#4B0082', // deep indigo
  '#6A0DAD', // metallic purple
  '#8B4513', // copper brown
  '#2F4F4F', // anthracite grey
  '#1C1C1C'  // graphite black
]

</script>

<!-- color picker -->
<template>
  <div class="color-picker">
    <button
      v-for="color in colors"
      :key="color"
      :style="{ backgroundColor: color }"
      @click="changeColor(color)"
    ></button>
  </div>
</template>

<style scoped>

.color-picker {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.color-picker button {
  width: 25px;
  height: 25px;
  border: 2px solid transparent;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
}

.color-picker button:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

@media (min-width: 1024px) {
  .color-picker button {
    width: 30px;
    height: 30px;
  }
}

</style>