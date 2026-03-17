<script setup>
import ColorPicker from '@/components/ColorPicker.vue';
import BottlePreview from '@/components/BottlePreview.vue';
import { ref } from 'vue';

const props = defineProps(['bottle'])
const emit = defineEmits(['change-color'])
const steps = ['Cap', 'Body', 'Bottom']
const currentStep = ref(0);

const changeColor = (part, color) => {
    emit('change-color', part, color);
}
</script>

<template>
    <div class="container">
        <div class="right">
            <BottlePreview :bottle="bottle" />
        </div>

        <div class="left">
            <h1>Customize your bottle</h1>
            <div v-for="(step, index) in steps" :key="index" :class="['step', { active: index === currentStep }]">
                <div class="step-header">
                    <h2>{{ index + 1 }}. {{ step }}</h2>
                    <div class="color-dot" :style="{ backgroundColor: bottle[step] }"></div>
                </div>
                <div class="picker-wrapper">
                    <Transition name="accordion">
                        <ColorPicker v-if="index === currentStep" :part="step" @change-color="changeColor"/>
                    </Transition>
                </div>
            </div>

            <button v-if="currentStep > 0" @click="currentStep--">Back</button>
            <button v-if="currentStep < steps.length - 1" @click="currentStep++">Next</button>
            <button v-if="currentStep === steps.length - 1" @click="$router.push('/thanks')">Finish</button>
        </div>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        padding: 1.5rem;
        gap: 1.5rem;
        min-height: 100vh;
    }

    .right {
        width: 100%;
        display: flex;
        justify-content: center;
        order: -1;
    }

    .left {
        width: 100%;
    }

    h1 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    h2 {
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }

    .step {
        opacity: 0.4;
        margin-bottom: 1rem;
        transition: opacity 0.3s ease;
    }

    .step.active {
        opacity: 1;
    }

    .step h2 {
        margin-bottom: 0.5rem;
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

    .picker-wrapper {
        margin-top: 1rem;
    }

    button {
        position: relative;
        z-index: 10;
        margin-top: 1rem;
        margin-right: 1rem;
        padding: 0.75rem 1.5rem;
        letter-spacing: 0.5px;
        font-weight: 600;
        background-color:  #ff683a;
        color: white;
        border: none;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        border-radius: 50px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #c75431;
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
        transform: translatey(-2px);
    }

    svg {
        height: 250px;
        width: 200px;
    }

    .accordion-enter-active {
        transition: max-height 0.4s ease-out;
        overflow: hidden;
        max-height: 200px;
    }

    .accordion-leave-active {
        transition: max-height 0.15s ease-in;
        overflow: hidden;
        max-height: 200px;
    }

    .accordion-enter-from { max-height: 0; }
    .accordion-leave-to { max-height: 0; }

    @media (min-width: 768px) and (max-width: 1023px) {
        .container {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            height: 100vh;
            padding: 1.5rem;
            gap: 2rem;
        }

        h1 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
        }

        h2 {
            font-size: 1.2rem;
        }

        .step {
            flex: 1;
            margin-bottom: 1rem;
        }

        .step.active {
            height: 120px;
        }

        .left {
            padding-left: 1rem;
            flex: 1;
            order: -1;
        }

        .right {
            flex: 1;
            order: 0;
        }

        .picker-wrapper {
            position: absolute;
        }

        button {
            margin-top: 1rem;
            padding: 0.5rem 1rem;
        }
    }

    @media (min-width: 1024px) {
        .container {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            height: 100vh;
            padding: 2rem;
            gap: 4rem;
        }

        h1 {
            font-size: 2.5rem;
            margin-bottom: 2rem;
        }

        h2 {
            font-size: 1.5rem;
        }

        .step {
            flex: 1;
            margin-bottom: 1.5rem;
        }

        .step.active {
            height: 120px;
        }

        .step h2 {
            margin-bottom: 1rem;
        }

        .picker-wrapper {
            position: absolute;
        }

        button {
            margin-top: 2rem;
        }

        svg {
            height: 600px;
            width: 250px;
        }

.left {
    padding-left: 2rem;
    width: 600px;
    order: -1;
}

.right {
    width: 500px;
    order: 0;
}
    }
</style>