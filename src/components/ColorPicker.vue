<script setup>

const props = defineProps({
    part:  {
        type: String,
        required: true
    }
})

const emit = defineEmits(['change-color'])

const changeColor = (color) => {
    emit('change-color', props.part, color);
}

const colors = [
  '#E63946', // Rosso corallo (tipo Hydro Flask)
  '#2A9D8F', // Verde acqua/teal (molto popolare)
  '#264653', // Blu navy profondo
  '#E76F51', // Terracotta/arancio bruciato
  '#F4A261', // Sabbia/beige caldo
  '#8B4789', // Viola melanzana
  '#457B9D', // Azzurro acciaio
  '#010101', // Nero
  '#6C757D', // Grigio grafite
  '#F8F9FA', // Bianco sporco/crema
]
</script>

<template>
    <div class="color-picker">
        <button v-for="color in colors" :key="color" :style="{ backgroundColor: color }" @click="changeColor(color)"></button>
    </div>
</template>

<style scoped>
    .color-picker {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .color-picker button {
        width: 30px;
        height: 30px;
        border: black 1px solid;
        border-radius: 50%;
        margin: 5px;
        cursor: pointer;
    }
</style>