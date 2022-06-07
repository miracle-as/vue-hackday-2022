<script setup lang="ts">
import { useItemStore } from '@/stores/itemStore';
import Card from '../components/Card.vue';

const itemStore = useItemStore()

function addCardItem(card: Card, title: string) {
    itemStore.addCardItem(card, title)
}

function updateCardTitle(card: Card, title: string) {
    itemStore.update(card, title)
}

function removeCardItem(card: Card, item: Item) {
    itemStore.removeCardItem(card, item)
}
</script>

<template>
    <main>
        <div v-for="card in itemStore.cards" :key="card.id">
            <Card :card="card" @titleInput="(title) => updateCardTitle(card, title)"
                @addCardItem="(title) => addCardItem(card, title)"
                @removeItemClick="(item) => removeCardItem(card, item)" />
        </div>
    </main>
</template>
