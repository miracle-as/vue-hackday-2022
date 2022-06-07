<script setup lang="ts">
import { useItemStore } from '@/stores/itemStore';

const itemStore = useItemStore()

function addEmptyCard() {
  itemStore.addEmptyCard()
}
</script>

<template>
  <div class="greetings">
    <h1>Svært at tage en beslutning</h1>
    <h3>
      om hverdagens småting?
    </h3>
    <h4>
      Bliv fri for de smålige beslutninger i hverdagen - lad hjulet bestemme for dig.
    </h4>

    <button @click="addEmptyCard">Tilføj liste</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}
</style>
