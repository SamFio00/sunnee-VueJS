<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>


<template>
    <div class="container">
        <h1>Welcome to Sunnee's Family!</h1>
        <p>Thanks for your purchase!</p>
        <p>Your Gift is now ready to be personalized.</p>
        <button @click="router.push('/step')">Customize your bottle</button>
    </div>
</template>

<style scoped>
    
    .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    }

    h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    }

    p {
    font-size: 1.2rem;
    margin-bottom: 1rem;    
    }

    button {
    margin-top: 4rem;
    padding: 0.75rem 1.5rem;
    font-size: 1.5rem;
    background-color: #0ba3d1;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    }

    button:hover {
    background-color: #075b75;
    }
</style>