<script setup>
import ColorPicker from '@/components/ColorPicker.vue';
import BottlePreview from '@/components/BottlePreview.vue';
import { ref } from 'vue';

const props = defineProps(['bottle'])
const emit = defineEmits(['change-color'])
const steps = [
    'Cap',
    'Body',
    'Bottom'
]
const currentStep = ref(0);

const changeColor = (part, color) => {
    emit('change-color', part, color);
}

</script>

<template>
    
    <div class="container">
        
        <div class="left">
            <h1>Customize your bottle</h1>
            <div v-for="(step, index) in steps" :key="index" :class="['step', { active: index === currentStep}]" >
                <div class="step-header">
                <h2>{{ index + 1 }}. {{ step }}</h2>
                <div class="color-dot" :style="{ backgroundColor: bottle[step] }"></div>
                </div>
                <ColorPicker v-if="index === currentStep" :part="step" @change-color="changeColor"/>
            </div>

            <button v-if="currentStep > 0" @click="currentStep--">Back</button>
            <button v-if="currentStep < steps.length - 1" @click="currentStep++">Next</button>
            <button v-if="currentStep === steps.length - 1" @click="$router.push('/thanks')">Finish</button>
        </div>

        
        <div class="right">
            <BottlePreview :bottle="bottle" />
        </div>
    
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100vh;
        padding: 2rem;
        gap: 10rem;
    }

    .step {
        flex: 1;
        opacity: 0.4;
        transition: opacity 0.3s ease;
    }

    .step.active {
        opacity: 1;
    }

    .step h2 {
        margin-bottom: 1rem;
    }

    .step-header {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .color-dot {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid #ccc;
    }

    button {
        margin-top: 1rem;
        margin-right: 1rem;
        padding: 0.75rem 1.5rem;
        background-color: #0ba3d1;
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #075b75;
    }

    .left {
        flex: 1;
    }

    .right {
        flex: 1;
    }

    @media (max-width: 768px) {
    .container {
    flex-direction: column;
    }
}
</style>