<script setup lang="ts">
defineProps<{
    card: Card
}>()

const emit = defineEmits<{
    (event: 'addCardItem', value: string): void
    (event: 'removeItemClick', value: Item): void
    (event: 'titleInput', value: string): void
}>()

function addItem(e: Event) {
    const target = e.target as HTMLInputElement
    emit('addCardItem', target.value)
    target.value = ''
}

function setTitle(e: Event) {
    const target = e.target as HTMLInputElement
    emit('titleInput', target.value)
}

</script>

<template>
    <div class="card-container">
        <div class="title-input-container">
            <input class="title-input" @input="setTitle" />
        </div>
        <div class="item-title-container">
            <input class="item-title" @keyup.enter="addItem" />
        </div>
        <li v-for="item in card.items" :key="item.id">
            {{ item.title }}
            <button @click="(_) => emit('removeItemClick', item)">
                <i class="fa-solid fa-trash-can" />
            </button>
        </li>
    </div>
</template>

<style scoped>
.card-container {
    border-radius: 2pt;
    box-shadow: 2px 2px 2px 2px #888888;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20pt;
    width: 200pt;
}

.item-title {
    border: 0px;
}

.item-title:focus {
    border: 0px;
    outline: none;
}

.item-title-container {
    border: 1px solid;
    border-color: #C4CBF6;
    border-radius: 2px;
    margin-top: 6pt;
    margin-bottom: 6pt;
}

.title-input {
    background-color: transparent;
    border: 0px;
    color: blue;
}

.title-input:focus {
    border: 0px;
    outline: none;
}

.title-input-container {
    background-color: #C4CBF6;
    border-radius: 2pt;
    padding: 6pt;
}
</style>