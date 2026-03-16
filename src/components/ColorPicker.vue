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
'#8B0000', // Rosso metallico scuro
'#D2691E', // Arancione bronzo
'#B8860B', // Giallo oro scuro
'#2F4F2F', // Verde bosco metallico
'#4682B4', // Blu acciaio
'#4B0082', // Indaco profondo
'#6A0DAD', // Viola metallico
'#8B4513', // Marrone rame (extra)
'#2F4F4F', // Grigio antracite (extra)
'#1C1C1C', // Nero grafite (extra)
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