<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>


<template>
    <div class="container">
        <div class="logo">
            <img src="/sea-and-sun.png" alt="sunnee logo">
            <span class="brand">SUNNEE</span>
            <span class="sub">kids</span>
        </div>
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
        padding: 1.5rem;
    }

    .logo {
        margin-bottom: 1.5rem;
    }

    img {
        width: 90px;
        height: 90px;
        margin-right: 0.5rem;
        vertical-align: middle;
    }

    .brand {
        font-size: 4rem;
        font-weight: bold;
        margin-right: 0.2rem;
    }

    .sub {
        font-size: 1rem;
        font-weight: 400;
        color: #ff683a;
    }

    h1 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 0.8rem;
        margin-bottom: 1rem;    
    }

    button {
        margin-top: 2rem;
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
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

    button:active {
        background-color: #c75431;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        transform: translatey(2px);
    }

    @media (min-width: 768px) {

        
        h1 {
            font-size: 2rem;
        }

        p {
            font-size: 1rem;
        }

        button {
            margin-top: 2rem;
            font-size: 1.5rem;
        }
    }
</style>