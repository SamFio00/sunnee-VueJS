<p align="center">
  <a href="https://sunneekids.netlify.app/" target="_blank">
    <img src="https://image.thum.io/get/width/900/https://sunneekids.netlify.app" alt="Sunnee Configurator Preview" />
  </a>
</p>

# Sunnee Kids - Bottle Configurator

Un configuratore interattivo sviluppato con **Vue.js** che permette agli utenti di personalizzare i colori di una bottiglia termica della linea **Sunnee Kids**.

L'obiettivo del progetto è offrire un'esperienza semplice e intuitiva per scegliere i colori delle diverse parti della bottiglia prima della spedizione del prodotto.

---

## Demo

Prova il configuratore qui:

https://sunneekids.netlify.app/

---

## Funzionalità

- Selezione del colore del **tappo**
- Selezione del colore del **corpo**
- Selezione del colore del **fondo**
- **10 colori predefiniti** tra cui scegliere
- **Anteprima della bottiglia in tempo reale**
- Navigazione guidata **step-by-step**
- Pulsanti **Back / Next / Finish**
- Pagina di **benvenuto**
- Pagina finale con **anteprima della bottiglia completata**
- Layout **completamente responsive**

---

## Tecnologie utilizzate

Il progetto è sviluppato utilizzando:

- **Vue 3** (Composition API)
- **Vue Router**
- **Vite**
- **JavaScript**
- **HTML5 / CSS3**
- **SVG** per l'anteprima dinamica della bottiglia

---

## Struttura dei componenti

### App.vue

Componente principale dell'applicazione.

Gestisce lo **stato globale della bottiglia**:

- colore del tappo
- colore del corpo
- colore del fondo

Lo stato viene passato ai componenti tramite **props** e aggiornato tramite **eventi**.

---

### StepView.vue

Gestisce il **configuratore step-by-step**.

Contiene:

- selezione dei colori
- gestione dello step corrente
- navigazione tra gli step
- anteprima aggiornata della bottiglia

---

### BottlePreview.vue

Mostra l'**anteprima della bottiglia** utilizzando un **SVG dinamico**.

Le parti della bottiglia cambiano colore in tempo reale in base alle scelte dell'utente:

- tappo
- corpo
- fondo

---

### ColorPicker.vue

Componente riutilizzabile per la **selezione dei colori**.

Mostra una palette di **10 colori predefiniti** e invia l'evento di selezione al componente padre.

---

### WelcomeView.vue

Pagina iniziale del configuratore.

Mostra:

- logo Sunnee
- messaggio di benvenuto
- pulsante per iniziare la personalizzazione

---

### ThanksView.vue

Pagina finale mostrata dopo aver completato la configurazione.

Contiene:

- messaggio di ringraziamento
- anteprima della bottiglia personalizzata

---

## Logica dell'applicazione

Il configuratore segue un flusso semplice:

1. L'utente entra nella **pagina di benvenuto**
2. Avvia la personalizzazione della bottiglia
3. Sceglie i colori per:
   - tappo
   - corpo
   - fondo
4. L'anteprima della bottiglia viene aggiornata **in tempo reale**
5. Al termine viene mostrata la **bottiglia configurata pronta per la spedizione**

La gestione dello stato segue il pattern:

**props down → events up**

---

## Stile e UI

L'interfaccia è progettata per essere:

- semplice
- colorata
- adatta anche a un pubblico giovane

Caratteristiche principali:

- design minimal e pulito
- palette colori vivace
- animazioni leggere
- layout responsive per mobile e desktop
- effetti di riflesso e ombra sulla bottiglia SVG

---

## Autore

© 2026 — **Samuele Fiorini**

- GitHub: https://github.com/SamFio00  
- LinkedIn: https://www.linkedin.com/in/samuele-fiorini-38bba9325  
- Instagram: https://www.instagram.com/fiorini_sam_00
