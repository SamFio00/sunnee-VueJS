<script setup>

const props = defineProps(['bottle'])

</script>

<template>
    <svg viewBox="0 0 100 300" width="300" height="800">
        <defs>
            <!-- Riflesso semplice -->
            <linearGradient id="shine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:white;stop-opacity:0" />
                <stop offset="30%" style="stop-color:white;stop-opacity:0.3" />
                <stop offset="100%" style="stop-color:white;stop-opacity:0" />
            </linearGradient>
        </defs>
        
        <!-- Tappo -->
        <rect x="37" y="29" width="10" height="20" rx="3" :fill="bottle.Cap" stroke="black" stroke-width="1.5" />
        <!-- Riflesso tappo (lato sinistro) -->
        <rect x="38" y="30" width="3" height="18" rx="1.5" fill="white" opacity="0.25" />
        <!-- Ombra tappo (lato destro) -->
        <rect x="44" y="30" width="2" height="18" rx="1" fill="black" opacity="0.15" />
        
        <!-- Collo -->
        <rect x="35" y="35" width="40" height="15" :fill="bottle.Cap" stroke="black" stroke-width="1.5" />
        
        <!-- Corpo principale -->
        <rect x="25" y="50" width="58" height="170" :fill="bottle.Body" stroke="black" stroke-width="2" />
        
        <!-- Riflesso -->
        <rect x="28" y="55" width="22" height="160" fill="url(#shine)" />
        
        <g>
            <!-- Scritta SUNNEE con contorno nero -->
            <text x="54" y="145" font-family="Arial, sans-serif" font-size="10" font-weight="bold" 
                  fill="black" text-anchor="middle" letter-spacing="1" stroke="black" stroke-width="2">SUNNEE</text>
            <text x="54" y="145" font-family="Arial, sans-serif" font-size="10" font-weight="bold" 
                  fill="white" text-anchor="middle" letter-spacing="1">SUNNEE</text>
            
            <!-- Linee decorative con contorno -->
            <line x1="35" y1="150" x2="48" y2="150" stroke="black" stroke-width="1.2" opacity="0.8" />
            <line x1="35" y1="150" x2="48" y2="150" stroke="white" stroke-width="0.8" opacity="0.6" />
            <line x1="60" y1="150" x2="73" y2="150" stroke="black" stroke-width="1.2" opacity="0.8" />
            <line x1="60" y1="150" x2="73" y2="150" stroke="white" stroke-width="0.8" opacity="0.6" />
            
            <!-- Capacità con contorno nero -->
            <text x="54" y="158" font-family="Arial, sans-serif" font-size="5" 
                  fill="black" text-anchor="middle" stroke="black" stroke-width="0.8">750ML</text>
            <text x="54" y="158" font-family="Arial, sans-serif" font-size="5" 
                  fill="white" text-anchor="middle" opacity="0.7">750ML</text>
        </g>
        
        <!-- Base -->
        <rect x="25" y="220" width="58" height="20" rx="2" :fill="bottle.Bottom" stroke="black" stroke-width="1.5" />
        <!-- Riflesso base superiore -->
        <rect x="26" y="221" width="56" height="3" rx="1" fill="white" opacity="0.2" />
        <!-- Riflesso base lato sinistro -->
        <rect x="26" y="222" width="4" height="16" fill="white" opacity="0.15" />
        <!-- Ombra base lato destro -->
        <rect x="77" y="222" width="5" height="16" fill="black" opacity="0.1" />
        <!-- Ombra base inferiore -->
        <rect x="26" y="236" width="56" height="3" rx="1" fill="black" opacity="0.15" />
    </svg>
</template>

<style scoped>
svg {
    filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.15));
}
</style>